import fs from 'node:fs';
const base='bibliography/';
const old=JSON.parse(fs.readFileSync(base+'reading_register.json','utf8'));
const additions=[
  [
    "Negm2025",
    2025,
    "Aliment",
    "Poudre de feuilles",
    "XML intégral, tableaux 3–6 et microbiologie examinés",
    "IC global augmenté (1,41 vs 1,45/1,46 ; p=0,021), contrairement au résumé. Poids final et GMQ global non significatifs. Dénombrements cæcaux ciblés.",
    null,
    "PMC12002778.xml"
  ],
  [
    "Almuhayawi2023",
    2023,
    "Aliment",
    "Poudre de feuilles",
    "Résumé et sections ciblées du XML intégral",
    "Dénombrements ciblés ; unités et présentation à contrôler avant toute citation quantitative.",
    null,
    "PMC10514443.xml"
  ],
  [
    "Dias2024",
    2024,
    "Aliment",
    "Hydroxytyrosol isolé",
    "Méthodes, résultats et tableau 5 du XML vérifiés",
    "Modèle inflammatoire ; cryptes moins profondes, hauteur villositaire non différente ; pas de groupe sain supplémenté.",
    "2024_Dias_Hydroxytyrosol_Gut.pdf",
    "PMC10967364.xml"
  ],
  [
    "Shan2022",
    2022,
    "Orale individuelle",
    "Hydroxytyrosol isolé",
    "Sections pertinentes du XML et figure 1 vérifiées visuellement",
    "Petit modèle immunodéprimé. Figure 1 soutient une atténuation cytokines ; texte contradictoire.",
    null,
    "PMC8591503.xml"
  ],
  [
    "Balzan2021",
    2021,
    "Aliment",
    "Concentré phénolique de margines",
    "XML : méthodes, microbiote, résultats examinés",
    "Séquençage 16S cloacal ; effet de l'âge, pas d'effet alimentaire net sur composition.",
    "2021_Balzan_VegetationWater.pdf",
    "PMC8306377.xml"
  ],
  [
    "Oke2017",
    2017,
    "Eau de boisson",
    "Extrait de feuilles",
    "Résumé officiel et métadonnées vérifiés",
    "Pertinence directe ; climat chaud humide ; tableaux originaux à obtenir.",
    null
  ],
  [
    "Sulaiman2024",
    2024,
    "Aliment et voies expérimentales distinctes",
    "Oléuropéine isolée",
    "PDF, méthodes et résultats examinés",
    "Étude courte d'appétit ; séparer alimentation et administrations expérimentales.",
    "2024_Sulaiman_Oleuropein_Appetite.pdf"
  ],
  [
    "Koyuncu2026",
    2026,
    "In vitro",
    "Feuilles lyophilisées, extraits analytiques",
    "Texte intégral HTML, méthodes et résultats examinés",
    "27 phénols identifiés ; hydroxytyrosol non dosé (panel sans étalon), ne signifie pas absence.",
    null
  ],
  [
    "Naseer2026",
    2026,
    "Revue",
    "Coproduits oléicoles",
    "Résumé, introduction et stratégie de recherche consultés",
    "Revue de contexte publiée le 9 septembre 2026 ; ne démontre pas l'efficacité avicole.",
    null
  ],
  [
    "Sevillano2026",
    2026,
    "Aliment",
    "Extrait de grignon alperujo",
    "XML intégral : méthodes et tableaux 4–6 contrôlés",
    "Baisse précoce croissance/ingestion, pas de gain global significatif de GMQ ou IC. Interactions de biomarqueurs.",
    null,
    "PMC12906177.xml",
    "Darmostuk2026.json"
  ],
  [
    "Sulaiman2025",
    2025,
    "Aliment",
    "Oléuropéine isolée",
    "Résumé et extraits éditeur",
    "Essai court de lipolyse ; poids diminué à certains niveaux ; figures originales non obtenues.",
    null
  ],
  [
    "Dias2024Performance",
    2024,
    "Aliment",
    "Hydroxytyrosol isolé",
    "PDF : méthodes et résultats examinés",
    "960 oiseaux, 0/5/10/50 mg/kg ; croissance/IC non améliorés. Volume2024, en ligne28décembre2023.",
    "2024_Herrero_Hydroxytyrosol_Performance.pdf",
    null,
    "Herrero2024.json"
  ],
  [
    "Paskovic2025",
    2025,
    "Chimie végétale",
    "Feuilles de six cultivars",
    "Résumé et sections indexées résultats ; PDF disponible",
    "Interaction cultivar × période ; pas de transposition quantitative automatique en Tunisie.",
    "2025_Paskovic_Polyphenols.pdf"
  ],
  [
    "Mechi2023",
    2023,
    "In vitro / alimentation humaine",
    "Extraits aqueux de feuilles tunisiennes",
    "Résumé et sections indexées détaillées ; PDF disponible",
    "Digestion simulée et système microbien simplifié ; aucune preuve sur microbiote aviaire.",
    "2023_Mechi_Polyphenols.pdf"
  ],
  [
    "CastilloLuna2023",
    2023,
    "Chimie végétale",
    "Feuilles, autres matrices et séchages",
    "HTML intégral et méthodes/résultats examinés",
    "Résultats dépendant matrice/méthode ; extraction analytique distincte de préparation à distribuer.",
    "2023_CastilloLuna_Polyphenols.pdf"
  ],
  [
    "CorAndrejc2022",
    2022,
    "Chimie végétale",
    "Feuilles, séchage/extraction",
    "Sections indexées détaillées examinées ; PDF disponible",
    "Interaction séchage/extraction ; lyophilisation non systématiquement supérieure.",
    "2022_CorAndrejc_Polyphenols.pdf"
  ],
  [
    "Markhali2024",
    2024,
    "Chimie / conservation",
    "Extraits de feuilles",
    "Résumé officiel et extrait PDF indexé",
    "Température et pH affectent l'oléuropéine ; aucune stabilité universelle en abreuvoir démontrée.",
    null
  ],
  [
    "Papageorgiou2022",
    2022,
    "Chimie / transformation",
    "Fraction foliaire enrichie en hydroxytyrosol",
    "Première moitié du PDF : composition, méthodes, récupération",
    "Produit transformé ; ne pas assimiler à une infusion.",
    "2022_Papageorgiou_Polyphenols.pdf"
  ],
  [
    "Debs2023",
    2023,
    "Revue",
    "Feuilles, récupération polyphénols",
    "Résumé et sections indexées ; PDF disponible",
    "Revue technologique ; privilégier sources primaires pour chiffres.",
    "2023_Debs_Polyphenols.pdf"
  ],
  [
    "PercieduSert2020",
    2020,
    "Méthodologie",
    "Recommandations ARRIVE 2.0",
    "Recommandations et métadonnées contrôlées",
    "Unité expérimentale, randomisation, taille d'échantillon et transparence du compte rendu.",
    null
  ],
  [
    "Correa2026",
    2026,
    "Revue",
    "Additifs dans eau, porcelets/poulets",
    "Résumé officiel et métadonnées",
    "Revue systématique annoncée : recherche Google Scholar février2023-avril2025 ; comparaisons eau/aliment rares.",
    null
  ],
  [
    "Anover2024",
    2024,
    "Aliment",
    "Deux extraits de l'industrie oléicole",
    "Résumé officiel et métadonnées",
    "Distinguer extraits triterpéniques et phénoliques ; essai contextuel, tableaux non obtenus.",
    null
  ],
  [
    "Rezar2025",
    2025,
    "Aliment",
    "Feuilles et pulpe comparées",
    "PDF, méthodes et résultats ciblés",
    "Distinguer le groupe feuilles du groupe pulpe ; statut oxydatif et qualité de viande.",
    "2025_Rezar_Leaves_Pulp.pdf"
  ]
];
for(const [key,year,route,material,status,note,pdf,xml,meta] of additions){const metadata=meta||key+'.json'; const m=JSON.parse(fs.readFileSync(base+'metadata/'+metadata,'utf8')).message; const r={key,metadata,year,doi:m.DOI,route,material,status,note,pdf:pdf?'papers/recent/'+pdf:null,...(xml?{fulltext:'fulltext/'+xml}:{})}; const i=old.findIndex(x=>x.key===key);if(i>=0)old[i]=r;else old.push(r);}
old.push({key:'Amini2019',year:2019,doi:'10.30466/vrf.2018.77670.2033',route:'Aliment',material:'Poudre de feuilles',status:'XML intégral : méthodes et tableau2 contrôlés',note:'Cultures iléales ciblées ; lettres et p globaux discordants pour certaines performances. Crossref DOI404 ; notice vérifiée sur PMC.',pdf:null,fulltext:'fulltext/PMC6828163.xml',manual:{author:'Amini, Z. and Parsaei, S. and Houshmand, M. and Naghiha, R.',title:'Effect of olive leaf powder on the performance and ileal bacterial count of broilers',journal:'Veterinary Research Forum',year:2019,volume:'10',number:'3',pages:'255--259',doi:'10.30466/vrf.2018.77670.2033',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC6828163/'}});
old.push({key:'Agah2019',year:2019,doi:null,route:'Aliment',material:'Extrait de feuilles',status:'PDF éditeur : méthodes, tableaux2et6 contrôlés',note:'Sous stress thermique ; GMQ et IC sans différence significative ; GPx augmentée et MDA diminué. DOI non identifié.',pdf:'papers/recent/2019_Agah_HeatStress.pdf',manual:{author:'Agah, M. J. and Mirakzehi, M. T. and Saleh, H.',title:'Effects of olive leaf extract (Olea europea L.) on growth performance, blood metabolites and antioxidant activities in broiler chickens under heat stress',journal:'The Journal of Animal and Plant Sciences',year:2019,volume:'29',number:'3',pages:'657--666',url:'https://thejaps.org.pk/docs/v-29-03/04.pdf'}});
const updates={
Jabri2017:{status:'Texte intégral, méthodes et tableaux vérifiés',note:'Tableau2 : poids/GMQ globaux p=0,08 malgré lettres ; microbiologie du §2.4/tableau4 IN VITRO sur contenus cæcaux, pas preuve in vivo. Effectif annoncé100 vs96 décrits.'},
Erener2020:{status:'Texte intégral et tableaux vérifiés',note:'Tableau5 LDL diminué, contrairement à une formulation du texte ; triglycérides augmentés. Aucune amélioration lipidique uniforme.'},
Pirman2021:{status:'Texte intégral et tableaux4et5 vérifiés',note:'MDA plasmatique diminué ; 8-OHdG non diminué ; AGCC augmentés selon tableaux. Effectifs incohérents84vs96 ; IC sans SEM/p.'},
Mahasneh2024:{status:'PDF, méthodes et tableaux vérifiés',note:'Stress thermique ; feuilles alimentaires10g/kg. Séparer olivier seul et mélanges. Pourcentage IgG erroné dans texte.'},
Alfifi2025:{status:'Texte intégral, plan et tableaux vérifiés',note:'Pas de groupe extrait seul ; effet propre/synergie non établi. Immunité : ARNm Ig intestinales, pas titres anticorps. Gain global p=0,108 vs texte/lettres discordants.'},
Vasilopoulou2023:{pdf:'papers/recent/2023_Vasilopoulou_ResinPurified_OliveLeafExtract.pdf',status:'Résumé et sections pertinentes consultés ; PDF disponible',note:'Extrait purifié résine et matrice alimentaire ; non équivalent à infusion. Chevauchement cohorte2026 à vérifier.'},
Hiba2026:{pdf:'papers/recent/2026_Hiba_Encapsulation.pdf',status:'PDF éditeur obtenu ; méthodes et tableaux en cours de vérification',note:'Publication avancée19août2026. Extrait libre/encapsulé alimentaire ; ne pas présumer mesure de biodisponibilité.'}
};
for(const r of old)if(updates[r.key])Object.assign(r,updates[r.key]);
const pdf='papers/recent/2018_Leskovec_NutrientUtilization.pdf';if(fs.existsSync(base+pdf))old.find(x=>x.key==='Leskovec2018').pdf=pdf;
const seen=new Set();for(const r of old){if(seen.has(r.key))throw Error('duplicate'+r.key);seen.add(r.key);}
fs.writeFileSync(base+'reading_register.json',JSON.stringify(old,null,2)+'\n');console.log(old.length+' records');

