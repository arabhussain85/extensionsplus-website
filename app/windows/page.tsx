import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppWindow as Window, Thermometer, Volume2, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kunststof, Houten & Aluminium Kozijnen | Prijzen & Offerte",
  description:
    "Kozijnen met HR++ of triple glas. Kunststof, hout of aluminium. Transparante prijzen en vakkundige montage. Vraag nu je offerte aan.",
  openGraph: {
    title: "Kunststof, Houten & Aluminium Kozijnen | ExtensionsPlus",
    description:
      "Kozijnen met HR++ of triple glas. Kunststof, hout of aluminium. Transparante prijzen en vakkundige montage.",
    images: ["/og-image.jpg"],
    url: "https://extensionswindowswebsite-m66d.vercel.app/windows",
  },
}

export default function WindowsPage() {
  const materials = [
    {
      name: "Kunststof (uPVC)",
      priceRange: "€500–900",
      description: "Onderhoudsarm, uitstekende isolatie, veel kleuren.",
      features: [
        "Onderhoudsarm",
        "Uitstekende isolatie",
        "Veel kleuropties",
        "Goede prijs-kwaliteit",
        "Lange levensduur",
      ],
      icon: Shield,
    },
    {
      name: "Hout",
      priceRange: "€700–1.100",
      description: "Authentieke uitstraling, eenvoudig te repareren, topisolatie met juiste beglazing.",
      features: [
        "Authentieke uitstraling",
        "Eenvoudig te repareren",
        "Natuurlijk materiaal",
        "Topisolatie mogelijk",
        "Duurzaam bij onderhoud",
      ],
      icon: Window,
      popular: true,
    },
    {
      name: "Aluminium",
      priceRange: "€800–1.300",
      description: "Slanke profielen, grote glasvlakken, modern.",
      features: ["Slanke profielen", "Grote glasvlakken", "Moderne uitstraling", "Zeer duurzaam", "Minimaal onderhoud"],
      icon: Thermometer,
    },
  ]

  const glazingOptions = [
    {
      name: "HR++",
      description: "Goede prijs‑kwaliteit, lage U‑waarde.",
      features: ["Dubbel glas", "Lage U-waarde", "Goede isolatie", "Betaalbaar"],
    },
    {
      name: "Triple",
      description: "Maximaal isolerend en geluidsdempend; ideaal bij renovatie met hoge energie‑eisen.",
      features: ["Driedubbel glas", "Maximale isolatie", "Geluidsdempend", "Energie-efficiënt"],
      premium: true,
    },
  ]

  const finishingOptions = [
    "Insectenhorren",
    "Screens/zonwering",
    "Ventilatieroosters",
    "Kierdichting",
    "Glaslatten in kleur",
    "Slagvaste dorpels",
  ]

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kozijnen & Ramen Services",
    description: "Professionele kozijnen en ramen in kunststof, hout en aluminium met HR++ of triple glas.",
    provider: {
      "@type": "Organization",
      name: "ExtensionsPlus",
      url: "https://extensionswindowswebsite-m66d.vercel.app",
      telephone: "+31123456789",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amsterdam",
        addressCountry: "NL",
      },
    },
    areaServed: "NL",
    serviceType: "Construction",
    offers: materials.map((material) => ({
      "@type": "Offer",
      name: `${material.name} Kozijnen`,
      description: material.description,
      priceRange: material.priceRange,
      priceCurrency: "EUR",
    })),
  }

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="bg-secondary/10 p-4 rounded-full">
                  <Window className="h-12 w-12 text-secondary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Kozijnen & Ramen — strak gemonteerd, beter geïsoleerd
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Kunststof, aluminium of hout met HR++ of triple glas. Ingemeten door vakmensen, netjes afgewerkt en snel
                geplaatst.
              </p>
            </div>
          </div>
        </section>

        {/* Materials & Pricing */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Materialen & indicatieve prijzen (per stuk)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {materials.map((material, index) => (
                <Card
                  key={index}
                  className={`relative ${material.popular ? "border-secondary shadow-lg scale-105" : "border-border"}`}
                >
                  {material.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-secondary text-secondary-foreground px-4 py-1">Populair</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        {material.icon && <material.icon className="h-8 w-8 text-secondary" />}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{material.name}</CardTitle>
                    <div className="text-3xl font-bold text-secondary">{material.priceRange}</div>
                    <CardDescription className="text-sm leading-relaxed">{material.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {material.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Glazing Options */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Beglazing</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {glazingOptions.map((option, index) => (
                <Card key={index} className={`bg-background ${option.premium ? "border-secondary" : "border-border"}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl">{option.name}</CardTitle>
                      {option.premium && <Badge variant="secondary">Premium</Badge>}
                    </div>
                    <CardDescription className="text-base leading-relaxed">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Finishing & Options */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Afwerking & opties</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {finishingOptions.map((option, index) => (
                <Card key={index} className="bg-muted border-border">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm font-medium">{option}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground text-balance">HR++ vs Triple Glas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Thermometer className="h-6 w-6 text-secondary" />
                    <CardTitle>HR++ Glas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">Ideaal voor standaard renovaties en nieuwbouw.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Goede isolatie
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Betaalbaar
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Lichter gewicht
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background border-secondary">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Volume2 className="h-6 w-6 text-secondary" />
                    <CardTitle>Triple Glas</CardTitle>
                    <Badge variant="secondary">Premium</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Maximale isolatie en geluiddemping voor optimaal comfort.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Maximale isolatie
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Geluidsdempend
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      Energie-efficiënt
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">Klaar voor nieuwe kozijnen?</h2>
              <p className="text-xl opacity-90 text-pretty">
                Vraag een vrijblijvende offerte aan en ontvang binnen 24 uur een heldere prijsindicatie.
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              asChild
            >
              <Link href="/contact">Offerte voor kozijnen aanvragen</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
