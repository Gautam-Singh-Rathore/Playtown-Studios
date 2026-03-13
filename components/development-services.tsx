// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Palette, Code, Volume2, Gamepad2, Rocket, Users } from "lucide-react"

// const services = [
//   {
//     icon: Palette,
//     title: "Concept Art & Design",
//     description:
//       "From initial sketches to polished visual concepts, we bring your game ideas to life with stunning artwork and compelling character designs.",
//     features: ["Character Design", "Environment Art", "UI/UX Design", "Visual Style Guides"],
//   },
//   {
//     icon: Gamepad2,
//     title: "Game Design",
//     description:
//       "Expert game designers craft engaging mechanics, balanced gameplay systems, and compelling player experiences that keep audiences coming back.",
//     features: ["Gameplay Mechanics", "Level Design", "Player Progression", "Game Balancing"],
//   },
//   {
//     icon: Code,
//     title: "Programming & Development",
//     description:
//       "Our technical team builds robust, scalable games using cutting-edge technologies and industry best practices for optimal performance.",
//     features: ["Cross-Platform Development", "Engine Optimization", "Backend Systems", "Quality Assurance"],
//   },
//   {
//     icon: Volume2,
//     title: "Sound Design & Music",
//     description:
//       "Immersive audio experiences that enhance gameplay through carefully crafted sound effects, ambient audio, and memorable musical scores.",
//     features: ["Original Music Composition", "Sound Effects", "Voice Acting Direction", "Audio Implementation"],
//   },
//   {
//     icon: Rocket,
//     title: "Publishing & Marketing",
//     description:
//       "Complete publishing solutions including platform negotiations, marketing strategies, and post-launch support to maximize your game's success.",
//     features: ["Platform Publishing", "Marketing Campaigns", "Community Management", "Analytics & Optimization"],
//   },
//   {
//     icon: Users,
//     title: "Consulting & Support",
//     description:
//       "Strategic guidance and ongoing support for studios looking to improve their development processes and achieve their creative vision.",
//     features: ["Technical Consulting", "Project Management", "Team Training", "Post-Launch Support"],
//   },
// ]

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Box,
  Sparkles,
  Package,
  Megaphone,
  Calendar,
  Globe,
  BarChart3,
  Clapperboard
} from "lucide-react";

const services = [
  {
    icon: Box,
    title: "3D Modelling",
    description:
      "We create high-quality 3D models that look great and perform well. From characters and environments to props and assets, our models are built with care, detail, and real-world production needs in mind.",
    features: [
      "Hard-surface and Organic Modelling",
      "Game-ready and Real-time Assets",
      "Props, Environments, and Characters",
      "Clean Topology, UVs, and Textures",
    ],
  },
  {
    icon: Sparkles,
    title: "Animation & VFX",
    description:
      "We bring ideas to life through expressive animation and cinematic visual effects. Whether it’s character movement, action sequences, or polished visuals, we focus on storytelling, timing, and impact.",
    features: [
      "Character and Creature Animation",
      "Cinematics and Cutscenes",
      "Visual Effects and Simulations",
      "Motion Graphics and Polish",
    ],
  },
  {
    icon: Package,
    title: "Product Visualization",
    description:
      "We turn products into eye-catching visuals that sell the idea instantly. Our photorealistic renders and animations help brands showcase design, quality, and functionality with confidence.",
    features: [
      "Photorealistic Product Renders",
      "Product Animations and Turntables",
      "Exploded and Detail Views",
      "Marketing and E-commerce Visuals",
    ],
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "We help brands stay visible, relevant, and engaging on social media. From planning content to growing your audience, we focus on strategies that actually connect with people.",
    features: [
      "Content Planning and Strategy",
      "Platform-specific Posting (Instagram, X, LinkedIn, etc.)",
      "Audience Growth and Engagement",
      "Performance Tracking and Optimization",
    ],
  },
  {
    icon: Megaphone,
    title: "Product Promotion",
    description:
      "We craft campaigns that put your product in the spotlight. Whether it’s a launch or a refresh, we focus on clear messaging and visuals that make people care.",
    features: [
      "Product Launch Campaigns",
      "Promotional Visuals and Videos",
      "Clear Brand Messaging",
      "Multi-platform Promotion",
    ],
  },
  {
    icon: Calendar,
    title: "Event Announcement",
    description:
      "We help you spread the word and build excitement around your events. From teasers to launch-day posts, we make sure your announcement gets noticed.",
    features: [
      "Event Teaser Content",
      "Announcement Graphics and Videos",
      "Social Media Rollout Plans",
      "Pre- and Post-event Promotion",
    ],
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description:
      "We design and build modern websites and applications that are fast, reliable, and easy to use. From simple landing pages to full-scale platforms, we focus on clean design and smooth user experience.",
    features: [
      "Website and Web App Development",
      "Mobile-friendly and Responsive Design",
      "Performance and Security Optimization",
      "Ongoing Updates and Support",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "We turn raw data into clear insights you can actually use. Our approach helps you understand what’s happening, why it’s happening, and what to do next.",
    features: [
      "Data Cleaning and Organization",
      "Reports and Visual Dashboards",
      "Trend and Performance Analysis",
      "Data-driven Recommendations",
    ],
  },
  {
  icon: Clapperboard,
  title: "Video Editing",
  description:
    "We craft compelling videos that capture attention and communicate your message clearly. From short-form social content to cinematic brand films, we focus on pacing, storytelling, and polished visuals.",
  features: [
    "Promotional and Brand Videos",
    "Social Media Reels and Shorts",
    "Corporate and Explainer Videos",
    "Color Grading, Sound Design, and Final Polish",
  ],
}
];

export function DevelopmentServices() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl mb-4">
            Development Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive game development solutions tailored to bring your
            vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      <span className="text-card-foreground">{feature}</span>
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
      </div>
    </section>
  );
}
