"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search, Phone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pagina niet gevonden | ExtensionsPlus",
  description: "De pagina die u zoekt bestaat niet. Ga terug naar de homepage of neem contact op.",
}

export default function NotFound() {
  const popularPages = [
    { href: "/", label: "Homepage", description: "Terug naar de startpagina" },
    { href: "/extensions", label: "Aanbouw & Uitbouw", description: "Informatie over aanbouwen" },
    { href: "/windows", label: "Kozijnen & Ramen", description: "Kozijnen en ramen vervangen" },
    { href: "/projects", label: "Projecten", description: "Bekijk onze recente projecten" },
    { href: "/contact", label: "Contact", description: "Neem contact met ons op" },
  ]

  return (
    <div className="min-h-screen">
      <main>
        {/* 404 Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-muted-foreground">404</h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Pagina niet gevonden</h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
                De pagina die u zoekt bestaat niet of is verplaatst. Geen zorgen, we helpen u graag verder.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2" asChild>
                <Link href="/">
                  <Home className="h-5 w-5" />
                  Naar homepage
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-transparent"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5" />
                Ga terug
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Pages */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Populaire pagina's</h3>
              <p className="text-lg text-muted-foreground">Misschien vindt u hier wat u zoekt:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularPages.map((page, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Link href={page.href} className="block space-y-2">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {page.label}
                      </h4>
                      <p className="text-sm text-muted-foreground">{page.description}</p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">Hulp nodig?</h3>
              <p className="text-lg text-muted-foreground text-pretty">
                Kunt u niet vinden wat u zoekt? Neem direct contact op voor persoonlijk advies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flex items-center gap-2" asChild>
                <Link href="/contact">
                  <Search className="h-5 w-5" />
                  Contact opnemen
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent" asChild>
                <Link href="tel:+31123456789">
                  <Phone className="h-5 w-5" />
                  Direct bellen
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
