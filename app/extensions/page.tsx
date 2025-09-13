import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Shield, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aanbouw & Uitbouw Kosten per m² | ExtensionsPlus",
  description:
    "Aanbouw of uitbouw nodig? Casco, standaard of premium. Transparante m²‑prijzen, snelle doorlooptijd en 10 jaar garantie. Vraag een offerte aan.",
  openGraph: {
    title: "Aanbouw & Uitbouw Kosten per m² | ExtensionsPlus",
    description:
      "Aanbouw of uitbouw nodig? Casco, standaard of premium. Transparante m²‑prijzen, snelle doorlooptijd en 10 jaar garantie.",
    images: ["/og-image.jpg"],
    url: "https://extensionswindowswebsite-m66d.vercel.app/extensions",
  },
}

export default function ExtensionsPage() {
  const packages = [
    {
      name: "Casco",
      priceRange: "€1.200–1.600 /m²",
      description: "Fundering/skelet, buitenschil wind‑ en waterdicht, basisdak (bv. EPDM), ruwe aansluitingen.",
      features: ["Fundering en skelet", "Buitenschil wind- en waterdicht", "Basisdak (EPDM)", "Ruwe aansluitingen"],
    },
    {
      name: "Standaard",
      priceRange: "€1.600–2.100 /m²",
      description: "Inclusief isolatie, binnenwanden, afwerkvloer, standaard elektra en stucwerk.",
      features: [
        "Alles van Casco",
        "Isolatie volgens BENG-eisen",
        "Binnenwanden",
        "Afwerkvloer",
        "Standaard elektra",
        "Stucwerk",
      ],
      popular: true,
    },
    {
      name: "Premium",
      priceRange: "€2.100–2.600 /m²",
      description: "Hoogwaardige afwerking, maatwerk deuren/kozijnen, lichtstraat/spotjes, uitgebreide elektra.",
      features: [
        "Alles van Standaard",
        "Hoogwaardige afwerking",
        "Maatwerk deuren/kozijnen",
        "Lichtstraat/spotjes",
        "Uitgebreide elektra",
        "Premium materialen",
      ],
    },
  ]

  const materials = [
    { category: "Dak", options: "Plat (EPDM), schuin (bitumen/pannen)" },
    { category: "Licht", options: "Lichtkoepel, lichtstraat, schuifpui" },
    { category: "Isolatie", options: "PIR/glaswol volgens BENG‑eisen" },
    { category: "Gevel", options: "Keralit, Trespa, metselwerk" },
    { category: "Kozijnen", options: "Kunststof/alu/hout" },
  ]

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aanbouw & Uitbouw Services",
    description: "Professionele aanbouw en uitbouw services met transparante prijzen en 10 jaar garantie.",
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
    offers: packages.map((pkg) => ({
      "@type": "Offer",
      name: `${pkg.name} Aanbouw`,
      description: pkg.description,
      priceRange: pkg.priceRange,
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
                <div className="bg-primary/10 p-4 rounded-full">
                  <Home className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Aanbouw & Uitbouw — extra ruimte, slim gerealiseerd
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Meer leefruimte voor keuken, eetkamer of werkplek. Van casco tot premium afwerking, met vergunningcheck,
                vaste prijsafspraken en eigen uitvoering.
              </p>
            </div>
          </div>
        </section>

        {/* Packages & Pricing */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Pakketten & prijzen (indicatief per m²)
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative ${pkg.popular ? "border-primary shadow-lg scale-105" : "border-border"}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1">Meest gekozen</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{pkg.priceRange}</div>
                    <CardDescription className="text-sm leading-relaxed">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
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

        {/* Materials & Options */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Opties & materialen</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <Card key={index} className="bg-background">
                  <CardHeader>
                    <CardTitle className="text-lg">{material.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{material.options}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Planning & Timeline */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Planning & doorlooptijd</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Gemiddeld 2–4 weken uitvoering na productie/vergunning. Wij plannen strak en houden overlast minimaal.
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">Minimale overlast tijdens uitvoering</span>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Garantie & nazorg</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  10 jaar garantie op constructie en montage. Heldere opleverpunten en service achteraf.
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium">10 jaar garantie op vakwerk</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="sticky bottom-0 z-40 py-6 bg-primary text-primary-foreground border-t border-primary-foreground/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-balance">Klaar voor uw aanbouw?</h2>
              <p className="text-lg opacity-90 text-pretty">
                Vraag een vrijblijvende offerte aan en ontvang binnen 24 uur een heldere prijsindicatie.
              </p>
            </div>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/contact">Offerte voor aanbouw aanvragen</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
