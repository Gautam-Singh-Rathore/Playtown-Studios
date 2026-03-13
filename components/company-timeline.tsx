import { CheckCircle, Circle } from "lucide-react"

const milestones = [
  {
    year: "Present",
    title: "AA Games & AAA Vision",
    description:
      "Currently focused on building high-quality AA games, with a long-term vision of creating story-driven AAA games and innovations that will impact the global game industry for decades.",
    completed: false,
  },
  {
    year: "Nov 2025",
    title: "Support & Foundation",
    description:
      "With emotional and financial support from our parents, we built our first workspace and laid down a strong foundation for the studio’s future.",
    completed: true,
  },
  {
    year: "Oct 2025",
    title: "Clarity & Confidence",
    description:
      "By this time, learning transformed into confidence. Market research brought clarity, and we slowly began convincing our parents about the vision and future of Playtown Studios.",
    completed: true,
  },
  {
    year: "26 Mar 2025",
    title: "Company Registered",
    description:
      "Playtown Studios Pvt. Ltd. was officially registered, marking the transition from an idea to a legally recognized studio with long-term ambitions.",
    completed: true,
  },
  {
    year: "2024",
    title: "Lessons & Resilience",
    description:
      "There were moments of questioning whether we were made for this path. Every struggle, however, came with lessons that shaped our mindset, patience, and discipline as creators and founders.",
    completed: true,
  },
  {
    year: "Early 2024",
    title: "Facing Reality",
    description:
      "Reality hit hard with massive skill gaps, lack of funding, college pressure, and constant self-doubt. Balancing learning, life, and expectations felt overwhelming, and building a team taught us that unity doesn’t happen automatically.",
    completed: true,
  },
  {
    year: "Jan 2024",
    title: "The Decision",
    description:
      "Three friends decided this would no longer remain just a college project. With big dreams, zero real-world experience, but complete belief in the vision, the journey of Playtown Studios truly began.",
    completed: true,
  },
  {
    year: "Sep 2023",
    title: "The Spark",
    description:
      "During a college game project, Playtown Studios was born out of frustration. While researching the global game industry, we realized how low India stood despite immense talent. The guilt of not contributing to our country's presence in AAA or AA games became the driving force.",
    completed: true,
  },
];

export function CompanyTimeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-4">Our Journey</h2>
          <p className="text-xl text-muted-foreground">
            Key milestones that have shaped Playtown Studios into what we are today
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-card border-2 border-border rounded-full flex items-center justify-center relative z-10">
                  {milestone.completed ? (
                    <CheckCircle className="h-6 w-6 text-primary" />
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-heading font-black text-primary">{milestone.year}</span>
                      <h3 className="font-heading font-bold text-xl">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
