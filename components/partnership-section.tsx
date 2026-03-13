import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake, Building, Zap, Target, Globe, Award } from "lucide-react"

const partnershipTypes = [
  {
    icon: Building,
    title: "Publishing Partnerships",
    description:
      "Partner with us to publish your games across multiple platforms with our established distribution network.",
    benefits: ["Global Distribution", "Marketing Support", "Platform Relations", "Revenue Optimization"],
  },
  {
    icon: Handshake,
    title: "Development Collaboration",
    description: "Join forces with our team to co-develop games, combining your vision with our technical expertise.",
    benefits: ["Shared Resources", "Technical Expertise", "Risk Mitigation", "Faster Time to Market"],
  },
  {
    icon: Zap,
    title: "Technology Licensing",
    description:
      "License our proprietary game engines, tools, and technologies to accelerate your development process.",
    benefits: ["Proven Technology", "Technical Support", "Regular Updates", "Cost Effective"],
  },
]

const partnershipBenefits = [
  {
    icon: Target,
    title: "Strategic Guidance",
    description: "Benefit from our industry experience and strategic insights to make informed decisions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access our international network of distributors, platforms, and marketing channels.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Leverage our proven quality standards and testing processes for polished releases.",
  },
]

export function PartnershipSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-4">Partnership Opportunities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborate with Playtown Studios to bring exceptional gaming experiences to life
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {partnershipTypes.map((partnership, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <partnership.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {partnership.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">{partnership.description}</p>

                <div className="space-y-2 mb-6">
                  {partnership.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      <span className="text-card-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all bg-transparent"
                >
                  Learn More
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="font-heading font-bold text-2xl text-center mb-8">Why Partner with Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="font-heading font-bold text-2xl mb-4">Ready to Partner with Us?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how we can work together to create amazing gaming experiences and achieve mutual success.
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg">
            Start a Conversation
          </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
