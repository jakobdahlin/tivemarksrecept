"use client"

import { useEffect, useState } from "react"
import { RecipeCard } from "./recipe-card"
import type { Recipe } from "@/lib/recipes"

interface ScrollingRecipeGridProps {
  recipes: Recipe[]
}

export function ScrollingRecipeGrid({ recipes }: ScrollingRecipeGridProps) {
  const [rows, setRows] = useState<Recipe[][]>([[], [], []])

  useEffect(() => {
    const shuffled = [...recipes].sort(() => Math.random() - 0.5)

    const rowData: Recipe[][] = [[], [], []]

    shuffled.forEach((recipe, index) => {
      rowData[index % 3].push(recipe)
    })

    // Duplicate rows for seamless loop
    setRows(rowData.map((row) => [...row, ...row]))
  }, [recipes])

  return (
    <div className="relative overflow-hidden space-y-2">

      {/* 🔥 Tailwind animation safelist trigger */}
      <div className="hidden animate-scroll-left animate-scroll-right" />

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="overflow-hidden">

          <div
            className={`flex gap-2 w-max will-change-transform ${
              rowIndex === 1
                ? "animate-scroll-right"
                : "animate-scroll-left"
            }`}
          >
            {row.map((recipe, index) => (
              <RecipeCard
                key={`row-${rowIndex}-${recipe.id}-${index}`}
                recipe={recipe}
              />
            ))}
          </div>

        </div>
      ))}

      {/* Side fade gradients */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  )
}