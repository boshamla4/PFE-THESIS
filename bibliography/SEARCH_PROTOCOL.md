# Protocole de recherche bibliographique

Version actualisée du 25 septembre 2026 ; requêtes PubMed initiales du 23 septembre conservées. Auteur de la future thèse : Mohamed Hamida. Année universitaire : 2026/2027. Périmètre élargi selon les thèmes retenus par l'utilisateur.

## Question de recherche bibliographique

Chez le poulet de chair, quels effets les extraits de feuilles d'olivier ont-ils sur la croissance, le gain moyen quotidien (GMQ), l'indice de consommation (IC), l'intégrité intestinale, le microbiote, les marqueurs sanguins et les indicateurs immunitaires, et comment la préparation, la composition en polyphénols, la dose et la voie d'administration influencent-elles les résultats ?

La voie principale est l'eau de boisson. Les études dans l'aliment apportent un contexte comparatif et ne permettent pas de convertir directement une dose en g/kg d'aliment en mL/L d'eau.

Ces thèmes constituent le périmètre actuel. Les critères effectivement mesurés chez Mohamed seront décrits à partir de son protocole ; aucun résultat expérimental n'est présumé.

## Période

Actualisation prioritaire : 2018 au 23 septembre 2026, avec attention particulière à 2023-2026. Conserver les études fondatrices antérieures lorsqu'elles sont directement pertinentes. Une nouvelle recherche devra couvrir la période allant de cette date à la soumission en 2027. Vérifier séparément publication en ligne, année du volume et date de dépôt dans un site : une remise en ligne récente n'est pas une nouvelle étude.

## Sources et couverture

### Livraison et contrôle de l'extension — 25 septembre 2026

La base livrée comporte 61 références : 37 dans le noyau initial, 21 références de contexte ajoutées pendant l'élargissement, puis trois consensus de définition des probiotiques/prébiotiques/synbiotiques. Les métadonnées et passages utilisés ont été contrôlés auprès des éditeurs, de Crossref, de PubMed/Europe PMC et des documents officiels Aviagen, selon les niveaux indiqués au registre. Ces vérifications ciblées ne sont pas une nouvelle interrogation systématique de PubMed. Les 48 notices initiales ne sont donc pas recomptées.

Onze PDF supplémentaires (neuf articles et deux guides) et neuf XML ont été archivés, soit 31 PDF et 16 XML au total. Six téléchargements PDF ont échoué parmi les liens testés ; les tentatives et versions accessibles sont consignées dans `searches/2026-09-25/`. Les notes d'audit de l'extension et de nutrition conservent les sources et les limites de consultation. Aucun nouvel appel Scite n'a été utilisé pour cette livraison.

### Historique : extension exécutée le 23 septembre 2026

Deux requêtes PubMed E-utilities, filtre de publication 2018-01-01 à 2026-09-23 :48 notices générales et9 notices intestinales déjà comprises dans les 48. Les48 titres ont été dépistés une seule fois :7 candidates directes,28 contextuelles,13 exclusions,12 ambiguïtés. Il ne s'agit pas d'une sélection finale sur texte intégral. Requêtes exactes, traductions et identifiants : `searches/2026-09-23/search_log.json` et `pubmed_title_screening.json`.

Les requêtes web réellement exécutées figurent dans `research_notes/gut_evidence.md`, `polyphenols_evidence.md`, `performance_evidence.md` et `newest_performance.md`. Deux appels Scite ont vérifié11 DOI et exploré les citations entrantes de3 études :45 liens, graphe tronqué et faible couverture d'une étude. Leurs résultats sont archivés dans le même dossier. Scopus/Web of Science/CAB Abstracts/AGRIS restent à interroger ; les requêtes planifiées ci-dessous ne sont pas réputées toutes exécutées.

La sélection élargie comprend37 références issues de plusieurs voies,20 PDF et7 XML intégraux. Les statuts de consultation figurent dans le registre. Les paragraphes du premier repérage sont conservés plus bas comme historique, antérieur à cette extension.

Déjà utilisées pour ce repérage : recherche web, pages d'éditeurs, notices PubMed, articles en libre accès, Crossref pour la validation des métadonnées, bibliographies des thèses fournies. La recherche web n'est pas l'équivalent d'une interrogation complète de chaque base.

À compléter : interrogation structurée de PubMed et AGRIS ; Scopus, Web of Science et CAB Abstracts si un accès institutionnel est disponible ; recherche rétrospective et prospective des citations des études prioritaires. Google Scholar peut compléter la découverte, avec vérification finale chez l'éditeur. Scite peut aider à repérer le contexte des citations, sans remplacer la lecture.

## Requêtes à exécuter pour l'élargissement

Adapter les champs et la troncature à chaque base. Lancer la requête générale puis les blocs thématiques séparément ; ne pas exiger tous les critères dans une même requête. Ces chaînes documentent la recherche prévue et ne constituent pas un journal de recherches déjà effectuées.

```
("olive leaf" OR "olive leaves" OR "Olea europaea" OR oleuropein OR hydroxytyrosol)
AND (broiler* OR chicken* OR poultry)
AND (extract* OR infusion OR phenolic* OR polyphenol*)

("olive leaf extract" OR "infused olive leaf")
AND (broiler* OR chicken*)
AND ("drinking water" OR "water supplementation")

("olive leaf extract" OR oleuropein)
AND (broiler* OR chicken*)
AND (growth OR "body weight gain" OR "daily gain" OR ADG
     OR "feed conversion ratio" OR FCR OR "feed efficiency" OR "feed intake")

("olive leaf extract" OR "olive leaves" OR oleuropein OR hydroxytyrosol)
AND (broiler* OR chicken*)
AND ("intestinal integrity" OR "gut barrier" OR "intestinal permeability"
     OR "tight junction*" OR occludin OR claudin OR "ZO-1"
     OR histomorpholog* OR villus OR villi OR crypt*)

("olive leaf extract" OR "olive leaves" OR oleuropein OR hydroxytyrosol)
AND (broiler* OR chicken*)
AND (microbiota OR microbiome OR "intestinal microflora" OR "cecal microflora"
     OR "caecal microflora" OR "bacterial count*" OR "16S rRNA"
     OR metagenom* OR "short-chain fatty acid*")

("olive leaf extract" OR oleuropein)
AND (broiler* OR chicken*)
AND (blood OR hematolog* OR haematolog* OR biochem* OR immun*
     OR antibody OR cytokine* OR immunoglobulin* OR antioxidant*)

("olive leaf" OR "olive leaves" OR "Olea europaea")
AND (extract* OR infusion)
AND (polyphenol* OR phenolic* OR oleuropein OR hydroxytyrosol)
AND (preparation OR extraction OR stability OR characterization
     OR characterisation OR standardization OR standardisation OR dose*)

("feuilles d'olivier" OR oleuropéine)
AND ("poulet de chair" OR aviculture)
AND (extrait OR "eau de boisson")

("feuilles d'olivier" OR polyphénol* OR oleuropéine)
AND ("poulet de chair" OR aviculture)
AND (croissance OR "gain moyen quotidien" OR "indice de consommation"
     OR "intégrité intestinale" OR microbiote OR immunité)
```

Ajouter ensuite les marqueurs réellement mesurés par Mohamed, sans réduire la recherche générale aux seuls critères de son essai. Les études sur l'extraction et la stabilité sont recherchées aussi sans le filtre « poulet ». Les termes oléuropéine et hydroxytyrosol servent également à découvrir des études mécanistiques : ils ne rendent pas un composé isolé équivalent à un extrait de feuilles.

## Inclusion et classement

- Priorité A : essais originaux chez le poulet de chair avec extrait ou infusion de feuilles dans l'eau.
- Priorité B : extrait de feuilles administré dans l'aliment.
- Contexte : poudre de feuilles, autres espèces, produits oléicoles différents, revues générales et études mécanistiques. Les identifier explicitement.
- Ne pas assimiler poudre, infusion, extrait standardisé, oléuropéine isolée, huile et grignon.
- Séparer les essais avec un seul supplément des associations : un mélange avec de l'arginine, par exemple, ne démontre pas à lui seul un effet propre de l'extrait.
- Conserver les effets nuls ou défavorables, et noter les comparateurs, unités expérimentales, répétitions, durée et contexte alimentaire ou thermique.
- Ne pas confondre statut antioxydant, numération leucocytaire et preuve d'une amélioration fonctionnelle de l'immunité.
- Extraire séparément poids vif, gain de poids, GMQ, consommation et IC : conserver les formules, unités, périodes de mesure et corrections de mortalité publiées. Identifier l'unité expérimentale utilisée pour l'ingestion et l'IC.
- Distinguer dénombrements par culture de groupes ciblés, quantification moléculaire ciblée et caractérisation des communautés par séquençage. Conserver le site intestinal, le type d'échantillon, les dates et la méthode ; ne pas présenter une culture ciblée comme une description complète du microbiote.
- Distinguer histomorphologie, marqueurs de jonctions et mesures fonctionnelles de perméabilité. Ne pas qualifier un résultat morphologique isolé de preuve directe d'amélioration de la fonction de barrière.
- Classer les mesures de métabolites microbiens, dont les acides gras à chaîne courte, séparément des mesures de composition du microbiote ; ne pas inférer l'une de l'autre sans données.
- Pour les polyphénols, relever la méthode de dosage, l'étalon et les unités, la composition rapportée, le rendement et la base d'expression des doses. Conserver explicitement les informations non rapportées.

## Vérification

1. Vérifier titre, auteurs, année, revue, DOI et version auprès d'une source primaire.
2. Dédoublonner par DOI puis par titre et auteurs ; vérifier si plusieurs publications décrivent le même essai.
3. Noter le niveau réellement consulté : notice, résumé, texte intégral partiel, texte intégral évalué.
4. Vérifier tableaux et résultats, pas seulement la conclusion ; enregistrer contradictions internes, effets non significatifs et limites.
5. Vérifier les corrections et rétractations chez l'éditeur avant inclusion définitive. Cette vérification n'est pas encore terminée pour toute la sélection initiale.
6. Télécharger uniquement les versions accessibles légalement ; conserver les liens et le statut des textes indisponibles.
7. Associer chaque affirmation de synthèse à une référence précise. Ne jamais attribuer à un article des mesures qu'il n'a pas étudiées.

## Fiche de lecture à compléter

Clé BibLaTeX ; DOI ; référence ; date de recherche ; type d'étude ; espèce et souche ; effectif et répétitions ; unité expérimentale ; forme, préparation et caractérisation polyphénolique de l'extrait ; voie ; unité et dose publiée ; durée ; contexte ; critères mesurés ; méthodes et périodes de calcul du GMQ et de l'IC ; sites, dates et méthodes d'évaluation intestinale et microbiologique ; marqueurs sanguins et immunitaires ; résultats par critère ; taille d'effet et incertitude si disponibles ; limites ; biais ; chevauchement éventuel des échantillons ; statut du texte intégral ; décision motivée ; emplacement du PDF.

## Journal du premier repérage

Le 23 septembre 2026 : examen des deux thèses ; recherches sur « olive leaf extract broiler drinking water », « olive leaf broiler 2025 2026 », « olive leaf extract broiler 2024 immune blood », puis recherches ciblées par titre et DOI. Un contrôle spécifique a couvert les études 2018-2022. Des requêtes ciblées ont également porté sur les publications récentes 2023-2026. Ce journal documente le repérage ; il ne constitue pas un diagramme PRISMA, et aucun nombre total de publications recherchées ou exclues n'est revendiqué.

Mise à jour du périmètre, le 23 septembre 2026 : ajout explicite des polyphénols, du GMQ, de l'IC, de l'intégrité intestinale et du microbiote. Les nouvelles requêtes ci-dessus restent à exécuter et à journaliser avec leurs bases, dates, filtres et résultats. Le registre initial des références n'est pas présenté comme une couverture achevée de ces axes.
