# Point de reprise — 25 septembre 2026

Dépôt GitHub privé : [PFE THESIS](https://github.com/boshamla4/PFE-THESIS). La branche `main` conserve pour l'instant la version bibliographique précédente. L'extension demandée par l'encadrement est développée dans `bibliography-superset-expansion` et revue dans la PR brouillon #1.

## Version étendue actuellement compilée

- Manuscrit bibliographique compilé : **39 pages physiques**.
- Répartition : 1 page de titre + 4 pages liminaires (table des matières détaillée sur 3 pages et abréviations sur 1 page) + 34 pages numérotées en arabe.
- Corps de la revue avant références : pages 1 à 29.
- Références bibliographiques : pages 30 à 34.
- Bibliographie BibTeX : **58 références** dans cette version.
- Noyau documentaire initial conservé : 37 références sélectionnées, 20 PDF d'articles et 7 textes intégraux XML.
- Compilation automatisée par GitHub Actions sur la branche de travail.
- Le PDF final de contrôle a été rendu en images et **les 39 pages ont été vérifiées visuellement** le 25 septembre 2026. Aucun chevauchement, texte coupé ou défaut de mise en page bloquant n'a été observé.
- Un doublon de paragraphe dans la partie formulation a été détecté lors du contrôle visuel puis supprimé.
- La table des matières affiche désormais aussi les sous-sous-sections, afin que les rappels anatomiques, les phases de rationnement et les facteurs d'extraction soient visibles explicitement.
- La compilation de contrôle a été stabilisée avec un passage LaTeX supplémentaire : **aucun avertissement LaTeX n'est présent dans le journal final filtré**.

## Extension réalisée

Le manuscrit de 22 pages a été conservé comme noyau scientifique puis élargi selon la consigne « tout intégrer d'abord, retirer ensuite ».

Nouveaux ensembles ajoutés :
- rappels anatomo-physiologiques digestifs du poulet ;
- microbiote digestif général et colonisation ;
- besoins alimentaires : énergie, protéines/acides aminés, minéraux, vitamines et eau ;
- rationnement démarrage/croissance/finition ;
- matières premières énergétiques et protéiques, facteurs antinutritionnels, principes de formulation et présentation physique de l'aliment ;
- antibiotiques promoteurs de croissance et principales alternatives ;
- contexte tunisien de l'olivier, diversité variétale, morphologie/anatomie de la feuille ;
- localisation tissulaire de certains polyphénols et rôle des trichomes ;
- extraction : séchage, solvant, température, pH, macération, Soxhlet et méthodes contemporaines ;
- propriétés antioxydantes, antimicrobiennes, anti-inflammatoires, cardiométaboliques et antiprolifératives avec séparation explicite des niveaux de preuve ;
- mortalité/viabilité, carcasse, utilisation des nutriments, qualité de viande ;
- mesures macroscopiques du tube digestif, séparées de l'histomorphologie.

La redondance entre le chapitre général sur le poulet et le chapitre spécialisé sur les réponses intestinales a été réduite.

## Sources d'inspiration inspectées

- Thèse Heni Nabil 2012/2013 : partie bibliographique et partie expérimentale inspectées au niveau du contenu, pas seulement de la table des matières.
- Thèse Ben Brahim Amine 2018 : PDF de 89 pages extrait et inspecté directement au niveau du contenu ; structure, thèmes bibliographiques, méthodes, résultats et critères expérimentaux ont été recoupés chapitre par chapitre.
- Cinq photographies de tables des matières : transcription propre dans `source d'inspiration/tables_matieres_photos_2026.md` et cinq reconstructions vectorielles SVG dans `source d'inspiration/tables_matieres_photos_2026/`.
- Matrice de fusion : `MATRICE_COUVERTURE_FUSION.md`.
- Rapport d'inspection détaillée : `INSPECTION_SOURCES_FUSION.md`.

Les fichiers originaux des deux thèses restent inchangés.

## À poursuivre après cette phase

1. Retour de l'encadrant sur la version volontairement large.
2. Décision sur les sections à réduire ou supprimer.
3. Réception du protocole réel et des données expérimentales de Mohamed.
4. Mise à jour du registre de lecture pour les références ajoutées pendant l'extension et archivage local des textes intégraux prioritaires lorsqu'ils sont accessibles.
5. Intégration de la partie expérimentale, résultats et discussion sans inventer de données.
