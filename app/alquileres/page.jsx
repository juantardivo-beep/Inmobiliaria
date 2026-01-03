"use client"
import PropertyVisualizer from "../../components/organisms/propertyVisualizer/PropertyVisualizer"
import PropertyFilter from "../../components/molecules/filter/PropertyFilter"
import GoogleMaps from "../../components/molecules/googleMaps/googleMaps"
import styles from './page.module.scss'

export default function AlquileresPage() {

  return (
    <main className="min-vh-100">
      <GoogleMaps />
      <div className={styles.container}>
        <PropertyFilter />
        <PropertyVisualizer href={"/alquileres"} />
      </div>
    </main>
  )
}
