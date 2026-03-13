import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { DevelopmentServices } from "@/components/development-services"
import { GameShowcase } from "@/components/game-showcase"
import { PartnershipSection } from "@/components/partnership-section"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ServicesHero />
        <DevelopmentServices />
        {/* <GameShowcase /> */}
        <PartnershipSection />
      </div>
      <Footer/>
    </main>
  )
}
