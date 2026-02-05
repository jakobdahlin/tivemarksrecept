import Link from "next/link"
import Image from "next/image"
import type { Recipe } from "@/lib/recipes"

interface RecipeCardProps {
  recipe: Recipe
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="group block shrink-0 w-[260px] sm:w-[280px] lg:w-[300px]"
    >
      <article className="relative overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300">

        {/* Image wrapper MUST control height */}
        <div className="relative w-full aspect-[3/2] overflow-hidden">

          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="300px"
            priority={false}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              {recipe.title}
            </h3>
          </div>

        </div>
      </article>
    </Link>
  )
}