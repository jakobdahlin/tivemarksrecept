export type RecipeCategory =
  | 'Huvudrätter'
  | 'Paj'
  | 'Soppor & Grytor'
  | 'Frukost'
  | 'Bakning'
  | 'Drycker'
  | 'Övrigt'

export const categories: {
  id: RecipeCategory
  label: string
  description: string
}[] = [
  {
    id: 'Huvudrätter',
    label: 'Huvudrätter',
    description: 'Rejäla rätter för lunch och middag',
  },
  {
    id: 'Paj',
    label: 'Paj',
    description: 'Rejäla pajer för lunch och middag',
  },
  {
    id: 'Soppor & Grytor',
    label: 'Soppor & Grytor',
    description: 'Värmande rätter som ger komfort',
  },
  {
    id: 'Frukost',
    label: 'Frukost',
    description: 'En bra start på dagen',
  },
  {
    id: 'Bakning',
    label: 'Bakning',
    description: 'Bröd, bakverk och godsaker',
  },
  {
    id: 'Drycker',
    label: 'Drycker',
    description: 'Drycker för hela familjen',
  },
  {
    id: 'Övrigt',
    label: 'Övrigt',
    description: 'Övrigt',
  },
]

export interface Recipe {
  id: string
  title: string
  image: string
  category: RecipeCategory
  ingredients: Ingredient[]
  ingredients2?: Ingredient[]
  instructions?: string[]
}

export interface Ingredient {
  name: string
  amount: number
  unit: 'g' | 'kg' | 'hg' | 'ml' | 'dl' | 'l' | 'st' | 'tsk' | 'msk' | 'krm' | 'paket' | 'ask' | 'burk'
  notes?: string
}

// Sample recipes - these will be replaced with real data later
export const sampleRecipes: Recipe[] = [


    // HUVUDRÄTTER -----------------------------------------------------------------------------------

    {
      id: 'pizzadeg',
      title: 'Italiensk Pizzadeg',
      image: '/receptbilder/pizzadeg.png',
      category: 'Huvudrätter',
      ingredients: [
        { name: 'Ljummet vatten', amount: 2, unit: 'dl' },
        { name: 'Olja', amount: 1, unit: 'msk' },
        { name: 'Jäst', amount: 25, unit: 'g' },
        { name: 'Mjöl', amount: 5, unit: 'dl' },
      ],
    },

    {
      id: 'saffranspannkaka',
      title: 'Saffranspannkaka',
      image: '/receptbilder/saffranspannkaka.png',
      category: 'Huvudrätter',
      ingredients: [
        { name: 'Risgrynsgröt', amount: 1, unit: 'l' },
        { name: 'Grädde', amount: 1.5, unit: 'dl' },
        { name: 'Ägg', amount: 3, unit: 'st' },
        { name: 'Socker', amount: 2, unit: 'msk' },
        { name: 'Hackad mandel', amount: 1, unit: 'dl' },
        { name: 'Saffran', amount: 1, unit: 'paket' },
      ],
      instructions: [
        '225°C',
        '30 minuter',
      ],
    },

    {
      id: 'ryskapiroger',
      title: 'Ryska Piroger',
      image: '/receptbilder/ryskapiroger.png',
      category: 'Huvudrätter',
      ingredients: [
        { name: 'Jäst', amount: 50, unit: 'g' },
        { name: 'Mjölk', amount: 3, unit: 'dl' },
        { name: 'Margarin', amount: 100, unit: 'g' },
        { name: 'Salt', amount: 1, unit: 'tsk' },
        { name: 'Ägg', amount: 3, unit: 'st' },
        { name: 'Vetemjöl', amount: 12, unit: 'dl' },
      ],
      instructions: [
        '225°C',
        'Gör en smidig deg',
        'Jäs i 30 minuter',
        'Fyll med köttfärs/lök/tomatpuré*',
        'Fyll och jäs 10 minuter',
        'Pensla med ägg',
        '15 minuter i ugnen',
      ],
    },
    

  // PAJ -----------------------------------------------------------------------------------

  {
    id: 'quichelorraine',
    title: 'Quiche Lorraine',
    image: '/receptbilder/quichelorraine.png',
    category: 'Paj',
    ingredients: [
      { name: 'Margarin', amount: 100, unit: 'g' },
      { name: 'Mjöl', amount: 2, unit: 'dl' },
      { name: 'Vatten', amount: 1/2, unit: 'dl' },
      { name: 'Ägg', amount: 2, unit: 'st' },
      { name: 'Grädde', amount: 2, unit: 'dl' },
      { name: 'Riven ost', amount: 3, unit: 'dl' },
      { name: 'Riven skinka', amount: 2, unit: 'dl' },
      { name: 'Ruccula', amount: 1, unit: 'paket' },
    ],
    instructions: [
      'Sätt ugnen på 175°C',
      'Blanda mjöl och margarin till en smulig deg',
      'Tillsätt vattnet och arbeta snabbt ihop till en deg',
      'Tryck ut degen i en pajform och nagga botten med en gaffel',
      'Förbaka pajskalet i mitten av ugnen i ca 10 minuter',
      'Vispa ihop ägg och grädde i en skål',
      'Blanda ner den rivna osten och skinkan och rör till en jämn smet',
      'Häll äggstanningen i det förbakade pajskalet',
      'Grädda pajen i 175°C i ca 30–35 minuter tills fyllningen har stannat och fått fin färg',
      'Låt pajen vila några minuter före servering',
      'Garnera med ruccula',
    ],
  },

  {
    id: 'potatispurjopaj',
    title: 'Potatis & Purjolökspaj',
    image: '/receptbilder/potatispurjopaj.png',
    category: 'Paj',
    ingredients: [
      { name: 'Mjöl', amount: 2 + 1/2, unit: 'dl' },
      { name: 'Smör', amount: 125, unit: 'g' },
      { name: 'Kallt vatten', amount: 2, unit: 'msk' },
      { name: 'Salt', amount: 1, unit: 'krm' },
    ],

    ingredients2: [
      { name: 'Purjolök', amount: 1, unit: 'st' },
      { name: 'Potatis', amount: 600, unit: 'g' },
      { name: 'Ost', amount: 3, unit: 'dl' },
      { name: 'Ägg', amount: 5, unit: 'st' },
      { name: 'Mjölk', amount: 5, unit: 'dl' },
    ],
    instructions: [
      'Sätt ugnen på 225°C',
      'Koka purjolöken 5 i minuter',
      'Koka potatisen i 4 minuter',
      'Skär potatisen i 1/2cm skivor',
      'Fyll pajen (Potatis -> Purjolök -> Ost -> Potatis -> Purjolök...)',
      'Grädda 1 timme längst ner i ugnen',
    ],
  },

  {
    id: 'gronkalspaj',
    title: 'Grönkålspaj',
    image: '/receptbilder/gronkalspaj.png',
    category: 'Paj',
    ingredients: [
      { name: 'Mjöl', amount: 3 + 1/2, unit: 'dl' },
      { name: 'Smör', amount: 125, unit: 'g' },
      { name: 'Kallt vatten', amount: 3, unit: 'msk' },
    ],

    ingredients2: [
      { name: 'Färsk Grönkål', amount: 250, unit: 'g' },
      { name: 'Rödlökar', amount: 2, unit: 'st' },
      { name: 'Riven Prästost', amount: 2, unit: 'dl' },
      { name: 'Ägg', amount: 3, unit: 'st' },
      { name: 'Grädde', amount: 3, unit: 'dl' },
    ],
    instructions: [
      'Sätt ugnen på 200°C',
      'Koka 5-7 minuter',
      'Stek lök och kål i 10 minuter',
    ],
  },

  // SOPPOR & GRYTOR -----------------------------------------------------------------------------------

  {
    id: 'kraftsoppa',
    title: 'Kräftsoppa',
    image: '/receptbilder/kraftsoppa.png',
    category: 'Soppor & Grytor',
    ingredients: [
      { name: 'Smör', amount: 2, unit: 'msk' },
      { name: 'Finrivna morötter', amount: 3, unit: 'st' },
      { name: 'Mjöl', amount: 2, unit: 'msk' },
      { name: 'Vatten', amount: 1, unit: 'l' },
      { name: 'Fiskbuljongtärningar', amount: 2, unit: 'st' },
      { name: 'Kräftost', amount: 1, unit: 'ask' },
      { name: 'Kräftstjärtar', amount: 1, unit: 'burk' },
      { name: 'Crab Fish', amount: 200, unit: 'g' },
      { name: 'Creme Fraige', amount: 2, unit: 'dl' },
      { name: 'Dill', amount: 2, unit: 'tsk' },
      { name: 'Svartpeppar', amount: 2, unit: 'krm' },
    ],
    instructions: [
      'Häll upp vattnet i en kastrul och värm upp med buljongtärningar.',
      'Riv morötter och fräs i smöret.',
      'Strö over mjöl.',
      'Späd med buljong och krydda.',
      'Låt koka i 10 minuter.',
      'Häll i ost, creme fraige, dill och krabfish.',
      'Låt puttra i 10 minuter.',
      'Lägg i kräftstjärtarna före servering.',
    ],
  },

  // FRUKOST -----------------------------------------------------------------------------------

  {
    id: 'ugnsomelett',
    title: 'Ugnsomelett',
    image: '/receptbilder/ugnsomelett.png',
    category: 'Frukost',
    ingredients: [
      { name: 'Ägg', amount: 4, unit: 'st' },
      { name: 'Mjölk', amount: 3, unit: 'dl' },
      { name: 'Salt', amount: 1/2, unit: 'tsk' },
      { name: 'Mjöl', amount: 1/2, unit: 'msk' },
      { name: 'Socker', amount: 1.5, unit: 'tsk' },
    ],
    instructions: [
      'Sätt ugnen på 175°.',
      'Blanda ingredienserna.',
      'Slå i smord form.',
    ],
  },

  {
    id: 'musli',
    title: 'Müsli',
    image: '/receptbilder/musli.png',
    category: 'Frukost',
    ingredients: [
      { name: 'Havregryn', amount: 1, unit: 'l' },
      { name: 'Rågflingor', amount: 5, unit: 'dl' },
      { name: 'Vetegroddar', amount: 2.5, unit: 'dl' },
      { name: 'Olja', amount: 1/2, unit: 'dl' },
      { name: 'Mörk sirap', amount: 1.5, unit: 'dl' },
      { name: 'Russin', amount: 2, unit: 'dl' },
    ],
    instructions: [
      '150°.',
      '10-15 minuter',
    ],
  },

  {
    id: 'pannkakor',
    title: 'Pannkakor',
    image: '/receptbilder/pannkakor.png',
    category: 'Frukost',
    ingredients: [
      { name: 'Ägg', amount: 2, unit: 'st' },
      { name: 'Mjölk', amount: 2, unit: 'dl' },
      { name: 'Mjöl', amount: 3, unit: 'dl' },
      { name: 'Salt', amount: 1, unit: 'tsk' },
      { name: 'Mjölk (igen)', amount: 4, unit: 'dl' },
    ],
    instructions: [
      'Låt smeten dra i 30 minuter',
    ],
  },

  {
    id: 'ampannkakor',
    title: 'Amerikanska Pannkakor',
    image: '/receptbilder/ampannkakor.png',
    category: 'Frukost',
    ingredients: [
      { name: 'Smör', amount: 30, unit: 'g' },
      { name: 'Mjöl', amount: 3 + 3/4, unit: 'dl' },
      { name: 'Bakpulver', amount: 2, unit: 'tsk' },
      { name: 'Socker', amount: 1, unit: 'tsk' },
      { name: 'Salt', amount: 1, unit: 'tsk' },
      { name: 'Ägg', amount: 2, unit: 'st' },
      { name: 'Mjölk', amount: 3, unit: 'dl' },


    ],
    instructions: [
      'Låt smeten dra i 30 minuter',
    ],
  },

  // BAKNING -----------------------------------------------------------------------------------

  {
    id: 'hallongrottor',
    title: 'Hallongrottor',
    image: '/receptbilder/hallongrottor.png',
    category: 'Bakning',
    ingredients: [
      { name: 'Margarin', amount: 250, unit: 'g' },
      { name: 'Socker', amount: 1.5, unit: 'tsk' },
      { name: 'Vetemjöl', amount: 5, unit: 'dl' },
      { name: 'Bakpulver', amount: 2, unit: 'tsk' },
      { name: 'Vaniljsocker', amount: 2, unit: 'tsk' },
      { name: 'Hallonsylt i varje grotta', amount: 1, unit: 'tsk' },
    ],
    instructions: [
      'Sätt ugnen på 200°C.',
      'Blanda margarin och socker tills smidigt.',
      'Blanda vetemjöl, bakpulver och vaniljsocker i en separat skål.',
      'Arbeta ihop mjölblandningen med margarinblandningen till en deg.',
      'Forma degen till kulor och lägg dem på en plåt med bakplåtspapper.',
      'Gör en fördjupning i varje kaka och fyll med hallonsylt.',
      'Grädda mitt i ugnen i cirka 10–12 minuter tills kakorna fått lätt färg.',
      'Låt svalna.',
    ],
  },

  {
    id: 'snickers',
    title: 'Snickers',
    image: '/receptbilder/snickers.png',
    category: 'Bakning',
    ingredients: [
      { name: 'Jordnötssmör', amount: 1, unit: 'burk' },
      { name: 'Sirap', amount: 2, unit: 'dl' },
      { name: 'Socker', amount: 1, unit: 'dl' },
      { name: 'Kellogg´s Special', amount: 1, unit: 'l' },
      { name: 'Kokos', amount: 1, unit: 'dl' },
      { name: 'Vaniljsocker', amount: 1, unit: 'tsk' },
      { name: 'Blockchoklad (Ljus)', amount: 300, unit: 'g' },
    ],
    instructions: [
      'Smält jordnötssmör, sirap och socker till en smet.',
      'Blanda i Kellogg´s Special, kokos och vaniljsocker.',
      'Häll i långpanna och häll över smält blockchoklad.',
    ],
  },

  {
    id: 'rabarberpaj',
    title: 'Rabarberpaj',
    image: '/receptbilder/rabarberpaj.png',
    category: 'Bakning',
    ingredients: [
      { name: 'Smör', amount: 175, unit: 'g' },
      { name: 'Mjöl', amount: 3, unit: 'dl' },
      { name: 'Socker', amount: 1, unit: 'dl' },
      { name: 'Salt', amount: 1, unit: 'krm' },
      { name: 'Bakpulver', amount: 1/2, unit: 'tsk' },
      { name: 'Rabarber', amount: 400, unit: 'g' },
      { name: 'Socker', amount: 3, unit: 'tsk' },
      { name: 'Potatismjöl', amount: 1, unit: 'tsk' },
    ],
    instructions: [
      'Sätt ugnen på 225°C.',
      'Smält smöret och låt det svalna något.',
      'Blanda mjöl, socker, salt och bakpulver i en bunke.',
      'Rör ner det smälta smöret tills du får en mjuk deg.',
      'Skär rabarbern i mindre bitar och blanda med socker och potatismjöl.',
      'Smörj pajformen med lite smör.',
      'kavla försiktigt ut degen över pajformen och kanterna.',
      'Lägg på rabarbern och strö socker på pajen.',
      'Grädda mitt i ugnen i cirka 20 minuter tills pajen är gyllene.',
      'Låt svalna något före servering.',
    ]
  },

  {
    id: 'smulpaj',
    title: 'Smulpaj',
    image: '/receptbilder/smulpaj.png',
    category: 'Bakning',
    ingredients: [
      { name: 'Margarin', amount: 100, unit: 'g' },
      { name: 'Mjöl', amount: 2, unit: 'dl' },
      { name: 'Vaniljsocker', amount: 1, unit: 'tsk' },
      { name: 'Bakpulver', amount: 1, unit: 'tsk' },
    ],
    instructions: [
      'Sätt ugnen på 225°C.',
      'Blanda mjöl och margarin till en smulig deg.',
      'Tillsätt vattnet och arbeta snabbt ihop till en deg.',
      'Tryck ut degen i en pajform och nagga botten med en gaffel.',
      'Förbaka pajskalet i mitten av ugnen i ca 10 minuter.',
      'Vispa ihop ägg och grädde i en skål.',
      'Blanda ner den rivna osten och skinkan och rör till en jämn smet.',
      'Häll äggstanningen i det förbakade pajskalet.',
      'Grädda pajen i 225°C i ca 30 minuter tills fyllningen har stannat och fått fin färg.',
      'Låt pajen vila några minuter före servering.',
      'Garnera med ruccula',
    ],
  },

    {
    id: 'tartbotten',
    title: 'Tårtbotten',
    image: '/receptbilder/tartbotten.png',
    category: 'Bakning',
    ingredients: [
      { name: 'ägg', amount: 2, unit: 'st' },
      { name: 'Socker', amount: 2, unit: 'dl' },
      { name: 'Vetemjöl', amount: 2, unit: 'dl' },
      { name: 'Bakpulver', amount: 1, unit: 'tsk' },
      { name: 'Vaniljsocker', amount: 1, unit: 'tsk' },
      { name: 'Hett vatten', amount: 4, unit: 'msk' },
    ],
    instructions: [
      'Sätt ugnen på 175°C.',
      'Klä en rund form (ca 22–24 cm) med bakplåtspapper i botten och smörj kanterna lätt.',
      'Vispa ägg och socker ljust och riktigt pösigt i en bunke.',
      'Blanda vetemjöl, bakpulver och vaniljsocker i en separat skål.',
      'Sikta ner de torra ingredienserna i äggsmeten och vänd försiktigt ihop till en jämn smet.',
      'Tillsätt det heta vattnet och rör snabbt men försiktigt tills smeten är slät.',
      'Häll smeten i formen och jämna till ytan.',
      'Grädda i nedre delen av ugnen i ca 30–35 minuter tills kakan är gyllene och en provsticka kommer ut torr.',
      'Låt tårtbottnen svalna några minuter i formen, vänd sedan upp den på galler och låt svalna helt innan den delas eller fylls.'
    ]
  },
  {
    id: 'gotlandsrutor',
    title: 'Gotlandsrutor',
    image: '/receptbilder/gotlandsrutor.png',
    category: 'Bakning',
    ingredients: [
      { name: 'Vetemjöl', amount: 9, unit: 'dl' },
      { name: 'Farinsocker', amount: 3, unit: 'dl' },
      { name: 'Socker', amount: 3, unit: 'dl' },
      { name: 'Kanel', amount: 1, unit: 'msk' },
      { name: 'Kakao', amount: 1, unit: 'msk' },
      { name: 'Bikarbonat', amount: 1.5, unit: 'tsk' },
      { name: 'Yogurt', amount: 6, unit: 'dl' },
      { name: 'Margarin', amount: 200, unit: 'g' }, 
    ],
    ingredients2: [
      { name: 'Florsocker', amount: 4, unit: 'dl' },
      { name: 'Citronskal', amount: 1, unit: 'st' },
      { name: 'Pressad Apelsin', amount: 1/2, unit: 'st' },
      { name: 'Margarin', amount: 25, unit: 'g' },
      { name: 'Syltade apelsinskal', amount: 1, unit: 'burk' },
    ],
    instructions: [
      'Sätt ugnen på 200°C och klä en långpanna med bakplåtspapper.',
      'Blanda vetemjöl, farinsocker, strösocker, kanel, kakao och bikarbonat i en stor bunke.',
      'Tillsätt yoghurten och rör till en jämn smet.',
      'Smält margarinet och blanda ner det i smeten.',
      'Häll smeten i långpannan och bred ut jämnt.',
      'Grädda mitt i ugnen i ca 25 minuter.',
      'Ta ut kakan och låt den svalna något.',
      'Blanda florsocker, finrivet citronskal, pressad apelsin och margarin till en slät glasyr.',
      'Bred glasyren över den ljumma eller kalla kakan.',
      'Strö över syltade apelsinskal och låt glasyren stelna innan kakan skärs i rutor.',
    ]
  },

  {
    id: 'saffranskaka',
    title: 'Saffranskaka',
    image: '/receptbilder/saffranskaka.png',
    category: 'Bakning',
    ingredients: [
      { name: 'Ägg', amount: 2, unit: 'st' },
      { name: 'Socker', amount: 3, unit: 'dl' },
      { name: 'Saffran', amount: 1, unit: 'paket' },
      { name: 'smält Margarin', amount: 200, unit: 'g' },
      { name: 'Mjölk', amount: 1.5, unit: 'dl' },
      { name: 'Mjöl', amount: 4, unit: 'dl' },
      { name: 'Bakpulver', amount: 2, unit: 'tsk' },
      { name: 'Florsocker', amount: 1, unit: 'msk' },
      { name: 'Ströbröd', amount: 2, unit: 'msk' },
    ],
    instructions: [
      'Sätt ugnen på 175°C.',
      'Smält margarinet och blanda i saffran. Låt svalna något.',
      'Vispa ägg och socker pösigt.',
      'Rör ner saffransmörblandningen i äggsmeten.',
      'Tillsätt mjölken och blanda försiktigt.',
      'Blanda mjöl och bakpulver i en separat skål.',
      'Vänd ner mjölblandningen i smeten tills den är jämn.',
      'Häll smeten i en smord och ströbröad form.',
      'Grädda i mitten av ugnen i cirka 30 minuter.',
      'Låt kakan svalna något.',
      'Sikta florsocker över före servering.',
    ],
  },

  {
    id: 'pitabrod',
    title: 'Pitabröd',
    image: '/receptbilder/pitabrod.png',
    category: 'Bakning',
    ingredients: [
      { name: 'Ljummet vatten', amount: 2, unit: 'st' },
      { name: 'Olja', amount: 3, unit: 'dl' },
      { name: 'Salt', amount: 1, unit: 'paket' },
      { name: 'Jäst', amount: 200, unit: 'g' },
      { name: 'Vetemjöl', amount: 1.5, unit: 'dl' },
      { name: 'Vetemjöl Special', amount: 4, unit: 'dl' },
    ],
    instructions: [
      'Sätt ugnen på 275°C',
      'Jäs 45 minuter',
      'Forma till bullar',
      'Jäs 10 minuter',
      'Kavla ut till tefat',
      'Jäs 30 minuter',
      'Grädda i 10 minuter',
    ],
  },

  {
    id: 'tekakor',
    title: 'Tekakor',
    image: '/receptbilder/tekakor.png',
    category: 'Bakning',
    ingredients: [
      { name: 'Jäst', amount: 2, unit: 'paket' },
      { name: 'Socker', amount: 1 + 1/2, unit: 'dl' },
      { name: 'Margarin', amount: 200, unit: 'g' },
      { name: 'Mjölk', amount: 1, unit: 'l' },
      { name: 'Bakpulver', amount: 1, unit: 'tsk' },
      { name: 'Vetemjöl', amount: 3, unit: 'l' },
    ],
    instructions: [
      '(48 st)',
      '225°C',
    ],
  },

  // DRYCKER -----------------------------------------------------------------------------------
  {
    id: 'hans-glogg',
    title: 'Hans Glögg',
    image: '/receptbilder/hansglogg.png',
    category: 'Drycker',
    ingredients: [
      { name: 'Svagdricka', amount: 6, unit: 'l' },
      { name: 'Socker', amount: 3, unit: 'dl' },
      { name: 'Jäst', amount: 2, unit: 'paket' },
      { name: 'Russin', amount: 60, unit: 'st' },
      { name: 'Hela nejlikor', amount: 20, unit: 'st' },
      { name: 'Ingefära', amount: 4, unit: 'g' },
      { name: 'Pommeranskal', amount: 3, unit: 'st' },
      { name: 'Bittermandlar', amount: 15, unit: 'st' },
      { name: 'Svart vinbärssaft', amount: 3, unit: 'dl' },
      { name: 'Aromatiska droppar', amount: 2, unit: 'msk' },
    ],
    instructions: [
      'Häll svagdrickan i en stor, ren jäshink eller glasdamejeanne.',
      'Tillsätt socker och rör om försiktigt så att det blandas med vätskan.',
      'Smula ner jästen och rör om lätt tills den löst sig.',
      'Tillsätt russin, hela nejlikor, ingefära, pomeransskal och bittermandlar.',
      'Häll i svart vinbärssaft och rör om försiktigt.',
      'Sätt på lock med jäsrör och ställ svalt.',
      'Låt stå och jäsa i cirka 5 veckor.',
      'Sila bort kryddor och frukt innan servering. Tillsätt aromatiska droppar.',
    ]
  },

    // ÖVRIGT -----------------------------------------------------------------------------------
    {
      id: 'playdoh',
      title: 'Play-Doh',
      image: '/receptbilder/playdoh.png',
      category: 'Övrigt',
      ingredients: [
        { name: 'Mjöl', amount: 5, unit: 'dl' },
        { name: 'Salt', amount: 2, unit: 'dl' },
        { name: 'Citroncyra', amount: 1.5, unit: 'msk' },
        { name: 'Olja', amount: 1.5, unit: 'msk' },
        { name: 'Kokande vatten', amount: 5, unit: 'dl' },
      ],
      instructions: [
        'Blanda torra ingredienser i en bunke.',
        'Tillsätt kokande vatten.',
        'Tillsätta några droppar karamellfärg.',
        'Undvik att äta.',
      ]
    },
]

export function getRecipeById(id: string): Recipe | undefined {
  return sampleRecipes.find(recipe => recipe.id === id)
}

export function shuffleRecipes(recipes: Recipe[]): Recipe[] {
  const shuffled = [...recipes]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function searchRecipes(recipes: Recipe[], query: string): Recipe[] {
  const lowercaseQuery = query.toLowerCase().trim()
  if (!lowercaseQuery) return recipes

  return recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(lowercaseQuery) ||
    recipe.category.toLowerCase().includes(lowercaseQuery) ||
    recipe.ingredients.some(ing =>
      ing.name.toLowerCase().includes(lowercaseQuery)
    ) ||
    recipe.ingredients2?.some(ing =>
      ing.name.toLowerCase().includes(lowercaseQuery)
    )
  )
}

export function filterByCategory(recipes: Recipe[], category: RecipeCategory | 'all'): Recipe[] {
  if (category === 'all') return recipes
  return recipes.filter(recipe => recipe.category === category)
}

export function getRecipesByCategory(recipes: Recipe[]): Record<RecipeCategory, Recipe[]> {
  return recipes.reduce((acc, recipe) => {
    if (!acc[recipe.category]) {
      acc[recipe.category] = []
    }
    acc[recipe.category].push(recipe)
    return acc
  }, {} as Record<RecipeCategory, Recipe[]>)
}
