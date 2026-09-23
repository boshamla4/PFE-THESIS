"""Title-only screening decisions for the fixed 48-record PubMed core export."""
import json
from pathlib import Path
from collections import Counter

base = Path(__file__).resolve().parents[1] / 'searches' / '2026-09-23'
source = json.loads((base / 'pubmed_core_summary.json').read_text(encoding='utf-8-sig'))['result']
# No abstract or full-text eligibility is inferred by this classification.
decisions = {
 '42271632': ('exclude_scope', 'Compost, sol et rhizosphère végétale; pas de nutrition du poulet.', False),
 '41653632': ('candidate_context', 'Additifs phytogéniques chez le poulet; le titre ne précise pas leur origine ni leur préparation. Résumé nécessaire.', True),
 '41337902': ('candidate_direct', 'Extrait de feuilles enrichi en oléuropéine administré par alimentation à des poulets de chair.', False),
 '40239453': ('candidate_context', 'Oléuropéine alimentaire chez le poulet de chair; molécule, pas extrait de feuilles explicite.', False),
 '40188625': ('candidate_context', 'Poudre de feuilles dans l’aliment des poulets; matrice distincte de l’extrait.', False),
 '40165253': ('candidate_direct', 'Extrait phénolique de feuilles chez le poulet de chair, associé à l’arginine; attribution indépendante à vérifier.', False),
 '39637636': ('exclude_scope', 'Co-compostage des déchets oléicoles et émissions; hors nutrition animale.', False),
 '39554819': ('exclude_scope', 'Fortification de gels d’œufs et conservation; produit alimentaire transformé.', False),
 '39065075': ('exclude_scope', 'Conservation de viande fraîche par additifs; intervention post-abattage annoncée.', False),
 '38933363': ('candidate_context', 'Oléuropéine et prise alimentaire des poussins; molécule isolée et voie non précisée au titre.', True),
 '38822558': ('exclude_scope', 'Qualité du sperme de coq après décongélation; reproduction hors périmètre.', False),
 '42088547': ('candidate_context', 'Feuilles alimentaires chez le dindon; autre espèce avicole.', False),
 '38539969': ('candidate_context', 'Hydroxytyrosol alimentaire et critères intestinaux chez le poulet; contexte inflammatoire, pas extrait de feuilles.', False),
 '38200849': ('candidate_context', 'Hydroxytyrosol chez le poulet de chair; pertinent pour performances et sang, matrice distincte.', False),
 '38002177': ('candidate_context', 'Extrait de feuilles chez les pondeuses; autre catégorie de production.', False),
 '37729677': ('candidate_context', 'Poudre de feuilles et microbiote cæcal chez le poulet de chair; pas extrait explicite.', False),
 '38001793': ('candidate_context', 'Extrait de coproduit oléicole riche en hydroxytyrosol dans l’aliment; origine foliaire non annoncée.', False),
 '37861804': ('candidate_direct', 'Infusion de feuilles dans l’eau du poulet de chair; critères intestinaux et performances.', False),
 '37901105': ('candidate_context', 'Nutrition des monogastriques et coproduits oléicoles; synthèse/contextualisation probable, type à confirmer.', True),
 '37835685': ('exclude_scope', 'Cryoconservation du sperme de coq; hors périmètre.', False),
 '37760054': ('candidate_context', 'Extrait de coproduit oléicole chez le poulet; contexte hépatique et antioxydant, pas feuilles explicites.', False),
 '37760026': ('candidate_direct', 'Extrait aqueux-isopropanol de feuilles, purifié sur résine, dans l’alimentation du poulet de chair.', False),
 '37374069': ('candidate_context', 'Additifs naturels et immunomodulation du poulet; revue probable, inclusion de l’olivier à confirmer.', True),
 '36940652': ('candidate_context', 'Hydroxytyrosol et inflammation chez le poulet; contexte mécanistique pulmonaire, catégorie de poulet non précisée.', True),
 '37041996': ('candidate_context', 'Additifs botaniques en nutrition avicole; synthèse probable, pertinence spécifique de l’olivier à confirmer.', True),
 '36671062': ('candidate_context', 'Mélange de coproduits de feuilles d’olivier et raisin avec/sans butyrate; attribution et préparation à vérifier.', True),
 '36671227': ('candidate_context', 'Composés antibactériens des feuilles; contexte mécanistique possible, modèle non précisé et aucun essai alimentaire annoncé.', True),
 '35408740': ('candidate_context', 'Polyphénols/triterpènes des fruits et feuilles d’olivier; contexte général, population et nature de synthèse à confirmer.', True),
 '35267385': ('exclude_scope', 'Huile essentielle de laurier pour conservation et produits oléicoles; pas nutrition du poulet ni supplément de feuilles d’olivier.', False),
 '35326147': ('exclude_scope', 'Extraits/poudres appliqués à des burgers de poulet; qualité et conservation du produit.', False),
 '34784517': ('candidate_context', 'Hydroxytyrosol et immunité du poulet immunodéprimé; molécule isolée et modèle particulier.', False),
 '33954919': ('exclude_scope', 'Irrigation d’oliviers par effluent avicole; agronomie, pas supplémentation animale.', False),
 '34299582': ('candidate_context', 'Phénols issus des margines chez le poulet et microbiote; coproduit distinct des feuilles.', False),
 '33927566': ('candidate_direct', 'Extrait de feuilles chez le poulet de chair, critères de muqueuse, fermentation et oxydation.', False),
 '35029000': ('candidate_context', 'Oléuropéine sur cellules musculaires de poulet en culture; mécanismes seulement, aucun essai in vivo annoncé.', False),
 '34447285': ('exclude_scope', 'Protection de saucisses de poulet pendant congélation; traitement du produit alimentaire.', False),
 '32751251': ('exclude_scope', 'Extrait utilisé comme conservateur de viande vendue au détail; post-abattage.', False),
 '32111317': ('candidate_context', 'Titre mêlant extraits, nuggets et minéraux administrés dans l’aliment; route des extraits ambiguë, résumé requis avant exclusion.', True),
 '31524499': ('candidate_context', 'Oléuropéine alimentaire chez le poulet; performances oxydatives/hormonales, pas extrait explicite.', False),
 '31493179': ('candidate_context', 'Extrait de pulpe oléicole étudié in vitro; contexte antiparasitaire seulement, pas efficacité alimentaire in vivo.', False),
 '31468981': ('exclude_scope', 'Films de conservation pour nuggets; emballage alimentaire, pas supplémentation.', False),
 '34466471': ('candidate_direct', 'Extrait de feuilles et lésions hépatiques chez le poulet; essai vivant suggéré, type chair et route à confirmer au résumé.', True),
 '31737236': ('candidate_context', 'Poudre de feuilles chez le poulet et flore iléale ciblée; matrice distincte.', False),
 '30927751': ('candidate_context', 'Coproduits oléicoles contre isolats issus de viande; contexte antimicrobien in vitro possible, sans efficacité nutritionnelle établie.', True),
 '30796762': ('candidate_context', 'Feuilles alimentaires chez le canard de Barbarie; autre espèce et plusieurs plantes.', False),
 '30587899': ('candidate_context', 'Poudre de feuilles chez le poulet de chair; utile pour croissance et sang, pas extrait.', False),
 '30049997': ('exclude_scope', 'Émulsions de viande enrichies et modèle cellulaire Caco-2; bioaccessibilité alimentaire humaine, pas poulet vivant.', False),
 '32055152': ('candidate_direct', 'Extraits de feuilles et souci dans l’aliment des poulets de chair; comparaison de matrices alimentaires.', False),
}
uids = source['uids']
assert len(uids) == 48 and len(set(uids)) == 48
assert set(uids) == set(decisions), 'Every source record must be screened exactly once'
out = []
for uid in uids:
    record = source[uid]
    decision, reason, uncertain = decisions[uid]
    doi = next((a['value'] for a in record.get('articleids', []) if a['idtype'] == 'doi'), None)
    out.append({'id': uid, 'title': record['title'], 'doi': doi,
                'decision': decision, 'reason_fr': reason,
                'screening_level': 'title', 'uncertainty': uncertain,
                'screening_date': '2026-09-23', 'fulltext_eligibility': 'not_assessed'})
(base / 'pubmed_title_screening.json').write_text(json.dumps(out, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'total': len(out), 'counts': Counter(r['decision'] for r in out),
                  'uncertain': sum(r['uncertainty'] for r in out)}, ensure_ascii=False))
