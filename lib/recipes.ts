export type RecipeCategory =
  | 'Huvudrätter'
  | 'Paj'
  | 'Soppor & Grytor'
  | 'Frukost'
  | 'Bakning'
  | 'Desserter'
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
    id: 'Desserter',
    label: 'Desserter',
    description: 'Söta avslut på varje måltid',
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
  prepTime: string
  servings: number
  description: string
  ingredients: Ingredient[]
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
      prepTime: '60 minuter',
      servings: 6,
      description: 'Fyllig och mättande',
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
        'Sätt ugnen på 175°C.',
        'Blanda mjöl och margarin till en smulig deg.',
        'Tillsätt vattnet och arbeta snabbt ihop till en deg.',
        'Tryck ut degen i en pajform och nagga botten med en gaffel.',
        'Förbaka pajskalet i mitten av ugnen i ca 10 minuter.',
        'Vispa ihop ägg och grädde i en skål.',
        'Blanda ner den rivna osten och skinkan och rör till en jämn smet.',
        'Häll äggstanningen i det förbakade pajskalet.',
        'Grädda pajen i 175°C i ca 30–35 minuter tills fyllningen har stannat och fått fin färg.',
        'Låt pajen vila några minuter före servering.',
        'Garnera med ruccula',
      ],
    },

  // PAJ -----------------------------------------------------------------------------------

  {
    id: 'quichelorraine',
    title: 'Quiche Lorraine',
    image: '/receptbilder/quichelorraine.png',
    category: 'Paj',
    prepTime: '45 minuter',
    servings: 6,
    description: 'Fyllig och mättande',
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
      'Sätt ugnen på 175°C.',
      'Blanda mjöl och margarin till en smulig deg.',
      'Tillsätt vattnet och arbeta snabbt ihop till en deg.',
      'Tryck ut degen i en pajform och nagga botten med en gaffel.',
      'Förbaka pajskalet i mitten av ugnen i ca 10 minuter.',
      'Vispa ihop ägg och grädde i en skål.',
      'Blanda ner den rivna osten och skinkan och rör till en jämn smet.',
      'Häll äggstanningen i det förbakade pajskalet.',
      'Grädda pajen i 175°C i ca 30–35 minuter tills fyllningen har stannat och fått fin färg.',
      'Låt pajen vila några minuter före servering.',
      'Garnera med ruccula',
    ],
  },

  // SOPPOR & GRYTOR -----------------------------------------------------------------------------------

  {
    id: 'kraftsoppa',
    title: 'Kräftsoppa',
    image: '/receptbilder/kraftsoppa.png',
    category: 'Soppor & Grytor',
    prepTime: '30 minuter',
    servings: 4,
    description: 'Decadent chocolate layer cake with chocolate buttercream.',
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
    prepTime: '35 minuter',
    servings: 4,
    description: 'Decadent chocolate layer cake with chocolate buttercream.',
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

  // BAKNING -----------------------------------------------------------------------------------

  {
    id: 'hallongrottor',
    title: 'Hallongrottor',
    image: '/receptbilder/hallongrottor.png',
    category: 'Bakning',
    prepTime: '30 min',
    servings: 20,
    description: 'Klassiska hallongrottor med mördeg och hallonsylt.',
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
    prepTime: '30 min',
    servings: 20,
    description: 'Klassiska hallongrottor med mördeg och hallonsylt.',
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
      'Blanda i Kellogs Special, kokos och vaniljsocker.',
      'Häll i långpanna och häll över smält blockchoklad.',
    ],
  },

  {
    id: 'rabarberpaj',
    title: 'Rabarberpaj',
    image: '/receptbilder/rabarberpaj.png',
    category: 'Bakning',
    prepTime: '30 min',
    servings: 20,
    description: 'Klassiska hallongrottor med mördeg och hallonsylt.',
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
      'Rör ner det smälta smöret tills du får en smulig deg.',
      'Skär rabarbern i mindre bitar och blanda med socker och potatismjöl.',
      'Lägg rabarbern i en smord pajform.',
      'Fördela smuldegen jämnt över rabarbern.',
      'Grädda mitt i ugnen i cirka 20–25 minuter tills pajen är gyllene.',
      'Låt svalna något före servering.',
    ]
  },

  // DRYCKER -----------------------------------------------------------------------------------
  {
    id: 'hans-glogg',
    title: 'Hans Glögg',
    image: '/receptbilder/hansglogg.png',
    category: 'Drycker',
    prepTime: '5 veckor',
    servings: 12,
    description: 'Hans goda glögg.',
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
      prepTime: '5 veckor',
      servings: 12,
      description: 'Hans goda glögg.',
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
    recipe.description.toLowerCase().includes(lowercaseQuery) ||
    recipe.category.toLowerCase().includes(lowercaseQuery) ||
    recipe.ingredients.some(ing => ing.name.toLowerCase().includes(lowercaseQuery))
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
