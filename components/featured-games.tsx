import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users } from "lucide-react";

const games = [
  {
    title: "Project X",
    description:
      "Step into a unique 3D multiplayer experience built entirely around fun, chaos, and competition. This game is designed to let players bully, troll, outplay, and outsmart each other in creative and hilarious ways, making every match unpredictable and unforgettable.",
    image: "/fantasy-game-screenshot.png",
    status: "In Development",
    platforms: ["Mobile"],
    year: "2026",
  },
  // {
  //   title: "Mystic Realms",
  //   description: "An epic fantasy RPG featuring magical worlds, ancient mysteries, and legendary creatures.",
  //   image: "/fantasy-game-screenshot.png",
  //   status: "In Development",
  //   platforms: ["PC", "Mobile"],
  //   year: "2025",
  // },
  // {
  //   title: "Stellar Command",
  //   description: "Strategic space exploration game where you build fleets and conquer the galaxy.",
  //   image: "/space-strategy-game.png",
  //   status: "Coming Soon",
  //   platforms: ["PC", "Console", "Mobile"],
  //   year: "2025",
  // },
];

export function FeaturedGames() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
            Our Game Universe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the immersive worlds we've crafted, each with unique
            stories and unforgettable experiences.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            > */}
        <div className={`${games.length === 1 ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-8`}>

          {games.map((game, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden
                 mx-auto w-full max-w-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 "
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      game.status === "Released"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : game.status === "In Development"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {game.status}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {game.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-4">
                  {game.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {game.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {game.platforms.join(", ")}
                  </div>
                </div>

                {/* <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all bg-transparent"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
