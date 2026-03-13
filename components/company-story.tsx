import { Lightbulb, Heart, Zap } from "lucide-react"

export function CompanyStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Playtown Studios
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Where creativity meets technology to forge unforgettable gaming experiences
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-center">Our Mission</h2>
          <p className="text-lg text-card-foreground leading-relaxed text-center">
            At Playtown Studios, we believe that games are more than entertainment—they are gateways to new worlds,
            catalysts for human connection, and canvases for storytelling. Our mission is to craft immersive experiences
            that inspire, challenge, and unite players across the globe.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Innovation</h3>
            <p className="text-muted-foreground leading-relaxed">
              We push the boundaries of what's possible, embracing cutting-edge technology and creative solutions to
              deliver groundbreaking gaming experiences.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Passion</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every pixel, every line of code, every story element is crafted with genuine love for the art of game
              development and respect for our players.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">Excellence</h3>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to delivering polished, high-quality games that exceed expectations and stand the test of
              time in an ever-evolving industry.
            </p>
          </div>
        </div>

        {/* Company Vision */}
        <div className="text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We envision a future where Playtown Studios is recognized as a pioneer in interactive entertainment, known
            for creating games that not only entertain but also inspire meaningful connections between players and
            foster positive change in the gaming community. Through our dedication to storytelling excellence and
            technological innovation, we aim to leave a lasting impact on the industry and the lives of those who
            experience our creations.
          </p>
        </div>
      </div>
    </section>
  )
}
