import { Card, CardContent } from "@/components/ui/card"

const StarIcon = () => (
  <svg className="h-5 w-5 fill-primary text-primary" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export function Testimonials() {
  const testimonials = [
    {
      quote: "Strak gepland en keurig opgeleverd. Duidelijke communicatie.",
      author: "J. de Vries",
      location: "Amsterdam",
    },
    {
      quote: "Transparante prijs en afspraken. Zeer professioneel team.",
      author: "M. Janssen",
      location: "Utrecht",
    },
    {
      quote: "Van advies tot oplevering top geregeld. Aanrader!",
      author: "P. van den Berg",
      location: "Rotterdam",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground text-balance">Wat klanten zeggen</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="text-sm text-muted-foreground">
                  — {testimonial.author}, {testimonial.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
