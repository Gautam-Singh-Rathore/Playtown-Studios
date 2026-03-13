import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Download, Calendar } from "lucide-react";

// const games = [
//   {
//     title: "Neon Odyssey",
//     description:
//       "A cyberpunk adventure through a dystopian future where technology and humanity collide. Experience a gripping narrative with stunning visuals and immersive gameplay.",
//     image: "/neon-odyssey-showcase.png",
//     status: "Released",
//     platforms: ["PC", "PlayStation 5", "Xbox Series X"],
//     releaseDate: "March 2024",
//     trailerUrl: "#",
//     downloadUrl: "#",
//     features: ["Single Player Campaign", "Ray Tracing Support", "4K Graphics", "Immersive Audio"],
//   },
//   {
//     title: "Mystic Realms",
//     description:
//       "An epic fantasy RPG featuring magical worlds, ancient mysteries, and legendary creatures. Embark on a quest that will determine the fate of multiple realms.",
//     image: "/mystic-realms-showcase.png",
//     status: "In Development",
//     platforms: ["PC", "Mobile", "Nintendo Switch"],
//     releaseDate: "Q2 2025",
//     trailerUrl: "#",
//     downloadUrl: null,
//     features: ["Open World Exploration", "Character Customization", "Multiplayer Co-op", "Cross-Platform Play"],
//   },
//   {
//     title: "Stellar Command",
//     description:
//       "Strategic space exploration game where you build fleets and conquer the galaxy. Command massive space battles and establish your interstellar empire.",
//     image: "/stellar-command-showcase.png",
//     status: "Coming Soon",
//     platforms: ["PC", "PlayStation 5", "Xbox Series X", "Mobile"],
//     releaseDate: "Late 2025",
//     trailerUrl: "#",
//     downloadUrl: null,
//     features: ["Real-time Strategy", "Fleet Management", "Galactic Conquest", "Online Multiplayer"],
//   },
//   {
//     title: "Pixel Dreams",
//     description:
//       "Our debut indie title that started it all. A charming platformer with retro aesthetics and modern gameplay mechanics that captured hearts worldwide.",
//     image: "/pixel-dreams-showcase.png",
//     status: "Released",
//     platforms: ["PC", "Mobile", "Nintendo Switch"],
//     releaseDate: "June 2020",
//     trailerUrl: "#",
//     downloadUrl: "#",
//     features: ["Retro Pixel Art", "Challenging Platforming", "Hidden Secrets", "Speedrun Mode"],
//   },
// ]

const games = [
  {
    title: "Project ZX01",
    description:
      "A free-to-play, AA-quality multiplayer battle royale focused on chaos, teamwork, and smart objective play. Teams race to secure a powerful crystal and place it at the target location to win, using non-lethal tools and strategic abilities in fast-paced 10–15 minute matches.",
    image: "/zx.png",
    status: "Launching Soon",
    platforms: ["Mobile"],
    releaseDate: "TBA",
    trailerUrl: "#",
    downloadUrl: null,
    features: [
      "Objective-based Multiplayer Battle Royale",
      "Solo and Team Modes (20 Players per Match)",
      "Non-lethal Control-based Weapons",
      "First- and Third-person Gameplay",
      "Anime-inspired Visuals",
      "Free-to-play with Character Customization",
    ],
  },
  {
    title: "Destructible Envo",
    description:
      "A physics-driven action game built around fully destructible environments. Every structure reacts dynamically to player actions, creating evolving combat scenarios and fresh gameplay moments every time you play.",
    image: "/dest.png",
    status: "In Development",
    platforms: ["Mobile"],
    releaseDate: "TBA",
    trailerUrl: "#",
    downloadUrl: null,
    features: [
      "Fully Destructible Environments",
      "Physics-based Gameplay",
      "Dynamic Combat Scenarios",
      "High Replay Value",
    ],
  },
  {
    title: "Cyber Rajasthan",
    description:
      "A cyberpunk-inspired mobile game set in a futuristic vision of Rajasthan, blending traditional Indian culture with advanced technology to create a visually striking and story-driven experience.",
    image: "/image.png",
    status: "In Development",
    platforms: ["Mobile"],
    releaseDate: "TBA",
    trailerUrl: "#",
    downloadUrl: null,
    features: [
      "Cyberpunk Setting with Cultural Roots",
      "Stylized Futuristic Environments",
      "Story-driven Mobile Gameplay",
      "Distinct Visual Identity",
    ],
  },
  {
    title: "Zombie Survival",
    description:
      "A tense mobile survival experience set in a world overrun by zombies. Players must explore dangerous environments, manage limited resources, and fight relentless threats to stay alive.",
    image: "/zombie.png",
    status: "In Development",
    platforms: ["Mobile"],
    releaseDate: "TBA",
    trailerUrl: "#",
    downloadUrl: null,
    features: [
      "Dark and Atmospheric Zombie World",
      "Survival-focused Gameplay",
      "Resource Management Systems",
      "Intense Mobile Combat",
    ],
  },
];

export function GameShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
            Our Game Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of games, from released titles to upcoming
            adventures
          </p>
        </div>

        <div className="space-y-12">
          {games.map((game, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        game.status === "Released" ? "default" : "secondary"
                      }
                      className={
                        game.status === "Released"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : game.status === "In Development"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      }
                    >
                      {game.status}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent
                  className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {game.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Platforms:</span>
                      <p className="font-medium">{game.platforms.join(", ")}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Release:</span>
                      <p className="font-medium flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {game.releaseDate}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-heading font-semibold mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {game.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-primary hover:bg-primary/90">
                      <Play className="mr-2 h-4 w-4" />
                      Trailer coming soon
                    </Button>
                    {game.downloadUrl && (
                      <Button variant="outline" className="bg-transparent">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    )}
                    {/* <Button variant="outline" className="bg-transparent">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button> */}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
