import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const ClockIcon = () => (
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

const EuroIcon = () => (
  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
)

export function ProjectsPreview() {
  const projects = [
    {
      title: "Amsterdam — Uitbouw 3×3 m",
      description: "Standaard afwerking",
      details: "EPDM dak, kunststof kozijnen, HR++",
      duration: "3 weken",
      budget: "€16.000–€19.000",
      image: "/amsterdam-home-extension-with-epdm-roof-and-plasti.jpg",
    },
    {
      title: "Utrecht — Complete kozijnvervanging",
      description: "Aluminium profielen, triple glas",
      details: "Volledige gevelrenovatie",
      duration: "1 dag",
      budget: "€10.000–€13.000",
      image: "/utrecht-house-with-new-aluminum-windows-and-triple.jpg",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Recente projecten</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Bekijk voorbeelden met doorlooptijd, materialen en prijsrange.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
                <p className="text-sm text-muted-foreground">{project.details}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <ClockIcon />
                    Doorlooptijd: {project.duration}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <EuroIcon />
                    Budget: {project.budget}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">
              Alle projecten
              <ArrowRightIcon />
            </Link>
          </Button>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ghost" asChild>
              <Link href="/extensions" className="text-primary hover:text-primary/80">
                Meer over aanbouwen →
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/windows" className="text-primary hover:text-primary/80">
                Meer over kozijnen →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
