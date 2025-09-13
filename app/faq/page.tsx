import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | ExtensionsPlus",
  description: "Antwoorden op vragen over aanbouw, kozijnen, vergunningen, planning en garantie.",
  openGraph: {
    title: "Veelgestelde Vragen | ExtensionsPlus",
    description: "Antwoorden op vragen over aanbouw, kozijnen, vergunningen, planning en garantie.",
    images: ["/og-image.jpg"],
    url: "https://extensionswindowswebsite-m66d.vercel.app/faq",
  },
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Hoe snel kunnen jullie starten?",
      answer:
        "Meestal binnen 4–8 weken na akkoord, afhankelijk van materialen en eventuele vergunningen. We plannen strak en houden u op de hoogte van de voortgang.",
    },
    {
      question: "Heb ik een vergunning nodig voor een uitbouw?",
      answer:
        "Dat hangt af van afmetingen, ligging en bestemmingsplan. Wij doen de check en kunnen de aanvraag verzorgen. Voor de meeste uitbouwen tot 40m² is geen vergunning nodig, maar we controleren dit altijd voor u.",
    },
    {
      question: "Wat is het verschil tussen casco, standaard en premium?",
      answer:
        "Casco = ruwbouw wind‑ en waterdicht met basisdak en ruwe aansluitingen. Standaard = inclusief isolatie, binnenwanden, afwerkvloer en elektra. Premium = hoogwaardige afwerking, maatwerk deuren/kozijnen en uitgebreide elektra.",
    },
    {
      question: "HR++ of triple glas: wat kies ik?",
      answer:
        "Triple isoleert het best en dempt geluid extra, maar is zwaarder en kostbaarder. HR++ is lichter en voordeliger met goede isolatie. We adviseren per gevel, budget en uw wensen.",
    },
    {
      question: "Welke garantie krijg ik?",
      answer:
        "10 jaar garantie op constructie en montage. Materialen vallen onder fabrieksgarantie. We hebben een duidelijke garantieregeling en snelle service bij eventuele problemen.",
    },
    {
      question: "Verzorgen jullie sloop/afvoer?",
      answer:
        "Ja, we regelen stofarm slopen en nette afvoer van alle materialen. Dit is inbegrepen in onze offerte, zodat u zich geen zorgen hoeft te maken over de rommel.",
    },
    {
      question: "Helpen jullie met ontwerp/tekeningen?",
      answer:
        "Ja, wij leveren (waar nodig) tekeningen voor vergunning en uitvoering. Ons team heeft ervaring met gemeentelijke procedures en zorgt voor complete dossiers.",
    },
    {
      question: "Kan ik financieren of in termijnen betalen?",
      answer:
        "Bespreekbaar; we denken mee en leveren heldere betalingsmijlpalen. Meestal werken we met een aanbetaling, tussentijdse betalingen en eindbetaling bij oplevering.",
    },
    {
      question: "Werken jullie met vaste prijs?",
      answer:
        "Ja, op basis van duidelijke specificaties geven we een vaste prijs. Opties of wijzigingen bespreken we vooraf met transparante meerkosten.",
    },
    {
      question: "Hoe lang duurt een uitbouw?",
      answer:
        "Gemiddeld 2–4 weken uitvoering na voorbereiding en materiaallevering. Kleinere projecten kunnen sneller, grotere projecten iets langer. We maken altijd een realistische planning.",
    },
    {
      question: "Leveren jullie ook in weekends?",
      answer:
        "In overleg mogelijk, vooral voor spoedklussen. Omwonenden worden tijdig geïnformeerd. We houden rekening met rust- en werktijden in woonwijken.",
    },
    {
      question: "Wat als er service nodig is na oplevering?",
      answer:
        "We hebben een vaste serviceprocedure met duidelijke responstijden. Voor garantiezaken reageren we binnen 48 uur, voor spoedeisende zaken binnen 24 uur.",
    },
  ]

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Veelgestelde vragen</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Antwoorden op de meest gestelde vragen over aanbouw, kozijnen, vergunningen en ons werkproces.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Nog vragen?</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Neem contact op voor persoonlijk advies of een vrijblijvende offerte.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" asChild>
                <Link href="/contact">Neem contact op</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent" asChild>
                <Link href="tel:+31123456789">Bel ons direct</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
