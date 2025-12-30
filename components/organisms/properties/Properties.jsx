import PropertyCard from "@/components/molecules/propertyCard/PropertyCard"
import Button from "@/components/atoms/Button"
import styles from "./properties.module.scss"
import property from '../../../assets/contemporary-home-with-mountain-views.jpg'
import { COUNTRIES } from "../../../constants/constants"

const SAMPLE_PROPERTIES = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    location: "Manhattan, NY",
    price: 2850000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2400,
    image: property,
    featured: true,
    type: 'Venta',
    country: COUNTRIES.ARGENTINA,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: 2,
    title: "Waterfront Villa",
    location: "Miami Beach, FL",
    price: 4500000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4200,
    image: property,
    featured: true,
    type: 'Alquiler',
    country: COUNTRIES.ARGENTINA,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: 3,
    title: "Contemporary Family Home",
    location: "Los Angeles, CA",
    price: 3200000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3500,
    image: property,
    featured: true,
    type: 'Venta',
    country: COUNTRIES.ARGENTINA,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
  {
    id: 4,
    title: "Historic Townhouse",
    location: "Brooklyn, NY",
    price: 1950000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2800,
    image: property,
    featured: true,
    type: 'Venta',
    country: COUNTRIES.ARGENTINA,
    description: "Description It is a long established fact that a reader will be distrac by any websites look for ways prevent AdBlock from blocking annoying ads. As a result, we've focused on improving our funct so that we can overcome these anti-ad blocking attempts. Of course, you can help us continue to improve our ad blocking ability by reporting any time you run into a website that won't allow you to block the readable content of a page when looking at its layout. It is a long established fact"
  },
]

export default function FeaturedProperties() {
  return (
    <section className={styles.featured__properties}>

      <div className={styles.featured__properties__header}>
        <div>
          <h2 className={styles.featured__properties__title}>Propiedades Exclusivas</h2>
          <p className={styles.featured__properties__description}>
            Se el primero en ver anuncios exclusivos antes de que salgan al mercado.
          </p>
        </div>
        <div className="d-none d-md-block">
          <Button variant="outline">Vea todas nuestras propiedades</Button>
        </div>
      </div>

      <div className={styles.featured__properties__grid}>
        {SAMPLE_PROPERTIES.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
