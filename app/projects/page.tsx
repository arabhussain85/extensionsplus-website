import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Euro, MapPin, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projecten & Voorbeelden | ExtensionsPlus",
  description: "Bekijk recente aanbouwen en kozijnprojecten met materialen, doorlooptijd en budgetrange.",
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Amsterdam — Uitbouw 3×3 m",
      subtitle: "Standaard afwerking",
      description: "EPDM dak, kunststof kozijnen, HR++",
      duration: "3 weken",
      budget: "€16.000–€19.000",
      materials: ["EPDM dak", "Kunststof kozijnen", "HR++ glas", "Standaard afwerking"],
      location: "Amsterdam",
      type: "Aanbouw",
      image: "/amsterdam-home-extension-with-epdm-roof-and-plasti.jpg",
    },
    {
      title: "Utrecht — Complete kozijnvervanging",
      subtitle: "Aluminium profielen, triple glas",
      description: "Volledige gevelrenovatie met moderne aluminium kozijnen",
      duration: "1 dag",
      budget: "€10.000–€13.000",
      materials: ["Aluminium profielen", "Triple glas", "Nieuwe dorpels", "Professionele montage"],
      location: "Utrecht",
      type: "Kozijnen",
      image: "/utrecht-house-with-new-aluminum-windows-and-triple.jpg",
    },
    {
      title: "Den Haag — Uitbouw keuken",
      subtitle: "Premium afwerking met lichtstraat",
      description: "Luxe keukenuitbouw met grote lichtstraat en schuifpui",
      duration: "4 weken",
      budget: "€28.000–€32.000",
      materials: ["Lichtstraat", "Schuifpui", "Premium afwerking", "Vloerverwarming"],
      location: "Den Haag",
      type: "Aanbouw",
      image: "/den-haag-luxury-kitchen-extension-with-skylight-an.jpg",
    },
    {
      title: "Rotterdam — Houten kozijnen renovatie",
      subtitle: "Authentieke houten kozijnen met HR++ glas",
      description: "Restauratie van monumentale houten kozijnen",
      duration: "2 dagen",
      budget: "€8.500–€11.000",
      materials: ["Houten kozijnen", "HR++ glas", "Authentieke beslag", "Schilderwerk"],
      location: "Rotterdam",
      type: "Kozijnen",
      image: "/rotterdam-historic-wooden-windows-renovation-with.jpg",
    },
    {
      title: "Haarlem — Aanbouw woonkamer",
      subtitle: "Casco uitvoering met toekomstplannen",
      description: "Betaalbare casco aanbouw voor latere eigen afwerking",
      duration: "2 weken",
      budget: "€14.000–€17.000",
      materials: ["Casco constructie", "EPDM dak", "Basis isolatie", "Ruwe aansluitingen"],
      location: "Haarlem",
      type: "Aanbouw",
      image: "/haarlem-casco-living-room-extension-ready-for-fut.jpg",
    },
    {
      title: "Eindhoven — Kunststof kozijnen",
      subtitle: "Energiezuinige vervanging hele woning",
      description: "Complete kozijnvervanging voor betere isolatie",
      duration: "1 dag",
      budget: "€12.000–€15.000",
      materials: ["Kunststof kozijnen", "HR++ glas", "Nieuwe ventilatie", "Kierdichting"],
      location: "Eindhoven",
      type: "Kozijnen",
      image: "/eindhoven-energy-efficient-upvc-windows-replaceme.jpg",
    },
  ]

  const filterTypes = ["Alle", "Aanbouw", "Kozijnen"]

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Projecten</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Echte voorbeelden met materialen, doorlooptijd en budgetrange. Zo weet je precies wat je kunt verwachten.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {filterTypes.map((type) => (
                <Button key={type} variant={type === "Alle" ? "default" : "outline"} size="sm">
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} - ${project.subtitle}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={project.type === "Aanbouw" ? "default" : "secondary"}>{project.type}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.subtitle}</CardDescription>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Doorlooptijd: {project.duration}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Euro className="h-3 w-3" />
                        Budget: {project.budget}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Materialen:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.materials.map((material, materialIndex) => (
                          <Badge key={materialIndex} variant="outline" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Bekijk details
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Geïnspireerd door onze projecten?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Laat ons weten wat u voor ogen heeft en ontvang binnen 24 uur een heldere prijsindicatie.
              </p>
            </div>
            <Button size="lg">Vraag uw offerte aan</Button>
          </div>
        </section>
      </main>
    </div>
  )
}
