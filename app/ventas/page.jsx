"use client"
import PropertyVisualizer from "../../components/organisms/propertyVisualizer/PropertyVisualizer"
import PropertyFilter from "../../components/molecules/filter/PropertyFilter"
import GoogleMaps from "../../components/molecules/googleMaps/googleMaps"

export default function VentasPage() {

    return (
        <main className="min-vh-100">
            <GoogleMaps />
            <div className="d-flex">
                <PropertyFilter />
                <PropertyVisualizer href={"/ventas"} />
            </div>
        </main>
    )
}