import { Hero } from "@/components/homepage/hero"
import { Services } from "@/components/homepage/services"
import { Process } from "@/components/homepage/process"
import { ProjectsPreview } from "@/components/homepage/projects-preview"
import { Testimonials } from "@/components/homepage/testimonials"
import { FaqPreview } from "@/components/homepage/faq-preview"
import { FinalCta } from "@/components/homepage/final-cta"
import { CalculatorSection } from "@/components/calculator-section"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <CalculatorSection />
      <Process />
      <ProjectsPreview />
      <Testimonials />
      <FaqPreview />
      <FinalCta />
    </main>
  )
}
