"use client"

import { useEffect, useState, useRef } from "react"
import { RecipeCard } from "./recipe-card"
import type { Recipe } from "@/lib/recipes"

interface ScrollingRecipeGridProps {
  recipes: Recipe[]
}

export function ScrollingRecipeGrid({ recipes }: ScrollingRecipeGridProps) {
  const [shuffledRecipes, setShuffledRecipes] = useState<Recipe[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Shuffle recipes on mount
    const shuffled = [...recipes].sort(() => Math.random() - 0.5)
    // Duplicate for seamless loop
    setShuffledRecipes([...shuffled, ...shuffled, ...shuffled])
  }, [recipes])

  // Split into columns for the grid
  const column1 = shuffledRecipes.filter((_, i) => i % 3 === 0)
  const column2 = shuffledRecipes.filter((_, i) => i % 3 === 1)
  const column3 = shuffledRecipes.filter((_, i) => i % 3 === 2)

  return (
    <div 
      ref={containerRef}
      className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-hidden"
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8">
        {/* Column 1 - scrolls up */}
        <div className="animate-scroll-up">
          <div className="flex flex-col gap-4">
            {column1.map((recipe, index) => (
              <RecipeCard key={`col1-${recipe.id}-${index}`} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Column 2 - scrolls down */}
        <div className="animate-scroll-down">
          <div className="flex flex-col gap-4">
            {column2.map((recipe, index) => (
              <RecipeCard key={`col2-${recipe.id}-${index}`} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Column 3 - scrolls up (hidden on mobile) */}
        <div className="hidden lg:block animate-scroll-up-slow">
          <div className="flex flex-col gap-4">
            {column3.map((recipe, index) => (
              <RecipeCard key={`col3-${recipe.id}-${index}`} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </div>
  )
}
