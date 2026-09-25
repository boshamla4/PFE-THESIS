# PFE THESIS

Dépôt privé : [boshamla4/PFE-THESIS](https://github.com/boshamla4/PFE-THESIS).

Projet de thèse de **Mohamed Hamida**, année universitaire **2026/2027**, en français.

Titre de travail : **« Effet de l’incorporation des “extraits” de feuilles d’olivier dans l’eau de boisson du poulet chair »**.

## État de travail — 25 septembre 2026

La branche `main` conserve encore la version bibliographique initiale de 22 pages. L'extension demandée par l'encadrement est développée sur :

`bibliography-superset-expansion`

PR brouillon : **#1 — Expand bibliography into supervisor-requested superset structure**.

La version étendue compilée compte actuellement **37 pages physiques** et **53 références BibTeX**. Elle applique la stratégie « inclure largement d'abord, élaguer ensuite » : le noyau scientifique initial est conservé et complété par les rappels vétérinaires, nutritionnels, botaniques et technologiques présents dans les thèses de référence.

## Principaux ajouts

- appareil digestif et microbiote du poulet ;
- besoins nutritionnels, eau et rationnement ;
- matières premières, facteurs antinutritionnels, formulation et forme physique de l'aliment ;
- promoteurs de croissance et alternatives ;
- olivier/feuille en contexte tunisien ;
- morphologie foliaire et localisation tissulaire de polyphénols ;
- extraction détaillée ;
- propriétés biologiques avec niveaux de preuve ;
- mortalité, carcasse, digestibilité/utilisation des nutriments et qualité de viande ;
- séparation renforcée entre rappels généraux et résultats intestinaux spécifiques aux traitements.

## Sources d'inspiration

- thèse Ben Brahim Amine 2018 ;
- thèse Heni Nabil 2012/2013 ;
- cinq tables des matières photographiées fournies le 25 septembre 2026.

Les photographies ont une transcription propre dans `source d'inspiration/tables_matieres_photos_2026.md` et des **reconstructions vectorielles propres au format SVG** dans `source d'inspiration/tables_matieres_photos_2026/`.

La matrice de fusion se trouve dans `MATRICE_COUVERTURE_FUSION.md` et l'inspection détaillée des sources dans `INSPECTION_SOURCES_FUSION.md`.

## Accès aux documents

- source principale : `thesis/revue_bibliographique.tex`
- chapitres : `thesis/chapters/`
- bibliographie : `bibliography/references.bib`
- articles archivés : `bibliography/papers/`
- textes XML : `bibliography/fulltext/`
- recherches et registres : `bibliography/`
- sources d'inspiration : `source d'inspiration/`

Le PDF étendu est compilé automatiquement par GitHub Actions sur la branche de travail. Le fichier historique présent sous `output/pdf/` reste celui de la version précédente tant que la branche n'est pas finalisée et fusionnée.

## Compilation locale

Depuis `thesis/` :

```text
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
bibtex revue_bibliographique
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
```

La partie expérimentale ne doit être rédigée qu'à partir du protocole et des données propres à Mohamed.
