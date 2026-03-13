import { Navigation } from "@/components/navigation"
import { CompanyStory } from "@/components/company-story"
import { TeamSection } from "@/components/team-section"
import { CompanyTimeline } from "@/components/company-timeline"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <CompanyStory />
        <TeamSection />
        <CompanyTimeline />
      </div>
      <Footer/>
    </main>
  )
}
