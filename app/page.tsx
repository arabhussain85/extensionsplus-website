import { Hero } from "@/components/homepage/hero"
import { Services } from "@/components/homepage/services"
import { Process } from "@/components/homepage/process"
import { ProjectsPreview } from "@/components/homepage/projects-preview"
import { Testimonials } from "@/components/homepage/testimonials"
import { FaqPreview } from "@/components/homepage/faq-preview"
import { FinalCta } from "@/components/homepage/final-cta"
import { CalculatorSection } from "@/components/calculator-section"
import { ImageGallery } from "@/components/image-gallery"
import { BeforeAfterShowcase } from "@/components/before-after-showcase"

export default function HomePage() {
  const extensionGalleryImages = [
    {
      src: "/modern-home-extension-with-glass-doors.jpg",
      alt: "Moderne aanbouw met glazen schuifdeuren",
      title: "Glazen schuifdeuren",
      category: "Aanbouw",
    },
    {
      src: "/kitchen-extension-with-skylight.jpg",
      alt: "Keukenuitbouw met lichtstraat",
      title: "Keukenuitbouw",
      category: "Aanbouw",
    },
    {
      src: "/aluminum-window-frames-installation.jpg",
      alt: "Aluminium kozijnen installatie",
      title: "Aluminium kozijnen",
      category: "Kozijnen",
    },
    {
      src: "/wooden-window-frames-restoration.jpg",
      alt: "Houten kozijnen restauratie",
      title: "Houten kozijnen",
      category: "Kozijnen",
    },
    {
      src: "/side-return-extension-construction.jpg",
      alt: "Zijuitbouw in aanbouw",
      title: "Zijuitbouw",
      category: "Aanbouw",
    },
    {
      src: "/upvc-windows-energy-efficient.jpg",
      alt: "Energiezuinige kunststof kozijnen",
      title: "Kunststof kozijnen",
      category: "Kozijnen",
    },
  ]

  const beforeAfterProjects = [
    {
      title: "Victoriaanse woning uitbreiding",
      location: "Amsterdam",
      beforeImage: "/old-victorian-house-back-garden-before-extension.jpg",
      afterImage: "/victorian-house-with-modern-glass-extension-comple.jpg",
      description: "Complete transformatie van een Victoriaanse woning met moderne glazen uitbouw.",
      improvements: ["Meer woonruimte", "Natuurlijk licht", "Moderne afwerking", "Energiezuinig"],
    },
    {
      title: "Jaren '30 woning kozijnvervanging",
      location: "Utrecht",
      beforeImage: "/1930s-house-with-old-wooden-windows-before-renovat.jpg",
      afterImage: "/1930s-house-with-new-aluminum-windows-after-renova.jpg",
      description: "Volledige kozijnvervanging van een jaren '30 woning voor betere isolatie.",
      improvements: ["Betere isolatie", "Lagere energiekosten", "Moderne uitstraling", "Onderhoudsvrij"],
    },
  ]

  return (
    <main>
      <Hero />
      <Services />
      <CalculatorSection />
      <Process />
      <ProjectsPreview />
      <ImageGallery
        title="Onze Specialiteiten"
        subtitle="Van moderne aanbouwen tot traditionele kozijnrestauratie - bekijk onze vakmanschap in beeld."
        images={extensionGalleryImages}
      />
      <BeforeAfterShowcase projects={beforeAfterProjects} />
      <Testimonials />
      <FaqPreview />
      <FinalCta />
    </main>
  )
}
