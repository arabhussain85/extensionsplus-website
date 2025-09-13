import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const HomeIcon = () => (
  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)

const WindowIcon = () => (
  <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Onze diensten</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Van slimme extra woonruimte tot energiezuinige kozijnen: we regelen alles van ontwerp tot montage, strak
            volgens planning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Aanbouw & Uitbouw */}
          <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <HomeIcon />
                </div>
                <CardTitle className="text-2xl">Aanbouw & Uitbouw</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Creëer extra leefruimte met een aanbouw of uitbouw op maat. Keuze uit casco, standaard of premium
                afwerking — inclusief vergunningcheck en projectbegeleiding.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div>
                <Badge variant="outline" className="mb-3">
                  Indicatieve m²‑prijzen
                </Badge>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Casco</span>
                    <span className="font-medium">€1.200–1.600 /m²</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Standaard</span>
                    <span className="font-medium">€1.600–2.100 /m²</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Premium</span>
                    <span className="font-medium">€2.100–2.600 /m²</span>
                  </li>
                </ul>
              </div>
              <Button className="w-full group-hover:bg-primary/90 transition-colors" asChild>
                <Link href="/extensions">
                  Bekijk aanbouwen
                  <ArrowRightIcon />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Kozijnen & Ramen */}
          <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <WindowIcon />
                </div>
                <CardTitle className="text-2xl">Kozijnen & Ramen</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed">
                Kunststof, aluminium of hout met HR++ of triple glas. Perfect ingemeten, netjes afgewerkt en vakkundig
                gemonteerd.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div>
                <Badge variant="outline" className="mb-3">
                  Indicatieve stuksprijzen
                </Badge>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Kunststof (uPVC)</span>
                    <span className="font-medium">€500–900</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hout</span>
                    <span className="font-medium">€700–1.100</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Aluminium</span>
                    <span className="font-medium">€800–1.300</span>
                  </li>
                </ul>
              </div>
              <Button variant="secondary" className="w-full group-hover:bg-secondary/90 transition-colors" asChild>
                <Link href="/windows">
                  Bekijk kozijnen
                  <ArrowRightIcon />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
