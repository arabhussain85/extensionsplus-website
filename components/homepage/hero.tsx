import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const ShieldIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const AwardIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 lg:py-32" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">Bouwen zonder gedoe</h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Hoogwaardige aanbouwen en kozijnen met eigen montageteams, heldere prijzen en snelle doorlooptijden.
              </p>
            </div>

            {/* USP Badges */}
            <ul className="flex flex-wrap gap-3" role="list" aria-label="Belangrijkste voordelen">
              <li>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-2 text-white">
                  <ShieldIcon />
                  <span>10 jaar garantie</span>
                </Badge>
              </li>
              <li>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-2 text-white">
                  <AwardIcon />
                  <span>Gecertificeerd & verzekerd</span>
                </Badge>
              </li>
              <li>
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-2 text-white">
                  <TrendingUpIcon />
                  <span>Transparante prijzen</span>
                </Badge>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/contact">Offerte aanvragen</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 text-lg px-8 bg-transparent"
                asChild
              >
                <Link href="tel:+31123456789" aria-label="Bel ExtensionsPlus op +31 123 456 789">
                  <PhoneIcon />
                  <span className="sr-only">Telefoonnummer: </span>
                  Bel ons
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">Binnen 24 uur een heldere prijsindicatie.</p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="/modern-home-extension-with-large-windows.jpg"
              alt="Moderne aanbouw met grote ramen en professionele afwerking"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div
              className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg"
              role="complementary"
              aria-label="Eigen montageteams informatie"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full" aria-hidden="true">
                  <UsersIcon />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Eigen montageteams</div>
                  <div className="text-sm text-muted-foreground">Constante kwaliteit</div>
                </div>
              </div>
            </div>
            <div
              className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-lg"
              role="complementary"
              aria-label="Snelle levering informatie"
            >
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-2 rounded-full" aria-hidden="true">
                  <ClockIcon />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Snel leverbaar</div>
                  <div className="text-sm text-muted-foreground">Minimale overlast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
