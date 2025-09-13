import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacyverklaring | ExtensionsPlus",
  description: "Privacyverklaring van ExtensionsPlus over het gebruik van persoonsgegevens.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">Privacyverklaring</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Hoe ExtensionsPlus omgaat met uw persoonsgegevens.
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-background">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Welke gegevens verzamelen wij?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wij verzamelen alleen persoonsgegevens die noodzakelijk zijn voor het uitvoeren van onze diensten:
                  contactgegevens (naam, e-mail, telefoon), adresgegevens voor projectlocatie, en projectinformatie voor
                  offertes en uitvoering.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Doelen van gegevensverwerking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Uw gegevens gebruiken wij voor: het opstellen van offertes, projectcommunicatie en -uitvoering,
                  facturatie en administratie, en klantenservice en garantieafhandeling.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Rechtsgrond</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wij verwerken uw gegevens op basis van uw toestemming (bij contactformulieren), uitvoering van de
                  overeenkomst (bij projecten), en gerechtvaardigd belang (voor klantenservice).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Bewaartermijnen</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Contactgegevens bewaren wij maximaal 2 jaar na laatste contact. Projectgegevens bewaren wij 7 jaar
                  conform fiscale wetgeving. Garantiegegevens bewaren wij gedurende de garantieperiode plus 1 jaar.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Delen met derden</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wij delen uw gegevens alleen met verwerkers die ons helpen bij dienstverlening (zoals leveranciers
                  voor materialen) en alleen voor zover noodzakelijk voor projectuitvoering.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Beveiliging</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen
                  ongeautoriseerde toegang, verlies of misbruik.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Uw rechten</h2>
                <p className="text-muted-foreground leading-relaxed">
                  U heeft recht op inzage, rectificatie, verwijdering, beperking van verwerking,
                  gegevensoverdraagbaarheid en bezwaar. Neem contact op via privacy@extensionsplus.nl.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Voor vragen over deze privacyverklaring of uw gegevens kunt u contact opnemen via
                  privacy@extensionsplus.nl of +31 123 456 789.
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
