import { Button } from "@/components/ui/button"
export function ContactMap() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading font-bold text-2xl mb-6 text-center">Find Us</h2>
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
            {/* Interactive Map Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">Interactive Map</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    123 Game Dev Street, Tech District
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>

            {/* Overlay for Google Maps integration */}
            <iframe
              src="https://maps.app.goo.gl/3d2JZwxxSmJ9fu5cA"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity"
              title="Playtown Studios Location"
            />
          </div>

          <div className="p-4 bg-card">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-semibold">Playtown Studios HQ</h3>
                <p className="text-sm text-muted-foreground">Tech District, San Francisco</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="bg-transparent hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href="https://maps.google.com/?q=123+Game+Dev+Street,+Tech+District,+San+Francisco,+CA+94105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
