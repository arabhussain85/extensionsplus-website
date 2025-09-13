import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reviews | ExtensionsPlus",
  description: "Lees ervaringen van klanten over aanbouw en kozijnen door ExtensionsPlus.",
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: "L. Bakker",
      location: "Den Haag",
      rating: 5,
      project: "Aanbouw keuken",
      review: "Vakwerk, nette afwerking en strak op tijd. Het team was professioneel en hield de werkplek netjes.",
      date: "November 2024",
    },
    {
      name: "E. Visser",
      location: "Haarlem",
      rating: 5,
      project: "Kozijnvervanging",
      review:
        "Prima prijs‑kwaliteit en prettig contact. Alles werd duidelijk uitgelegd en de montage was snel geregeld.",
      date: "Oktober 2024",
    },
    {
      name: "S. van Dijk",
      location: "Utrecht",
      rating: 5,
      project: "Uitbouw woonkamer",
      review: "Heldere afspraken, fijne monteurs. Van begin tot eind goed begeleid en het resultaat is prachtig.",
      date: "September 2024",
    },
    {
      name: "J. de Vries",
      location: "Amsterdam",
      rating: 5,
      project: "Aanbouw",
      review: "Strak gepland en keurig opgeleverd. Duidelijke communicatie gedurende het hele proces.",
      date: "Augustus 2024",
    },
    {
      name: "M. Janssen",
      location: "Utrecht",
      rating: 5,
      project: "Kozijnen",
      review: "Transparante prijs en afspraken. Zeer professioneel team dat weet wat ze doen.",
      date: "Juli 2024",
    },
    {
      name: "P. van den Berg",
      location: "Rotterdam",
      rating: 5,
      project: "Uitbouw",
      review: "Van advies tot oplevering top geregeld. Aanrader voor iedereen die een betrouwbare aannemer zoekt!",
      date: "Juni 2024",
    },
    {
      name: "R. Smit",
      location: "Almere",
      rating: 5,
      project: "Kozijnvervanging",
      review: "Snelle service en vakkundige montage. De nieuwe kozijnen maken echt verschil in isolatie.",
      date: "Mei 2024",
    },
    {
      name: "A. Koning",
      location: "Eindhoven",
      rating: 5,
      project: "Aanbouw",
      review: "Eerlijke prijzen en geen gedoe. Het team werkte netjes en hield zich aan de planning.",
      date: "April 2024",
    },
  ]

  const averageRating = 5.0
  const totalReviews = reviews.length

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Klantbeoordelingen</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Eerlijke feedback van klanten door heel Nederland.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-lg font-semibold">
                {averageRating} van 5 ({totalReviews} reviews)
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 space-y-4 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <Badge variant="outline">{review.project}</Badge>
                    </div>
                    <blockquote className="text-foreground leading-relaxed flex-grow">"{review.review}"</blockquote>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <span>{review.name}</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {review.location}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">{review.date}</div>
                    </div>
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
                Wordt u onze volgende tevreden klant?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Ervaar zelf waarom klanten ons aanbevelen. Vraag een vrijblijvende offerte aan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Offerte aanvragen</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent" asChild>
                <Link href="tel:+31123456789">Bel voor advies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
