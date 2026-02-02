import { Header } from "@/components/header"
import { ScrollingRecipeGrid } from "@/components/scrolling-recipe-grid"
import { sampleRecipes } from "@/lib/recipes"
import Link from "next/link"
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
{/* Hero Section */}
<section className="pt-24 pb-8 sm:pt-32 sm:pb-12">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance">
      Familjerecept,<br />
      <span className="text-muted-foreground">förda vidare med kärlek</span>
    </h1>
    <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
      En samling älskade recept från vårt familjekök.
      Varje rätt bär på en historia om tradition, omtanke och glädjen i att laga mat tillsammans.
    </p>
  </div>
</section>

      {/* Popular Recipes Section */}
      <section id="recipes" className="py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <div className="flex items-end justify-between">
            <div>
            </div>
            <Link 
              href="/recipes"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4"
            >
              Visa alla recept
            </Link>
          </div>
        </div>
        
        <ScrollingRecipeGrid recipes={sampleRecipes} />
      </section>

{/* About Section */}
<section id="about" className="py-16 sm:py-24 border-t border-border">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl">
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
        Om Tivemark&apos;s Recept
      </h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Den här samlingen har sina rötter i Maria Tivemarks kök, där varje måltid lagades
        med omsorg och varje recept var en skatt värd att bevara. Rätterna har följt
        familjen Tivemark genom generationer och samlat oss runt matbordet.
      </p>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        Oavsett om du söker en rejäl middag eller något sött till kaffet bär varje
        recept här på en bit av vår familjehistoria och värmen från hemlagad mat.
      </p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
            <p className="text-sm text-muted-foreground">
              Skapat med kärlek, delad med familjen.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
