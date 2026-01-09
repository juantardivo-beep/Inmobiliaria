import styles from './propertyVisualizer.module.scss';
import { useEffect, useMemo, useState } from "react"
import PropertyCard from "@/components/molecules/propertyCard/PropertyCard"
import TypeSelector from "../../atoms/TypeSelector/TypeSelector"
import { COUNTRIES, ORDER_OPTIONS } from "../../../constants/constants"
import Image from "next/image"
import leftArrow from "../../../assets/left-arrow.svg"
import rightArrow from "../../../assets/right-arrow.svg"
import { getProperties, transformWordPressProperty } from "../../../lib/wordpress-api"

export default function PropertyVisualizer({ href }) {
    const [properties, setProperties] = useState([])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(99999999)
    const [beds, setBeds] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 6
    const propertyCount = 100;

    useEffect(() => {
        async function loadProperties() {
            const wpProperties = await getProperties({ perPage: 4 })
            setProperties(wpProperties.map(transformWordPressProperty))
        }

        loadProperties()
    }, [])

    const list = useMemo(() => properties || [])

    const filtered = list.filter((p) => p.price >= minPrice &&
        p.price <= maxPrice &&
        p.bedrooms >= beds &&
        (href === "/ventas" ? p.type === 'Venta' :
            href === "/alquileres" ? p.type === 'Alquiler' :
                href === "/internacional" ? p.country !== COUNTRIES.ARGENTINA : true)
    )

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
    const startIndex = (currentPage - 1) * pageSize
    const paged = filtered.slice(startIndex, startIndex + pageSize)

    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <h3>{propertyCount}</h3>
                    <p>resultados</p>
                </div>
                <div className={styles.selector}>
                    <TypeSelector options={ORDER_OPTIONS} />
                </div>
            </div>

            <div className={styles.content}>
                <main className={styles.listing}>

                    <div className={styles.grid}>
                        {paged.map((p) => (
                            <PropertyCard key={p.id} property={p} />
                        ))}
                    </div>

                    <div className={styles.pagination}>
                        <Image className={styles.pageBtn} src={leftArrow} alt='left-arrow' onClick={() => { if (currentPage > 1) setCurrentPage(currentPage - 1) }} disabled={currentPage === 1} />

                        {Array.from({ length: totalPages }).map((_, idx) => {
                            const pageNum = idx + 1
                            return (
                                <button
                                    key={pageNum}
                                    className={`${styles.pageBtn} ${currentPage === pageNum ? styles.active : ""}`}
                                    onClick={() => setCurrentPage(pageNum)}
                                >
                                    {pageNum}
                                </button>
                            )
                        })}

                        <Image className={styles.pageBtn} src={rightArrow} alt='right-arrow' onClick={() => { if (currentPage < totalPages) setCurrentPage(currentPage + 1) }} disabled={currentPage === totalPages} />
                    </div>
                </main>
            </div>
        </div>
    )
}