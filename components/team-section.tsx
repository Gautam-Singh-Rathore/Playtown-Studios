import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Abhinav",
    role: "Game Designer",
    image: "/GC.jpeg",
    bio: "Game Designer at Playtown Studios Pvt. Ltd., designing engaging mechanics and story-driven experiences with a vision for world-class games.",
    social: {
      linkedin: "https://www.linkedin.com/in/abhinav-abhinav-900683250/",
      // twitter: "#",
      // github: "#",
    },
  },
  {
    name: "Harsh Kumar Jha",
    role: "Director",
    image: "/HKJ.jpeg",
    bio: "Blender Artist at Playtown Studios Pvt. Ltd., crafting immersive 3D assets and environments that bring stories and worlds to life.",
    social: {
      linkedin: "https://www.linkedin.com/in/harsh-jha-9a1144139/",
      // twitter: "#",
      // github: "#",
    },
  },
  {
    name: "Adarsh Mohan Singh",
    role: "CEO,Director",
    image: "/AMS.png",
    bio: "CEO of Playtown Studios Pvt. Ltd., leading the vision to build story-driven AA games today and globally impactful AAA games for the future.",
    social: {
      linkedin: "https://www.linkedin.com/in/adarsh-mohan-singh-b0473a263/",
      // twitter: "#",
      // github: "#",
    },
  },
  
]

export function TeamSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The creative minds and technical experts behind every Playtown Studios experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                </div>

                <div className="text-center mb-4">
                  <h3 className="font-heading font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center">{member.bio}</p>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  {/* <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a> */}
                  {/* <a
                    href={member.social.github}
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
