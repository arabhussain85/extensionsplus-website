import ExtensionCostsClientPage from "./ExtensionCostsClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aanbouw Kosten per m² | Calculator & Offerte",
  description: "Bereken de kosten van je aanbouw of uitbouw en ontvang binnen 24 uur een heldere prijsindicatie.",
}

export default function ExtensionCostsPage() {
  return <ExtensionCostsClientPage />
}
