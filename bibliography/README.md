# Bibliographie de la thèse de Mohamed Hamida

Recherche arrêtée au **23 septembre 2026**, français, année universitaire2026/2027, organisation inspirée des deux thèses ENMV Sidi Thabet fournies. Il s'agit d'une revue narrative structurée, encore à approfondir avant dépôt.

**État actuel :37 références sélectionnées,20 PDF téléchargés,7 textes intégraux XML complémentaires.** Une des37 références est méthodologique (ARRIVE 2.0). La sélection comprend des publications2026, dont une revue de chimie publiée le9 septembre 2026. Les niveaux de lecture sont explicités dans le registre ; téléchargement et évaluation complète sont distincts.

## Lire le manuscrit et les articles

- [Premier manuscrit développé PDF](../output/pdf/revue_bibliographique.pdf).
- [Source LaTeX principale](../thesis/revue_bibliographique.tex) et [chapitres](../thesis/chapters).
- [Bibliographie BibTeX](references.bib), importable dans Zotero.
- [Registre de lecture lisible](READING_REGISTER.md) : liens DOI/PDF et points critiques.
- [Articles PDF](papers) et [fiches critiques](research_notes).
- [Prochaines recherches prioritaires](NEXT_RESEARCH.md).

Le dossier initial de6 pages reste conservé comme historique ; la revue développée le remplace pour la lecture actuelle. La partie expérimentale et la thèse complète ne sont pas encore rédigées.

## Recherche effectuée

48 notices PubMed dépistées par titre :7 candidates directes,28 contextuelles,13 exclusions ;12 titres ambigus. La requête intestinale retourne9 notices déjà comprises dans les 48. Il ne s'agit pas d'un nombre final d'études éligibles. Les37 références sélectionnées proviennent de plusieurs voies (PubMed, web éditeur, citations, études antérieures et chimie), pas uniquement de ces48 notices.

Scite connecté : **2 appels effectués par cette session** (11 DOI groupés, puis graphe de45 citations entrantes tronqué). Aucun achat réalisé. Le solde du compte n'est pas exposé ; conserver les appels restants pour les lacunes précises.

Des contradictions entre résumés et tableaux ont été documentées (notamment Negm2025, Jabri2017, Erener2020, Pirman2021, Agah2019, Alfifi2025). Elles ne constituent pas des notices de rétractation. Erener2023 reste prioritaire pour obtenir le texte complet. La recherche ne revendique pas l'exhaustivité de Scopus, Web of Science, CAB Abstracts ou AGRIS.

## Fichiers et traçabilité

- `references.bib` : notices BibTeX à partir des métadonnées DOI ; notices manuelles pour Jabri, Agah et Amini (DOI non résolu par Crossref pour ce dernier).
- `reading_register.json` : pertinence, niveau de consultation et remarques critiques des références de départ.
- `papers/recent/` : PDF accessibles publiquement de l'actualisation, incluant une référence du volume 2018.
- `papers/foundational/` : articles antérieurs conservés pour le contexte.
- `metadata/` : réponses Crossref conservées pour assurer la traçabilité.
- `SEARCH_PROTOCOL.md` : périmètre, requêtes, règles de sélection et vérification.

Les téléchargements réussis sont recensés dans `download_manifest.json` avec l'URL d'origine et l'empreinte SHA-256. L'absence d'un fichier ne signifie pas absence d'étude. Les sites bloquant le téléchargement sont indiqués comme tels ; il n'y a pas de contournement des accès.

Un PDF téléchargé n'est pas automatiquement une étude évaluée en détail. Se référer au niveau de consultation du registre. Les sources Word et PDF de départ demeurent inchangées dans `source d'inspiration`.

## Compilation

Depuis `thesis`, exécuter `pdflatex revue_bibliographique.tex`, `bibtex revue_bibliographique`, puis deux fois `pdflatex revue_bibliographique.tex`. Copier le PDF dans `output/pdf` après contrôle visuel. MiKTeX écrit son journal utilisateur hors du projet ; l'environnement restreint peut demander une autorisation technique.

Génération des notices : `node bibliography/build_library.mjs`. Registre lisible : `node bibliography/build_reading_guide.mjs`. `update_register.mjs` conserve la migration de cette version et ne doit pas écraser des ajouts ultérieurs sans contrôle.
