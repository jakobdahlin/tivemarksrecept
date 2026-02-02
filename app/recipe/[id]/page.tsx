import Image from "next/image"
import { notFound } from "next/navigation"
import { RecipeHeader } from "@/components/recipe-header"
import { getRecipeById, type Ingredient } from "@/lib/recipes"
import { Clock, Users, ChefHat } from "lucide-react"

interface RecipePageProps {
  params: Promise<{ id: string }>
}

function formatIngredient(ingredient: Ingredient) {
  const amount = ingredient.amount
  const unit = ingredient.unit
  const name = ingredient.name
  const notes = ingredient.notes ? `, ${ingredient.notes}` : ""

  return `${amount} ${unit} ${name}`.replace(/\s+/g, " ").trim() + notes
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params
  const recipe = getRecipeById(id)

  if (!recipe) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Faded Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src={recipe.image || "/placeholder.svg"}
          alt=""
          fill
          className="object-cover opacity-[0.04]"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Header no longer needs unit toggle */}
      <RecipeHeader />

      <main className="relative z-10 pt-24 pb-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Recipe Hero */}
          <header className="mb-8 sm:mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
              {recipe.category}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              {recipe.title}
            </h1>

            <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-2xl">
              {recipe.description}
            </p>

            {/* Recipe Meta */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{recipe.prepTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{recipe.servings} portioner</span>
              </div>

              <div className="flex items-center gap-2">
                <ChefHat className="h-4 w-4" />
                <span>{recipe.ingredients.length} ingredienser</span>
              </div>
            </div>
          </header>

          {/* Recipe Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 sm:mb-12 shadow-lg">
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {/* Recipe Content */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Ingredients */}
            <aside className="md:col-span-1">
              <div className="sticky top-24 bg-card rounded-xl p-6 shadow-sm border border-border">
                <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Ingredienser
                </h2>
                <ul className="space-y-3">
  {recipe.ingredients.map((ingredient, index) => (
    <li
      key={`ingredient-${index}`}
      className="flex items-start gap-3 text-sm text-foreground"
    >
      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
      <span>{formatIngredient(ingredient)}</span>
    </li>
  ))}
</ul>
              </div>
            </aside>

            {/* Instructions */}
            <section className="md:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Instruktioner
              </h2>

              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={`step-${index}`} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-foreground leading-relaxed pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </article>
      </main>
    </div>
  )
}