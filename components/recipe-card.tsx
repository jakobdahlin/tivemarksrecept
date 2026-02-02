import Link from "next/link"
import Image from "next/image"
import type { Recipe } from "@/lib/recipes"

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="group block">
      <article className="relative overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-background/90 text-foreground rounded mb-2">
              {recipe.category}
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-white leading-tight">
              {recipe.title}
            </h3>
          </div>
        </div>
      </article>
    </Link>
  )
}
