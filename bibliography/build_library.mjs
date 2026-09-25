// Validate the curated BibTeX library and refresh file integrity metadata.
// references.bib is authoritative: never regenerate it from an older reading register.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const base = path.dirname(fileURLToPath(import.meta.url));
const records = JSON.parse(fs.readFileSync(path.join(base, 'reading_register.json'), 'utf8'));
const bib = fs.readFileSync(path.join(base, 'references.bib'), 'utf8');
const keys = [...bib.matchAll(/^@\w+\s*\{\s*([^,]+),/gm)].map(m => m[1].trim());
const registryKeys = records.map(r => r.key);
for (const [label, list] of [['BibTeX', keys], ['register', registryKeys]]) {
  if (new Set(list).size !== list.length) throw new Error(`Duplicate key in ${label}`);
}
for (const key of keys) if (!registryKeys.includes(key)) throw new Error(`Missing reading record: ${key}`);
for (const key of registryKeys) if (!keys.includes(key)) throw new Error(`Missing BibTeX entry: ${key}`);
for (const record of records) {
  if (!record.metadata) continue;
  const data = JSON.parse(fs.readFileSync(path.join(base, 'metadata', record.metadata), 'utf8')).message;
  if (data.DOI.toLowerCase() !== record.doi.toLowerCase()) throw new Error(`DOI mismatch: ${record.key}`);
}

const manifestPath = path.join(base, 'download_manifest.json');
const previous = new Map(JSON.parse(fs.readFileSync(manifestPath, 'utf8')).map(r => [r.file, r]));
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.pdf$/i.test(entry.name)) files.push(full);
  }
}
walk(path.join(base, 'papers'));
const manifest = files.sort().map(full => {
  const file = path.relative(base, full).replaceAll('\\', '/');
  const prior = previous.get(file);
  if (!prior?.source_url || !prior?.downloaded) throw new Error(`Record download provenance first: ${file}`);
  const bytes = fs.readFileSync(full);
  if (bytes.subarray(0, 5).toString() !== '%PDF-') throw new Error(`Not a PDF: ${file}`);
  return {...prior, file, bytes:bytes.length, sha256:crypto.createHash('sha256').update(bytes).digest('hex')};
});
for (const record of records) {
  if (record.pdf && !manifest.some(r => r.file === record.pdf)) throw new Error(`Missing PDF: ${record.key}`);
}
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2)+'\n');
console.log(`${keys.length} BibTeX entries and reading records agree; ${manifest.length} PDFs verified. BibTeX preserved.`);
