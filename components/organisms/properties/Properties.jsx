import PropertyCard from "@/components/molecules/propertyCard/PropertyCard"
import Button from "@/components/atoms/Button"
import styles from "./properties.module.scss"
import { getProperties, transformWordPressProperty } from "../../../lib/wordpress-api"

export default async function FeaturedProperties() {

  const wpProperties = await getProperties({ perPage: 4 })
  const properties = wpProperties
    .filter(property => property.acf?.featured === true)
    .map(transformWordPressProperty)

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
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
