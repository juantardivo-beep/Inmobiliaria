import Link from "next/link"
import Badge from "@/components/atoms/Badge"
import { Bed, Bath, Square } from "lucide-react"

export default function PropertyCard({ property }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price)

  return (
    <Link href={`/properties/${property.id}`} className="property-card">
      <div className="property-card__image">
        <img src={property.image || "/placeholder.svg"} alt={property.title} />
        {property.featured && (
          <div className="property-card__badge">
            <Badge>Exclusive</Badge>
          </div>
        )}
      </div>
      <div className="property-card__content">
        <h3 className="property-card__title">{property.title}</h3>
        <p className="property-card__location">{property.location}</p>
        <p className="property-card__price">{formattedPrice}</p>
        <div className="property-card__features">
          <div className="feature">
            <Bed size={16} />
            <span>{property.bedrooms}</span>
          </div>
          <div className="feature">
            <Bath size={16} />
            <span>{property.bathrooms}</span>
          </div>
          <div className="feature">
            <Square size={16} />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
