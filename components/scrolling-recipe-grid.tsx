"use client"

import { useEffect, useState } from "react"
import { RecipeCard } from "./recipe-card"
import type { Recipe } from "@/lib/recipes"

interface ScrollingRecipeGridProps {
  recipes: Recipe[]
}

export function ScrollingRecipeGrid({ recipes }: ScrollingRecipeGridProps) {
  const [shuffledRecipes, setShuffledRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    const shuffled = [...recipes].sort(() => Math.random() - 0.5)
    setShuffledRecipes([...shuffled, ...shuffled, ...shuffled])
  }, [recipes])

  // Split into 5 columns (we will show/hide columns by breakpoint)
  const columns = Array.from({ length: 5 }, (_, colIndex) =>
    shuffledRecipes.filter((_, i) => i % 5 === colIndex)
  )

  // Alternate directions: up, down, up, down, up
  const directionClass = (colIndex: number) =>

    colIndex % 2 === 0 ? "animate-scroll-up" : "animate-scroll-down"

  // Slight speed variance per column (inline animationDuration)
  const durationFor = (colIndex: number) => {
    const durations = ["70s", "80s", "75s", "85s", "78s"]
    return durations[colIndex] ?? "80s"
  }

  return (
    <div className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 px-4 sm:px-6 lg:px-8">
        {/* Col 1 (mobile+) */}
        <div className={directionClass(0)} style={{ animationDuration: durationFor(0) }}>
          <div className="flex flex-col gap-4">
            {columns[0].map((recipe, index) => (
              <RecipeCard key={`col1-${recipe.id}-${index}`} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Col 2 (sm+) */}
        <div
          className={`hidden sm:block ${directionClass(1)}`}
          style={{ animationDuration: durationFor(1) }}
        >
          <div className="flex flex-col gap-4">
            {columns[1].map((recipe, index) => (
              <RecipeCard key={`col2-${recipe.id}-${index}`} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Col 3 (md+) */}
        <div
          className={`hidden md:block ${directionClass(2)}`}
          style={{ animationDuration: durationFor(2) }}
        >
          <div className="flex flex-col gap-4">
            {columns[2].map((recipe, index) => (
              <RecipeCard key={`col3-${recipe.id}-${index}`} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Col 4 (lg+) */}
        <div
          className={`hidden lg:block ${directionClass(3)}`}
          style={{ animationDuration: durationFor(3) }}
        >
          <div className="flex flex-col gap-4">
            {columns[3].map((recipe, index) => (
              <RecipeCard key={`col4-${recipe.id}-${index}`} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Col 5 (xl+) */}
        <div
          className={`hidden xl:block ${directionClass(4)}`}
          style={{ animationDuration: durationFor(4) }}
        >
          <div className="flex flex-col gap-4">
            {columns[4].map((recipe, index) => (
              <RecipeCard key={`col5-${recipe.id}-${index}`} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Col 6 (lg+) */}
        <div
          className={`hidden lg:block ${directionClass(3)}`}
          style={{ animationDuration: durationFor(3) }}
        >
          <div className="flex flex-col gap-4">
            {columns[3].map((recipe, index) => (
              <RecipeCard key={`col6-${recipe.id}-${index}`} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Col 7 (xl+) */}
        <div
          className={`hidden xl:block ${directionClass(4)}`}
          style={{ animationDuration: durationFor(4) }}
        >
          <div className="flex flex-col gap-4">
            {columns[4].map((recipe, index) => (
              <RecipeCard key={`col7-${recipe.id}-${index}`} recipe={recipe} />
            ))}
          </div>
        </div>

      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </div>
  )
}