"use client"

import Image from "next/image";
import Link from "next/link"
import { useState } from "react"
import { Menu, X, ArrowLeft } from "lucide-react"

export function RecipeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="hidden sm:inline text-sm font-medium">Tillbaka</span>
            </Link>

            <div className="h-6 w-px bg-border hidden sm:block" />

            <Link href="/" className="flex items-center">
  <Image
    src="/tivemarks_W.jpg"
    alt="Tivemark's Recept"
    width={220}
    height={48}
    priority
    className="h-auto w-[160px] sm:w-[200px]"
  />
</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-base font-medium text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Recipes
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}