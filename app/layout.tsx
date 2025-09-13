import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aanbouw & Kozijnen op Maat | ExtensionsPlus — 10 Jaar Garantie",
  description:
    "Aanbouw, uitbouw en kozijnen met transparante prijzen, eigen montageteams en 10 jaar garantie. Binnen 24 uur een heldere prijsindicatie.",
  generator: "ExtensionsPlus",
  openGraph: {
    title: "ExtensionsPlus — Bouwen zonder gedoe",
    description: "Aanbouw, uitbouw en kozijnen met transparante prijzen en 10 jaar garantie.",
    images: ["/og-image.jpg"],
    url: "https://extensionswindowswebsite-m66d.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ExtensionsPlus — Bouwen zonder gedoe",
    description: "Aanbouw, uitbouw en kozijnen met transparante prijzen en 10 jaar garantie.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="canonical" href="https://extensionswindowswebsite-m66d.vercel.app/" />
        <link rel="alternate" hrefLang="nl-NL" href="https://extensionswindowswebsite-m66d.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "ExtensionsPlus",
              url: "https://extensionswindowswebsite-m66d.vercel.app/",
              telephone: "+31 123 456 789",
              email: "info@extensionsplus.nl",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Amsterdam",
                addressCountry: "NL",
              },
              areaServed: "NL",
              openingHours: "Mo-Fr 08:00-17:30, Sa 09:00-13:00",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
