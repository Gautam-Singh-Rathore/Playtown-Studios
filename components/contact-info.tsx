import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle
} from "lucide-react";


const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "playtownstudiosofficial@gmail.com",
    href: "playtownstudiosofficial@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 86031 81030",
    href: "tel:+91 86031 81030",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "A-283 Shivam Nagar, Ramnagariya, Jagatpura, Jaipur 302017",
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Sat: 10:00 AM - 4:00 PM IST",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/playtown_studios?igsh=NGhsaGl0NHhseXNi",
    color: "hover:text-blue-500",
  },
  {
    icon: Twitter,
    label: "Twitter/X",
    href: "https://twitter.com/playtownstudios",
    color: "hover:text-blue-400",
  },
  {
    icon: Youtube,
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCUcXWBuMsX0eAasQH-EBC4Q",
    color: "hover:text-blue-600",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    href: "https://discord.gg/XZKEaPDX",
    color: "hover:text-indigo-500",
  },
]

export function ContactInfo() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <h2 className="font-heading font-bold text-2xl mb-6 text-center">Contact Information</h2>

            <div className="space-y-4 mb-8">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <detail.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-muted-foreground">{detail.label}</p>
                    {detail.href.startsWith("mailto:") || detail.href.startsWith("tel:") ? (
                      <a href={detail.href} className="text-card-foreground hover:text-primary transition-colors">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-card-foreground">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="font-heading font-semibold text-lg mb-4 text-center">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{social.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-heading font-semibold mb-2">Quick Response Times</h4>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                call us directly.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
