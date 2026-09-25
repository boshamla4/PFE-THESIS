# PFE THESIS

Thèse de **Mohamed Hamida**, ENMV Sidi Thabet, **2026/2027**, en français.

Titre conservé : **« Effet de l’incorporation des “extraits” de feuilles d’olivier dans l’eau de boisson du poulet chair »**.

## Document à transmettre pour relecture

**[Ouvrir et télécharger le PDF de Mohamed](https://github.com/boshamla4/PFE-THESIS/blob/bibliography-superset-expansion/output/pdf/Mohamed_Hamida_Revue_bibliographique_2026-09-25.pdf)** — version du 25 septembre 2026, **38 pages**, **61 références citées**. Sur GitHub, utiliser le bouton de téléchargement du fichier brut. Ce dépôt est privé : le destinataire doit avoir accès au dépôt, ou recevoir directement le PDF téléchargé.

- [Sources LaTeX portables](output/revue_bibliographique_sources.zip).
- [Source principale](thesis/revue_bibliographique.tex) et [chapitres](thesis/chapters).
- [Bibliographie BibTeX](bibliography/references.bib), importable dans Zotero.
- [Registre de lecture](bibliography/READING_REGISTER.md).
- [31 PDF documentaires](bibliography/papers), dont 29 articles et deux guides techniques ; [16 textes intégraux XML](bibliography/fulltext).
- [Vérification de la livraison](output/verification_revue.json).

Il s'agit de la **partie bibliographique pour relecture scientifique**, avec une couverture volontairement large. La partie expérimentale et la discussion des résultats propres à Mohamed restent à intégrer à partir de ses données.

## Travail réalisé

Le noyau initial a été complété par les rappels digestifs, le microbiote, la nutrition et le rationnement, le contexte tunisien de l'olivier, l'anatomie foliaire, l'extraction et les propriétés biologiques. Les effets avicoles couvrent croissance, GMQ, IC, viabilité, carcasse, digestibilité, viande, paramètres sanguins, immunité et santé intestinale.

La passe de livraison corrige des métadonnées bibliographiques, ajoute les définitions consensuelles des probiotiques/prébiotiques/synbiotiques, clarifie les niveaux de preuve et retire les instructions de rédaction du manuscrit. Les résultats neutres ou défavorables sont conservés. Les 38 pages ont été contrôlées visuellement ; aucune citation manquante ni alerte de mise en page LaTeX ne subsiste dans la compilation livrée.

Les recherches initiales datent du 23 septembre 2026 ; les contrôles de l'extension et la livraison datent du 25 septembre. Aucune exhaustivité de toutes les bases n'est revendiquée. Les limites d'accès et de lecture figurent dans le registre.

## Branche et sources d'inspiration

La livraison est publiée sur `bibliography-superset-expansion`, [PR #1](https://github.com/boshamla4/PFE-THESIS/pull/1). La branche `main` conserve la version antérieure tant que la PR n'est pas fusionnée.

Les deux thèses sources restent inchangées. La [matrice de couverture](MATRICE_COUVERTURE_FUSION.md) et le [rapport d'inspection](INSPECTION_SOURCES_FUSION.md) expliquent l'élargissement. Les cinq tables photographiées ont une [transcription](source%20d'inspiration/tables_matieres_photos_2026.md) et des reconstructions SVG ; les photographies originales ne sont pas archivées comme fichiers image.

## Compilation

Depuis `thesis/` :

```text
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
bibtex revue_bibliographique
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
```

`references.bib` est la base éditoriale de référence. `node bibliography/build_library.mjs` vérifie sa concordance avec le registre et les empreintes des PDF sans réécrire les notices. Le registre lisible est produit par `node bibliography/build_reading_guide.mjs`.
