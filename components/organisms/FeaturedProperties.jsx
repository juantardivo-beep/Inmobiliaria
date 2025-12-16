import PropertyCard from "@/components/molecules/PropertyCard"
import Button from "@/components/atoms/Button"

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

export default function FeaturedProperties() {
  return (
    <section className="featured-properties">
      <div className="container">
        <div className="featured-properties__header">
          <div>
            <h2 className="featured-properties__title">Premier Exclusives</h2>
            <p className="featured-properties__description">
              Be the first to browse exclusive listings before they hit the market.
            </p>
          </div>
          <div className="d-none d-md-block">
            <Button variant="outline">View All Properties</Button>
          </div>
        </div>

        <div className="featured-properties__grid">
          {SAMPLE_PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-4 d-md-none text-center">
          <Button variant="outline" className="w-100 bg-transparent">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
