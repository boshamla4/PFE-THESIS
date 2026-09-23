# Sources LaTeX

`bibliographie_initiale.tex` produit le dossier de démarrage, et non la thèse finale. Il utilise la base commune `../bibliography/references.bib`.

Compilation depuis ce dossier avec MiKTeX :

```powershell
pdflatex -interaction=nonstopmode -halt-on-error bibliographie_initiale.tex
bibtex bibliographie_initiale
pdflatex -interaction=nonstopmode -halt-on-error bibliographie_initiale.tex
pdflatex -interaction=nonstopmode -halt-on-error bibliographie_initiale.tex
```

Le PDF vérifié est livré sous `../output/pdf/bibliographie_initiale.pdf`. Le fichier `.bib` peut être utilisé avec BibTeX ou BibLaTeX ; le dossier initial utilise `natbib` et `abbrvnat`. Le style final sera adapté aux consignes ENMV actuelles.

La base est générée par `node ../bibliography/build_library.mjs`. Les métadonnées originales, le registre de lecture et le manifeste des téléchargements sont conservés à côté de la base. Ne pas assimiler ce premier dossier à une synthèse exhaustive ou à des résultats de Mohamed.
