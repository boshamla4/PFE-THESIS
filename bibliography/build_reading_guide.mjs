import fs from 'node:fs';
const base='bibliography/';
const rows=JSON.parse(fs.readFileSync(base+'reading_register.json','utf8'));
const manifest=JSON.parse(fs.readFileSync(base+'download_manifest.json','utf8'));
const c=v=>String(v??'').replace(/\|/g,'\\|').replace(/\s+/g,' ');
let out='# Registre de lecture et accès aux articles\n\nMise à jour : 25 septembre 2026. '+rows.length+' références sélectionnées ; '+manifest.length+' PDF archivés (articles et guides). Les statuts décrivent les sections réellement examinées, et non une certification générale des conclusions des articles.\n\n';
out+='| Référence | Produit / voie | Niveau de lecture | Point critique | Document |\n|---|---|---|---|---|\n';
for(const r of [...rows].sort((a,b)=>b.year-a.year||a.key.localeCompare(b.key))) {
const link=r.doi?'https://doi.org/'+r.doi:r.url||r.manual?.url||(r.key==='Jabri2017'?'https://www.jnsciences.org/index.php?id=420&option=com_attachments&task=download':null);
if (!link) throw new Error('Missing source URL: '+r.key);
out+='| ['+r.key+']('+link+') | '+c(r.material)+' / '+c(r.route)+' | '+c(r.status)+' | '+c(r.note)+' | '+(r.pdf?'[PDF]('+r.pdf+')':r.fulltext?'[XML intégral]('+r.fulltext+')':'Texte complet à obtenir ou archiver')+' |\n';
}
fs.writeFileSync(base+'READING_REGISTER.md',out);
const editorial=rows.filter(r=>r.metadata).map(r=>{
const m=JSON.parse(fs.readFileSync(base+'metadata/'+r.metadata,'utf8')).message;
return {key:r.key,doi:r.doi,update_to:m['update-to']??null,relation:m.relation??null};
});
fs.mkdirSync(base+'searches/2026-09-25',{recursive:true});
fs.writeFileSync(base+'searches/2026-09-25/crossref_editorial_fields.json',JSON.stringify({assembled:'2026-09-25',interpretation:"Champs des métadonnées archivées à leurs dates de consultation ; absence de champ ne certifie pas absence de notice éditoriale. Pas de nouvelle vérification exhaustive des corrections.",records:editorial},null,2));
console.log('Reading register and metadata checks saved');
