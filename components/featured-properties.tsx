import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"

// Sample property data - in production, this would come from WordPress REST API
const SAMPLE_PROPERTIES = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    location: "Manhattan, NY",
    price: 2850000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    image: "/modern-loft-interior-with-city-views.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Waterfront Villa",
    location: "Miami Beach, FL",
    price: 4500000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    image: "/luxury-waterfront-villa.png",
    featured: true,
  },
  {
    id: 3,
    title: "Contemporary Family Home",
    location: "Los Angeles, CA",
    price: 3200000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3500,
    image: "/contemporary-home-with-mountain-views.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Historic Townhouse",
    location: "Brooklyn, NY",
    price: 1950000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2800,
    image: "/historic-brooklyn-townhouse.jpg",
    featured: true,
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-3">Premier Exclusives</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Be the first to browse exclusive listings before they hit the market.
            </p>
          </div>
          <Button variant="outline" className="hidden md:inline-flex bg-transparent">
            View All Properties
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="w-full bg-transparent">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
