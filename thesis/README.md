# Sources LaTeX de la revue bibliographique

Source actuelle : `revue_bibliographique.tex`, avec dix chapitres dans `chapters/` et `../bibliography/references.bib`.

Depuis ce dossier :

```text
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
bibtex revue_bibliographique
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
pdflatex -interaction=nonstopmode -halt-on-error revue_bibliographique.tex
```

Livraison vérifiée : `../output/pdf/revue_bibliographique.pdf`. Le format utilise pdfLaTeX, natbib/abbrvnat, babel français et les polices Latin Modern. Les consignes ENMV définitives pourront nécessiter une adaptation avant dépôt.

`bibliographie_initiale.tex` reste un document historique et n'est pas le manuscrit actuel. Ne pas remplacer la revue par sa compilation.
