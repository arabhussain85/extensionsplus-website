import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCta() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Klaar om te starten?</h2>
          <p className="text-xl opacity-90 text-pretty">
            Vraag vandaag nog een vrijblijvende offerte aan of plan een gratis adviesgesprek.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="/contact">Offerte aanvragen</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            asChild
          >
            <Link href="/contact">Gratis adviesgesprek</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
