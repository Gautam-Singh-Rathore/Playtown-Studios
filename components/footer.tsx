"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-heading font-black text-xl">
                Playtown Studios
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting immersive digital experiences through innovation,
              creativity, and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>3D Modelling</li>
              <li>Animation & VFX</li>
              <li>Game Development</li>
              <li>Web & App Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">
              Get in Touch
            </h3>

            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>playtownstudiosofficial@gmail.com</span>
            </div>

            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 86031 81030</span>
            </div>

            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>India</span>
            </div>

            <Link href="/contact">
              <Button className="mt-4 bg-primary hover:bg-primary/90 w-full md:w-auto">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Playtown Studios. All rights reserved.
          </p>

          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  )
}