import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <ContactForm />
          <div className="space-y-0">
            <ContactInfo />
            {/* <ContactMap /> */}
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
