import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const base = path.dirname(fileURLToPath(import.meta.url));
const pause = ms => new Promise(r=>setTimeout(r,ms));
async function retrieve(url, dest, kind='json') {
  const full=path.join(base,dest);
  if(fs.existsSync(full)) return {dest,status:'existing'};
  try {
    const response=await fetch(url,{headers:{'User-Agent':'MohamedHamidaThesisBibliography/1.0 (academic literature review)'},signal:AbortSignal.timeout(35000)});
    if(!response.ok) throw new Error(`HTTP ${response.status}`);
    const bytes=Buffer.from(await response.arrayBuffer());
    if(kind==='pdf' && bytes.subarray(0,5).toString()!=='%PDF-') throw new Error('Response is not a PDF');
    if(kind==='json') JSON.parse(bytes.toString());
    fs.mkdirSync(path.dirname(full),{recursive:true});fs.writeFileSync(full,bytes);
    return {dest,status:'saved',bytes:bytes.length};
  }catch(error){return {dest,status:'failed',error:String(error.message)};}
}
const mode=process.argv[2];
if(mode==='search') {
  const queries={
    pubmed_core:'((olive[Title/Abstract] AND (leaf[Title/Abstract] OR leaves[Title/Abstract])) OR oleuropein[Title/Abstract] OR hydroxytyrosol[Title/Abstract]) AND (broiler*[Title/Abstract] OR chicken*[Title/Abstract] OR poultry[Title/Abstract])',
    pubmed_gut:'((olive[Title/Abstract] AND (leaf[Title/Abstract] OR leaves[Title/Abstract])) OR oleuropein[Title/Abstract] OR hydroxytyrosol[Title/Abstract]) AND (broiler*[Title/Abstract] OR chicken*[Title/Abstract]) AND (intestin*[Title/Abstract] OR gut[Title/Abstract] OR microbiot*[Title/Abstract] OR microbiom*[Title/Abstract] OR cecal[Title/Abstract] OR caecal[Title/Abstract])'
  };
  const log=[];
  for(const [name,term] of Object.entries(queries)) {
    const params=new URLSearchParams({db:'pubmed',term,datetype:'pdat',mindate:'2018/01/01',maxdate:'2026/09/23',retmax:'200',retmode:'json',sort:'pub_date'});
    const url='https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?'+params;
    const dest=`searches/2026-09-23/${name}.json`;
    const result=await retrieve(url,dest);
    const row={date:'2026-09-23',database:'PubMed E-utilities',query:term,date_filter:'2018-01-01 to 2026-09-23, publication date',url,...result};
    if(result.status!=='failed') {
      const data=JSON.parse(fs.readFileSync(path.join(base,dest)));
      row.count=Number(data.esearchresult.count);row.translation=data.esearchresult.querytranslation;row.ids=data.esearchresult.idlist;
      await pause(450);
      if(row.ids.length) row.summary=await retrieve('https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id='+row.ids.join(','),`searches/2026-09-23/${name}_summary.json`);
    }
    log.push(row);console.log(JSON.stringify({...row,ids:row.ids?.length}));await pause(450);
  }
  fs.mkdirSync(path.join(base,'searches/2026-09-23'),{recursive:true});
  fs.writeFileSync(path.join(base,'searches/2026-09-23/search_log.json'),JSON.stringify(log,null,2));
} else if(mode==='queue') {
  const tasks=JSON.parse(fs.readFileSync(path.join(base,process.argv[3]),'utf8'));
  const log=[];
  for(const task of tasks){const result=await retrieve(task.url,task.dest,task.kind);log.push({...task,date:'2026-09-23',...result});console.log(JSON.stringify(result));await pause(400);}
  const logpath=path.join(base,'searches/2026-09-23/download_attempts.json');
  const old=fs.existsSync(logpath)?JSON.parse(fs.readFileSync(logpath)):[];
  fs.mkdirSync(path.dirname(logpath),{recursive:true});fs.writeFileSync(logpath,JSON.stringify([...old,...log],null,2));
} else {throw new Error('Use search or queue <queue.json>');}
