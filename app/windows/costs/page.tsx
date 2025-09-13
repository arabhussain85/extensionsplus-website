import type { Metadata } from "next"
import WindowCostsClientPage from "./WindowCostsClientPage"

export const metadata: Metadata = {
  title: "Kozijnen Prijs | Calculator Kunststof, Hout & Aluminium",
  description:
    "Bereken direct de prijs voor nieuwe kozijnen met HR++ of triple glas. Vraag daarna je definitieve offerte aan.",
}

export default function WindowCostsPage() {
  return <WindowCostsClientPage />
}
