import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const ArrowRightIcon = () => (
  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
)

export function FaqPreview() {
  const faqs = [
    {
      question: "Hoe snel kunnen jullie starten?",
      answer: "Vaak binnen 4–8 weken na akkoord, afhankelijk van materiaalbeschikbaarheid en vergunningen.",
    },
    {
      question: "Heb ik een vergunning nodig voor een uitbouw?",
      answer:
        "Dat hangt af van afmetingen en situering. We doen standaard een vergunningcheck en begeleiden de aanvraag.",
    },
    {
      question: "Wat is het verschil tussen HR++ en triple glas?",
      answer:
        "Triple isoleert beter en dempt geluid extra, maar is zwaarder en iets kostbaarder. We adviseren per situatie.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Veelgestelde vragen</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/faq">
              Alle vragen bekijken
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
