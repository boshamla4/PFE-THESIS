# Bibliographie — Mohamed Hamida

Livraison du **25 septembre 2026** : **61 références citées**, **31 PDF archivés** (29 articles, deux guides) et **16 textes intégraux XML**. Recherche principale du 23 septembre, extension et vérifications complémentaires du 25 septembre. Revue narrative structurée ; aucune couverture exhaustive de toutes les bases n'est revendiquée.

## Accès

- [PDF du manuscrit](../output/pdf/revue_bibliographique.pdf).
- [BibTeX](references.bib) et [registre lisible](READING_REGISTER.md).
- [Articles et guides](papers), dont onze ajouts dans `papers/context/`.
- [Textes XML](fulltext), dont neuf ajouts dans `fulltext/context/`.
- [Audit de l'extension](research_notes/extension_reference_audit.json) et [contrôles nutritionnels](research_notes/nutrition_reference_audit.json).
- [Protocole documentaire](SEARCH_PROTOCOL.md), [priorités restantes](NEXT_RESEARCH.md).

Les niveaux de consultation distinguent métadonnées, résumé, lecture ciblée et examen détaillé. Un téléchargement n'est pas une certification des conclusions. Les références décrivent séparément extraits, poudres, molécules, voies d'administration et espèces.

## Traçabilité

Le noyau initial comportait 37 références, 20 PDF et sept XML. L'extension ajoute 24 notices, dont trois consensus terminologiques. Le manifeste `download_manifest.json` conserve les URL, dates et empreintes SHA-256. Les tentatives du 25 septembre, y compris les accès bloqués, sont archivées dans `searches/2026-09-25/download_attempts.json`.

Scite : deux appels dans le travail initial, aucun nouvel appel pour la livraison, aucun achat. Le solde réel du compte n'est pas exposé. Les champs éditoriaux archivés ne certifient pas l'absence de correction ou de rétractation.

## Maintenance

`references.bib` est la source éditoriale : modifier les notices contrôlées dans ce fichier et mettre à jour `reading_register.json`. `node bibliography/build_library.mjs` valide leur concordance et les PDF, sans régénérer ni supprimer les références. `node bibliography/build_reading_guide.mjs` produit le registre lisible. `update_register.mjs` est une migration historique à ne pas réexécuter sur la base actuelle.

Les deux documents de thèse fournis restent inchangés. Le dossier initial de six pages est conservé à titre historique ; utiliser la revue étendue pour la relecture.
