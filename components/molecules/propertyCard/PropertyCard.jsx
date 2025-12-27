import Link from "next/link"
import Badge from "@/components/atoms/Badge/Badge"
import { Bed, Bath, Square } from "lucide-react"
import styles from "./propertyCard.module.scss"
import Image from "next/image"

export default function PropertyCard({ property }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price)

  return (
    <Link href={`/properties/${property.id}`} className={styles.property__card}>

      <div className={styles.property__card__image}>
        <Image src={`${property.image}`} alt={property.title} width={400} height={300}/>
        {property.featured && (
          <div className={styles.property__card__badge}>
            <Badge>Exclusiva</Badge>
          </div>
        )}
      </div>


      <div className={styles.property__card__content}>

        <h3 className={styles.property__card__title}>{property.title}</h3>
        <p className={styles.property__card__location}>{property.location}</p>
        <p className={styles.property__card__price}>{formattedPrice}</p>


        <div className={styles.property__card__features}>
          <div className={styles.feature}>
            <Bed size={16} />
            <span>{property.bedrooms}</span>
          </div>
          <div className={styles.feature}>
            <Bath size={16} />
            <span>{property.bathrooms}</span>
          </div>
          <div className={styles.feature}>
            <Square size={16} />
            <span>{property.sqft.toLocaleString()} mts</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
