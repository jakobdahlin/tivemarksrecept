export type RecipeCategory =
  | 'Huvudrätter'
  | 'Soppor & Grytor'
  | 'Frukost'
  | 'Bakning'
  | 'Desserter'
  | 'Drycker'

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
  instructions: string[]
}

export interface Ingredient {
  name: string
  amount: number
  unit: 'g' | 'kg' | 'hg' | 'ml' | 'dl' | 'l' | 'st' | 'tsk' | 'msk' | 'krm' | 'paket'
  notes?: string
}

// Sample recipes - these will be replaced with real data later
export const sampleRecipes: Recipe[] = [
  {
    id: 'swedish-meatballs',
    title: 'Swedish Meatballs',
    image: '/receptbilder/swedish-meatballs.jpg',
    category: 'Huvudrätter',
    prepTime: '5 veckor',
    servings: 12,
    description: 'Decadent chocolate layer cake with chocolate buttercream.',
    ingredients: [
      { name: 'Svagdricka', amount: 6, unit: 'dl' },
      { name: 'Socker', amount: 3, unit: 'kg' },
      { name: 'jäst', amount: 2, unit: 'paket' },
      { name: 'Russin', amount: 60, unit: 'st' },
      { name: 'Hela nejlikor', amount: 20, unit: 'st' },
      { name: 'Ingefära', amount: 4, unit: 'g' },
      { name: 'Pommeranskal', amount: 3, unit: 'st' },
      { name: 'Bittermandlar', amount: 15, unit: 'st' },
      { name: 'Svart vinbärssaft', amount: 3, unit: 'dl' },
    ],
    instructions: [
      'Whisk together flour, cocoa, sugar, baking soda, and salt.',
      'Add eggs, buttermilk, oil, and vanilla.',
      'Stir in hot coffee until smooth.',
      'Pour into two 9-inch round pans.',
      'Bake at 350°F for 30-35 minutes.',
      'Cool completely before frosting.',
      'Make buttercream by beating butter with cocoa and sugar.',
      'Frost between layers and on outside of cake.',
    ],
  },
  {
    id: 'cinnamon-rolls',
    title: 'Cinnamon Rolls',
    image: '/receptbilder/cinnamon-rolls.jpg',
    category: 'Bakning',
    prepTime: '5 veckor',
    servings: 12,
    description: 'Decadent chocolate layer cake with chocolate buttercream.',
    ingredients: [
      { name: 'Svagdricka', amount: 6, unit: 'dl' },
      { name: 'Socker', amount: 3, unit: 'kg' },
      { name: 'jäst', amount: 2, unit: 'paket' },
      { name: 'Russin', amount: 60, unit: 'st' },
      { name: 'Hela nejlikor', amount: 20, unit: 'st' },
      { name: 'Ingefära', amount: 4, unit: 'g' },
      { name: 'Pommeranskal', amount: 3, unit: 'st' },
      { name: 'Bittermandlar', amount: 15, unit: 'st' },
      { name: 'Svart vinbärssaft', amount: 3, unit: 'dl' },
    ],
    instructions: [
      'Whisk together flour, cocoa, sugar, baking soda, and salt.',
      'Add eggs, buttermilk, oil, and vanilla.',
      'Stir in hot coffee until smooth.',
      'Pour into two 9-inch round pans.',
      'Bake at 350°F for 30-35 minutes.',
      'Cool completely before frosting.',
      'Make buttercream by beating butter with cocoa and sugar.',
      'Frost between layers and on outside of cake.',
    ],
  },
  {
    id: 'potato-pancakes',
    title: 'Potato Pancakes',
    image: '/receptbilder/potato-pancakes.jpg',
    category: 'Frukost',
    prepTime: '5 veckor',
    servings: 12,
    description: 'Decadent chocolate layer cake with chocolate buttercream.',
    ingredients: [
      { name: 'Svagdricka', amount: 6, unit: 'dl' },
      { name: 'Socker', amount: 3, unit: 'kg' },
      { name: 'jäst', amount: 2, unit: 'paket' },
      { name: 'Russin', amount: 60, unit: 'st' },
      { name: 'Hela nejlikor', amount: 20, unit: 'st' },
      { name: 'Ingefära', amount: 4, unit: 'g' },
      { name: 'Pommeranskal', amount: 3, unit: 'st' },
      { name: 'Bittermandlar', amount: 15, unit: 'st' },
      { name: 'Svart vinbärssaft', amount: 3, unit: 'dl' },
    ],
    instructions: [
      'Whisk together flour, cocoa, sugar, baking soda, and salt.',
      'Add eggs, buttermilk, oil, and vanilla.',
      'Stir in hot coffee until smooth.',
      'Pour into two 9-inch round pans.',
      'Bake at 350°F for 30-35 minutes.',
      'Cool completely before frosting.',
      'Make buttercream by beating butter with cocoa and sugar.',
      'Frost between layers and on outside of cake.',
    ],
  },
  {
    id: 'apple-pie',
    title: 'Classic Apple Pie',
    image: '/receptbilder/apple-pie.jpg',
    category: 'Desserter',
    prepTime: '5 veckor',
    servings: 12,
    description: 'Decadent chocolate layer cake with chocolate buttercream.',
    ingredients: [
      { name: 'Svagdricka', amount: 6, unit: 'dl' },
      { name: 'Socker', amount: 3, unit: 'kg' },
      { name: 'jäst', amount: 2, unit: 'paket' },
      { name: 'Russin', amount: 60, unit: 'st' },
      { name: 'Hela nejlikor', amount: 20, unit: 'st' },
      { name: 'Ingefära', amount: 4, unit: 'g' },
      { name: 'Pommeranskal', amount: 3, unit: 'st' },
      { name: 'Bittermandlar', amount: 15, unit: 'st' },
      { name: 'Svart vinbärssaft', amount: 3, unit: 'dl' },
    ],
instructions: [
  'Häll svagdrickan i en stor, ren jäshink eller glasdamejeanne.',
  'Tillsätt socker och rör om försiktigt så att det blandas med vätskan.',
  'Smula ner jästen och rör om lätt tills den löst sig.',
  'Tillsätt russin, hela nejlikor, ingefära, pomeransskal och bittermandlar.',
  'Häll i svart vinbärssaft och rör om försiktigt.',
  'Sätt på lock med jäsrör och ställ svalt.',
  'Låt stå och jäsa i cirka 5 veckor.',
  'Sila bort kryddor och frukt innan servering.',
]
  },
  {
    id: 'chicken-soup',
    title: 'Homemade Chicken Soup',
    image: '/receptbilder/chicken-soup.jpg',
    category: 'Soppor & Grytor',
    prepTime: '5 veckor',
    servings: 12,
    description: 'Decadent chocolate layer cake with chocolate buttercream.',
    ingredients: [
      { name: 'Svagdricka', amount: 6, unit: 'dl' },
      { name: 'Socker', amount: 3, unit: 'kg' },
      { name: 'jäst', amount: 2, unit: 'paket' },
      { name: 'Russin', amount: 60, unit: 'st' },
      { name: 'Hela nejlikor', amount: 20, unit: 'st' },
      { name: 'Ingefära', amount: 4, unit: 'g' },
      { name: 'Pommeranskal', amount: 3, unit: 'st' },
      { name: 'Bittermandlar', amount: 15, unit: 'st' },
      { name: 'Svart vinbärssaft', amount: 3, unit: 'dl' },
    ],
    instructions: [
      'Whisk together flour, cocoa, sugar, baking soda, and salt.',
      'Add eggs, buttermilk, oil, and vanilla.',
      'Stir in hot coffee until smooth.',
      'Pour into two 9-inch round pans.',
      'Bake at 350°F for 30-35 minutes.',
      'Cool completely before frosting.',
      'Make buttercream by beating butter with cocoa and sugar.',
      'Frost between layers and on outside of cake.',
    ],
  },
  {
    id: 'hans-glogg',
    title: 'Hans Glögg',
    image: '/receptbilder/hansglogg.jpg',
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
