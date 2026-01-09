import Link from "next/link"
import Badge from "@/components/atoms/Badge/Badge"
import { Bed, Bath, Square } from "lucide-react"
import styles from "./propertyCard.module.scss"
import Image from "next/image"
import 'flag-icons/css/flag-icons.min.css';

export default function PropertyCard({ property }) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price)

  const COUNTRY_FLAGS = {
    'Argentina': 'ar',
    'Brasil': 'br',
    'Uruguay': 'uy',
    'Paraguay': 'py',
    'Chile': 'cl',
    // Agregá los que necesites
  };

  return (
    <Link href={`/properties/${property.slug}`} className={styles.property__card}>

      <div className={styles.property__card__image}>
        <Image src={property.image} alt={property.title} width={400} height={300} />
        <div className={styles.property__card__badge}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {property.featured && (
              <Badge type={'primary'}>Exclusiva</Badge>
            )}
            <Badge type={"secondary"}>{property.type}</Badge>
          </div>
          <span className={`fi fi-${COUNTRY_FLAGS[property.country]}`}></span>
        </div>
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
