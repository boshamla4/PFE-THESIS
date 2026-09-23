import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const base = path.dirname(fileURLToPath(import.meta.url));
const records = JSON.parse(fs.readFileSync(path.join(base, 'reading_register.json'), 'utf8'));
const esc = value => String(value ?? '').replace(/&/g, '\\&').replace(/%/g, '\\%').replace(/_/g, '\\_').replace(/#/g, '\\#');
// BibTeX abbreviates names byte-wise: protect accented initials with TeX macros.
const accents = {'\u0300':'`','\u0301':"'",'\u0302':'^','\u0303':'~','\u0308':'"','\u030c':'v','\u0306':'u','\u0304':'=','\u0307':'.','\u0327':'c','\u030a':'r','\u030b':'H','\u0328':'k'};
const bibname = value => String(value ?? '').normalize('NFD').replace(/([A-Za-z])([\u0300-\u036f]+)/g, (_,letter,marks) => {
  let s=letter; for(const mark of marks) { if(!accents[mark]) throw new Error('Unmapped accent '+mark); s='\\'+accents[mark]+'{'+s+'}'; } return '{'+s+'}';
}).replace(/ı/g,'{\\i}').replace(/ø/g,'{\\o}').replace(/Ø/g,'{\\O}').replace(/ł/g,'{\\l}').replace(/Ł/g,'{\\L}');
const bib = [];
for (const record of records) {
  if (!record.metadata && !record.manual) continue;
  const message = record.metadata ? JSON.parse(fs.readFileSync(path.join(base, 'metadata', record.metadata), 'utf8')).message : null;
  if (message && message.DOI.toLowerCase() !== record.doi.toLowerCase()) throw new Error(`DOI mismatch ${record.key}`);
  const data = record.manual ? {...record.manual, title:'{'+record.manual.title+'}'} : {
    author: message.author.map(a => `${bibname(a.family)}, ${bibname(a.given)}`).join(' and '),
    title: '{' + message.title[0].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() + '}',
    journal: message['container-title'][0],
    year: record.year,
    volume: message.volume,
    number: message.volume ? message.issue : undefined,
    note: !message.volume && message.issue ? message.issue : undefined,
    pages: record.pages || message.page || message['article-number'],
    doi: message.DOI,
    url: `https://doi.org/${message.DOI}`,
  };
  bib.push('@article{' + record.key + ',\n' + Object.entries(data).filter(([,v])=>v).map(([k,v])=>`  ${k} = {${k==='doi'||k==='url' ? v : esc(v)}}`).join(',\n') + '\n}');
}
bib.push(`@article{Jabri2017,
  author = {Jabri, J. and Kacem, H. and Yaich, H. and Abid, K. and Kamoun, M. and Rekhis, J. and Malek, A.},
  title = {{Effect of Olive leaves extract supplementation in drinking water on zootechnical performances and cecal microbiota balance of broiler chickens}},
  journal = {Journal of New Sciences, Sustainable Livestock Management},
  year = {2017}, volume = {4}, number = {2}, pages = {69--75},
  url = {https://www.jnsciences.org/index.php?id=420&option=com_attachments&task=download}
}`);
fs.writeFileSync(path.join(base, 'references.bib'), '% Revue narrative structurée ; recherche arrêtée au 23 septembre 2026.\n% Métadonnées DOI ou notices manuelles contrôlées ; voir reading_register.json.\n\n' + bib.join('\n\n') + '\n');

const sources = {
  '2017_Jabri_DrinkingWater.pdf': 'https://www.jnsciences.org/index.php?id=420&option=com_attachments&task=download',
  '2018_Sarica_MeatQuality.pdf': 'https://agrifoodscience.com/index.php/TURJAF/article/download/1782/958/16634',
  '2020_Erener_Growth_Blood.pdf': 'https://rbz.org.br/wp-content/uploads/articles_xml/1806-9290-rbz-49-e20180300/1806-9290-rbz-49-e20180300.pdf',
  '2021_Pirman_OxidativeStatus.pdf': 'https://www.jstage.jst.go.jp/article/jpsa/58/2/58_0200026/_pdf/-char/en',
  '2024_Frontiers_1410580_HeatStress.pdf': 'https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2024.1410580/pdf',
  '2025_Alfifi_Arginine_OliveLeaf.pdf': 'https://link.springer.com/content/pdf/10.1186/s12917-025-04663-6.pdf',
};
const manifest = [];
const attemptsPath = path.join(base, 'searches/2026-09-23/download_attempts.json');
if(fs.existsSync(attemptsPath)) for(const item of JSON.parse(fs.readFileSync(attemptsPath, 'utf8'))) {
  if(item.kind==='pdf' && item.status==='saved') sources[path.basename(item.dest)] = item.url;
}
for (const folder of ['recent', 'foundational']) {
  for (const file of fs.readdirSync(path.join(base, 'papers', folder)).filter(f=>f.endsWith('.pdf'))) {
    const bytes = fs.readFileSync(path.join(base, 'papers', folder, file));
    if (bytes.subarray(0, 5).toString() !== '%PDF-') throw new Error(`Not a PDF: ${file}`);
    manifest.push({file:`papers/${folder}/${file}`, source_url:sources[file] ?? null, downloaded:'2026-09-23', bytes:bytes.length, sha256:crypto.createHash('sha256').update(bytes).digest('hex')});
  }
}
fs.writeFileSync(path.join(base, 'download_manifest.json'), JSON.stringify(manifest, null, 2)+'\n');
console.log(`${bib.length} references; ${manifest.length} verified PDF files.`);
