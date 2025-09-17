import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface GalleryImage {
  src: string
  alt: string
  title: string
  category: string
}

interface ImageGalleryProps {
  title: string
  subtitle?: string
  images: GalleryImage[]
  className?: string
}

export function ImageGallery({ title, subtitle, images, className = "" }: ImageGalleryProps) {
  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">{title}</h2>
          {subtitle && <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm text-foreground">{image.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {image.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
