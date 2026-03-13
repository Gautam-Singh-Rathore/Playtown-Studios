import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/futuristic-neon-landscape.png')`,
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Crafting Worlds,
          <br />
          Creating Legends
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          We are Playtown Studios, where innovation meets storytelling to create immersive gaming experiences that
          captivate players worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/services" >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg hover:cursor-pointer">
            Explore Our Games
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>
          

          {/* <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Trailer
          </Button> */}
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-pulse opacity-40 animation-delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse opacity-80 animation-delay-2000" />
      </div>
    </section>
  )
}
