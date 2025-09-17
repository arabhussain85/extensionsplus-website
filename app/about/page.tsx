import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Clock, Award, CheckCircle, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Over ExtensionsPlus | Betrouwbare Verbouwpartner",
  description: "Transparante prijzen, eigen teams en 10 jaar garantie. Maak kennis met ExtensionsPlus.",
}

export default function AboutPage() {
  const whyChooseUs = [
    {
      icon: Shield,
      title: "Transparante offertes",
      description: "Geen verrassingen achteraf",
    },
    {
      icon: Users,
      title: "Eigen montageteams",
      description: "Constante kwaliteit",
    },
    {
      icon: Clock,
      title: "Snelle doorlooptijd",
      description: "Minimale overlast",
    },
    {
      icon: Award,
      title: "10 jaar garantie",
      description: "Zekerheid op vakwerk",
    },
  ]

  const certifications = ["VCA gecertificeerd", "Volledig verzekerd", "BENG-normen", "Kwaliteitsgarantie"]

  const serviceAreas = ["Amsterdam", "Utrecht", "Den Haag", "Rotterdam", "Haarlem", "Eindhoven", "Almere", "Nijmegen"]

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Over ExtensionsPlus</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Wij maken verbouwen voorspelbaar: heldere prijzen, strakke planning en topafwerking door eigen teams.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Onze missie</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bij ExtensionsPlus geloven we dat verbouwen niet hoeft te stressen. Door transparante communicatie,
                  eerlijke prijzen en vakkundige uitvoering maken we van elk project een succes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Met meer dan 10 jaar ervaring in{" "}
                  <Link href="/extensions" className="text-primary hover:underline">
                    aanbouwen
                  </Link>{" "}
                  en{" "}
                  <Link href="/windows" className="text-primary hover:underline">
                    kozijnvervanging
                  </Link>{" "}
                  weten we precies wat er komt kijken bij een verbouwing. Van de eerste schets tot de eindoplevering:
                  wij begeleiden u door het hele proces.
                </p>
                <div className="pt-4">
                  <Button variant="outline" asChild>
                    <Link href="/projects">Bekijk onze projecten</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/construction-team-building-house-extension.jpg"
                  alt="ExtensionsPlus team aan het werk aan een aanbouw project"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Waarom klanten voor ons kiezen
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="text-center bg-background">
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <reason.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Werkgebied</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Heel Nederland met focus op Randstad en omgeving. Onze eigen montageteams zorgen voor constante
                  kwaliteit, waar u ook woont.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/netherlands-map-showing-extensionsplus-service.webp"
                  alt="Kaart van Nederland met ExtensionsPlus werkgebied"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground text-balance">
                Certificeringen & verzekering
              </h2>
              <p className="text-lg text-muted-foreground">
                We werken volgens de geldende normen en zijn volledig verzekerd.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-background text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{cert}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Onze waarden</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Betrouwbaarheid</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Afspraken nakomen en doen wat we beloven. Uw vertrouwen is ons belangrijkste bezit.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Kwaliteit</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vakmanschap staat voorop. We leveren alleen werk af waar we trots op zijn.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Transparantie</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Heldere communicatie en eerlijke prijzen. Geen verborgen kosten of onduidelijkheden.
                </p>
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Klaar om te beginnen?</h3>
                <p className="text-lg text-muted-foreground">Ontdek wat wij voor u kunnen betekenen.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Vraag offerte aan</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">Bekijk projecten</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
