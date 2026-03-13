import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedGames } from "@/components/featured-games"
import { GameShowcase } from "@/components/game-showcase"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <GameShowcase />
      {/* <FeaturedGames /> */}
      <Footer/>
    </main>
  )
}
