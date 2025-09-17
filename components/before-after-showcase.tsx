import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BeforeAfterProject {
  title: string
  location: string
  beforeImage: string
  afterImage: string
  description: string
  improvements: string[]
}

interface BeforeAfterShowcaseProps {
  projects: BeforeAfterProject[]
}

export function BeforeAfterShowcase({ projects }: BeforeAfterShowcaseProps) {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Voor & Na Transformaties</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Zie hoe wij woningen transformeren met professionele aanbouwen en kozijnvervanging.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{project.location}</Badge>
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-center">Voor</h4>
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={project.beforeImage || "/placeholder.svg"}
                        alt={`${project.title} - Voor`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium text-center">Na</h4>
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={project.afterImage || "/placeholder.svg"}
                        alt={`${project.title} - Na`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Verbeteringen:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.improvements.map((improvement, improvementIndex) => (
                      <Badge key={improvementIndex} variant="outline">
                        {improvement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
