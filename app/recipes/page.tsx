"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ChevronRight, Clock, Users } from "lucide-react"
import { Header } from "@/components/header"
import { 
  sampleRecipes, 
  categories, 
  searchRecipes, 
  filterByCategory,
  type RecipeCategory 
} from "@/lib/recipes"

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<RecipeCategory | "all">("all")

  const filteredRecipes = useMemo(() => {
    let results = sampleRecipes
    results = filterByCategory(results, selectedCategory)
    results = searchRecipes(results, searchQuery)
    return results
  }, [searchQuery, selectedCategory])

  const recipeCounts = useMemo(() => {
    const counts: Record<string, number> = { all: sampleRecipes.length }
    for (const category of categories) {
      counts[category.id] = sampleRecipes.filter(r => r.category === category.id).length
    }
    return counts
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              Receptarkivet
            </h1>
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
  Bläddra bland alla Marias älskade recept. Använd sökfunktionen eller filtrera på kategori för att hitta precis det du söker.
</p>

            {/* Search Bar */}
            <div className="mt-8 relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Sök recept, ingredienser..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
              />
            </div>
          </div>
        </section>

        {/* Category Filters + Recipes Grid */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <aside className="lg:w-64 shrink-0">
              <h2 className="font-serif text-lg font-semibold text-foreground mb-4">Kategorier</h2>
              <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === "all"
                      ? "bg-foreground text-background"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  <span>Alla Recept</span>
                  <span className={`ml-2 text-xs ${selectedCategory === "all" ? "text-background/70" : "text-muted-foreground"}`}>
                    {recipeCounts.all}
                  </span>
                </button>
                
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                      selectedCategory === category.id
                        ? "bg-foreground text-background"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className={`ml-2 text-xs ${selectedCategory === category.id ? "text-background/70" : "text-muted-foreground"}`}>
                      {recipeCounts[category.id]}
                    </span>
                  </button>
                ))}
              </nav>
            </aside>

            {/* Recipe Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  {filteredRecipes.length} {filteredRecipes.length === 1 ? "recipe" : "recipes"} found
                  {selectedCategory !== "all" && ` in ${selectedCategory}`}
                  {searchQuery && ` for "${searchQuery}"`}
                </p>
              </div>

              {filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredRecipes.map((recipe) => (
                    <Link
                      key={recipe.id}
                      href={`/recipe/${recipe.id}`}
                      className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={recipe.image || "/placeholder.svg"}
                          alt={recipe.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground rounded-full">
                            {recipe.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {recipe.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {recipe.description}
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {recipe.prepTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3.5 w-3.5" />
                            {recipe.servings} portioner
                          </span>
                        </div>
                        <div className="mt-3 flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                          Visa Recept
                          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-muted/30 rounded-xl border border-border">
                  <p className="text-muted-foreground">Du verkar söka något som vi inte har...</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("all")
                    }}
                    className="mt-4 text-sm font-medium text-foreground hover:text-accent transition-colors underline underline-offset-4"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>A collection of cherished family recipes</p>
        </div>
      </footer>
    </div>
  )
}
