// Barème du sujet : bonne réponse +0,5 pt, pas de réponse 0, mauvaise réponse -0,5 pt.
// correct = index de la bonne réponse (0 = première option). Une seule bonne réponse par question.
// explanation (facultatif) = affichée à la correction.
const QCM = 'QCM';
const VF = 'Vrai ou faux';
const VRAI_FAUX = ['Vrai', 'Faux'];

const questions = [
  {
    part: QCM,
    text: "Quels sont les objectifs et responsabilités du marketing dans l'entreprise ?",
    options: [
      "Transformer tous les consommateurs en clients de l'entreprise",
      "Susciter des besoins chez les consommateurs pour vendre des produits",
      "Créer de la valeur pour la société",
      "Satisfaire le consommateur à tout prix"
    ],
    correct: [2]
  },
  {
    part: QCM,
    text: "Le SWOT est :",
    options: [
      "Une méthode d'évaluation des stratégies marketing fondée sur la profitabilité espérée et les risques encourus",
      "Une méthode d'analyse-diagnostic d'une marque en quatre rubriques : forces et faiblesses ; opportunités et menaces",
      "Une autre appellation du concept de positionnement, défini par le chercheur américain Henry Swot"
    ],
    correct: [1],
    explanation: "SWOT = Strengths, Weaknesses, Opportunities, Threats. La notion de positionnement a été formulée en 1972 par deux publicitaires, Al Ries et Jack Trout."
  },
  {
    part: QCM,
    text: "Parmi les propositions suivantes, laquelle n'est pas partie intégrante du macroenvironnement ?",
    options: [
      "La démographie",
      "Le contexte socioculturel",
      "Les clients",
      "La technologie",
      "Les aspects juridiques et réglementaires"
    ],
    correct: [2]
  },
  {
    part: QCM,
    text: "Un marché potentiel est :",
    options: [
      "L'ensemble des clients actuels d'une entreprise et de ses concurrents",
      "Le reflet des ventes maximales susceptibles d'être réalisées par l'ensemble des entreprises qui offrent un produit ou un service",
      "L'ensemble des consommateurs et des non-consommateurs relatifs et absolus actuels",
      "Un marché utilisé comme référence pour prévoir les résultats d'une offre lancée sur un plus vaste marché"
    ],
    correct: [1],
    explanation: "1re proposition : c'est le marché actuel. 3e : les non-consommateurs absolus ne peuvent pas s'intéresser à l'offre. 4e : c'est un marché témoin."
  },
  {
    part: QCM,
    text: "En quoi consiste la segmentation marketing ?",
    options: [
      "Découper un marché en sous-ensembles de produits substituables qui ont la même clientèle",
      "Diviser un marché en sous-ensembles, quels que soient les critères utilisés",
      "Découper un marché en groupes homogènes de clients et/ou de consommateurs"
    ],
    correct: [2],
    explanation: "La 1re proposition relève de la segmentation produits, et les segments produits n'ont pas nécessairement la même clientèle."
  },
  {
    part: QCM,
    text: "L'élément « Produit » du mix-marketing ne comprend pas :",
    options: [
      "Le conditionnement",
      "Les moyens de transport",
      "Les garanties",
      "Les services associés",
      "L'emballage"
    ],
    correct: [1]
  },
  {
    part: QCM,
    context: "La valeur perçue d'un produit ou d'une marque s'analyse en valeur d'usage (aspects fonctionnels) et valeur de signe (image, aspects symboliques).",
    text: "Une seule de ces propositions est rigoureusement exacte. Laquelle ?",
    options: [
      "Les produits et marques de luxe n'existent qu'au travers de leur valeur de signe",
      "Tous les produits ont une valeur d'usage et une valeur de signe, leur importance variant selon les motivations d'achat",
      "La valeur de signe est généralement plus importante pour les biens (tangibles) que pour les services (intangibles)"
    ],
    correct: [1],
    explanation: "Le luxe doit aussi offrir une valeur d'usage exceptionnelle. Et le caractère tangible ne détermine pas la valeur de signe : elle compte beaucoup dans le choix d'une école (un service)."
  },
  {
    part: QCM,
    text: "Quels individus se distinguent par leur capacité d'abstraction et leur capacité à supporter le risque ?",
    options: [
      "Les adopteurs",
      "Les innovateurs",
      "Les retardataires",
      "Les adopteurs précoces",
      "Aucune réponse n'est correcte"
    ],
    correct: [1]
  },
  {
    part: QCM,
    text: "Les produits numériques sont :",
    options: [
      "Tout produit (bien ou service) présenté et/ou vendu sur Internet",
      "Des produits d'information numérisés, transformés en données traitables et transmissibles par un réseau informatique"
    ],
    correct: [1],
    explanation: "Exemples : musique, services financiers. Un billet d'avion ou un réfrigérateur vendus en ligne ne sont pas des produits numériques : ils utilisent seulement des services numériques pour leur vente."
  },
  {
    part: QCM,
    text: "Quand le fabricant et le distributeur s'entendent sur ce qu'ils attendent l'un de l'autre et planifient leurs accords en conséquence, ils adoptent une politique de :",
    options: ["Coopération", "Coordination", "Collaboration", "Cobranding"],
    correct: [1]
  },
  {
    part: VF,
    text: "Le concept de marketing suppose que, pour atteindre ses objectifs, l'entreprise doit être plus compétitive et meilleure que ses concurrents dans la création, la tarification, la distribution et la communication de ses offres aux marchés cibles.",
    options: VRAI_FAUX,
    correct: [0]
  },
  {
    part: VF,
    text: "Un besoin est une nécessité fondamentale alors qu'un désir est un souhait du consommateur pour quelque chose dont il n'a pas vraiment besoin.",
    options: VRAI_FAUX,
    correct: [1]
  },
  {
    part: VF,
    text: "La première étape d'un processus d'achat est la description des caractéristiques nécessaires générales du produit.",
    options: VRAI_FAUX,
    correct: [1]
  },
  {
    part: VF,
    text: "Le positionnement d'une marque se définit avant d'élaborer le marketing-mix.",
    options: VRAI_FAUX,
    correct: [0],
    explanation: "Le positionnement est la clé de voûte du marketing-mix et lui donne sa ligne de cohérence."
  },
  {
    part: VF,
    text: "La dernière phase du cycle de vie d'un produit est le déclin ; lors de cette phase, les prix augmentent.",
    options: VRAI_FAUX,
    correct: [1]
  },
  {
    part: VF,
    text: "La responsabilité de la fixation des prix est très diversement localisée dans l'entreprise.",
    options: VRAI_FAUX,
    correct: [0]
  },
  {
    part: VF,
    text: "Les entreprises qui proposent une innovation importante adoptent souvent un prix de pénétration afin d'assurer une marge unitaire forte.",
    options: VRAI_FAUX,
    correct: [1],
    explanation: "Elles adoptent un prix d'écrémage."
  },
  {
    part: VF,
    text: "Un circuit de distribution avec zéro intermédiaire est également appelé un circuit de vente directe.",
    options: VRAI_FAUX,
    correct: [0]
  },
  {
    part: VF,
    text: "Les grandes marques investissent massivement sur les réseaux sociaux, qui totalisent souvent près de 50 % de leurs dépenses de communication.",
    options: VRAI_FAUX,
    correct: [1],
    explanation: "Beaucoup de marques testent encore leur présence sur les réseaux sociaux : les budgets restent très limités par rapport aux outils classiques."
  },
  {
    part: VF,
    text: "Le GRP est un indicateur marketing qui signifie : gestion des relations publiques.",
    options: VRAI_FAUX,
    correct: [1],
    explanation: "GRP = Gross Rating Point, un indicateur de pression publicitaire surtout utilisé pour la télévision."
  }
];

module.exports = questions.map(q => ({ multi: false, points: 0.5, penalty: 0.5, ...q }));
