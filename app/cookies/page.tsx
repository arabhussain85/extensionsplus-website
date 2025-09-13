import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookieverklaring | ExtensionsPlus",
  description: "Cookieverklaring van ExtensionsPlus over het gebruik van cookies.",
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Cookieverklaring</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Informatie over het gebruik van cookies op onze website.
            </p>
          </div>
        </section>

        {/* Cookies Content */}
        <section className="py-20 bg-background">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Wat zijn cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website
                  bezoekt. Ze helpen ons de website te laten functioneren en uw ervaring te verbeteren.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Soorten cookies</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Functionele cookies</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Noodzakelijk voor het functioneren van de website, zoals het onthouden van uw voorkeuren en het
                      beveiligen van formulieren.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Analytische cookies</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Helpen ons begrijpen hoe bezoekers onze website gebruiken, zodat we deze kunnen verbeteren. Deze
                      gegevens worden anoniem verzameld.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Gebruikte tools</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wij gebruiken mogelijk Google Analytics voor websitestatistieken en andere tools voor
                  websiteprestaties. Deze tools respecteren uw privacy-instellingen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies beheren</h2>
                <p className="text-muted-foreground leading-relaxed">
                  U kunt cookies beheren via uw browserinstellingen. Let op: het uitschakelen van cookies kan de
                  functionaliteit van onze website beperken. Raadpleeg de help-functie van uw browser voor instructies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Voor vragen over cookies kunt u contact opnemen via info@extensionsplus.nl.
                </p>
              </div>

              <div className="text-sm text-muted-foreground border-t border-border pt-8">
                <p>Laatst bijgewerkt: December 2024</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
