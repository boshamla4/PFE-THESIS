# PFE THESIS

Dépôt privé : [boshamla4/PFE-THESIS](https://github.com/boshamla4/PFE-THESIS).

Projet de thèse de **Mohamed Hamida**, année universitaire **2026/2027**, rédigé en français et organisé à partir des deux thèses ENMV Sidi Thabet fournies.

Titre de travail : **« Effet de l’incorporation des “extraits” de feuilles d’olivier dans l’eau de boisson du poulet chair »**.

## État au 23 septembre 2026

Le premier manuscrit bibliographique compte **22 pages et 37 références citées**. Il couvre les polyphénols, la préparation et les doses d’extraits, la croissance, le gain moyen quotidien (GMQ), l’indice de consommation, les paramètres sanguins, l’immunité, l’intégrité intestinale et le microbiote. **20 PDF d’articles et 7 textes intégraux XML** sont conservés avec les notes de lecture et les traces de recherche.

Il s’agit d’une revue narrative structurée à approfondir. La thèse complète attend le protocole et les résultats expérimentaux de Mohamed, ainsi que la validation des consignes ENMV actuelles par l’encadrant.

## Accès aux documents

- [Manuscrit bibliographique PDF](output/pdf/revue_bibliographique.pdf)
- [Source LaTeX principale](thesis/revue_bibliographique.tex) et [chapitres](thesis/chapters/)
- [Archive des sources LaTeX](output/revue_bibliographique_sources.zip)
- [Bibliographie BibTeX](bibliography/references.bib), importable dans Zotero
- [Registre de lecture et remarques critiques](bibliography/READING_REGISTER.md)
- [Articles PDF téléchargés](bibliography/papers/) et [textes XML](bibliography/fulltext/)
- [Protocole de recherche](bibliography/SEARCH_PROTOCOL.md) et [recherches prioritaires restantes](bibliography/NEXT_RESEARCH.md)
- [Point de reprise](ETAT_DU_PROJET.md), [cadrage du projet](PROJECT_BRIEF.md) et [informations attendues pour la thèse](INFORMATIONS_POUR_LA_THESE.md)
- [Thèses sources](source%20d'inspiration/), conservées dans leur version originale

Les DOI, niveaux de consultation et limites des études sont indiqués dans le registre. Les URL d’origine et empreintes des PDF figurent dans le [manifeste des téléchargements](bibliography/download_manifest.json). Les documents tiers restent soumis aux droits de leurs auteurs et éditeurs.

## Compilation

Avec une distribution LaTeX comprenant `pdflatex`, `bibtex`, `natbib` et le français de `babel` (MiKTeX utilisé pour cette version), lancer depuis la racine du projet :

```powershell
Set-Location thesis
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
bibtex revue_bibliographique
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
```

Après contrôle du rendu, copier `thesis/revue_bibliographique.pdf` vers `output/pdf/revue_bibliographique.pdf`. Les fichiers intermédiaires de compilation et `tmp/` sont exclus du dépôt ; les sources, articles et livrables sont conservés.

La version historique de démarrage reste disponible dans `thesis/bibliographie_initiale.tex` et `output/pdf/bibliographie_initiale.pdf`. Le document de 22 pages ci-dessus est la version actuelle à relire.
