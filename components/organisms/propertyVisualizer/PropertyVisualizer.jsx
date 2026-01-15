import styles from './propertyVisualizer.module.scss';
import { useEffect, useMemo, useState } from "react"
import PropertyCard from "@/components/molecules/propertyCard/PropertyCard"
import TypeSelector from "../../atoms/TypeSelector/TypeSelector"
import { COUNTRIES, ORDER_OPTIONS } from "../../../constants/constants"
import Image from "next/image"
import leftArrow from "../../../assets/left-arrow.svg"
import rightArrow from "../../../assets/right-arrow.svg"
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../../store/propertyFilterSlice";

export default function PropertyVisualizer({ href }) {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [orderBy, setOrderBy] = useState("");
    const pageSize = 6

    const properties = useSelector(state => state.properties.all)
    const filters = useSelector(state => state.propertyFilters);

    const normalizedSearch = filters.search.trim().toLowerCase()
    const matchesSearch = (property, search) => {
        if (!search) return true

        const text = search.toLowerCase()

        return (
            property.title?.toLowerCase().includes(text) ||
            property.location?.toLowerCase().includes(text) ||
            String(property.sqft).includes(text)
        )
    }

    const filtered = useMemo(() => {
        return properties.filter(p =>
            matchesSearch(p, normalizedSearch) &&
            p.price >= filters.minPrice &&
            p.price <= filters.maxPrice &&
            p.bedrooms >= filters.beds &&
            (!filters.propertyType || p.type === filters.propertyType) &&
            (!filters.operationType || p.operation === filters.operationType) &&
            (!filters.country || p.country === filters.country) &&
            (!filters.internacional || p.country !== COUNTRIES.ARGENTINA)
        )
    }, [properties, filters])


    const sorted = useMemo(() => {
        const data = [...filtered]

        if (orderBy === "Mayor Precio") {
            return data.sort((a, b) => b.price - a.price)
        }

        if (orderBy === "Menor Precio") {
            return data.sort((a, b) => a.price - b.price)
        }

        return data
    }, [filtered, orderBy])

    const propertyCount = sorted.length;
    const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize))
    const startIndex = (currentPage - 1) * pageSize
    const paged = sorted.slice(startIndex, startIndex + pageSize)

    useEffect(() => {
        setCurrentPage(1)
    }, [filters, orderBy])

    useEffect(() => {
        if (href === '/alquileres') dispatch(setFilter({ key: "operationType", value: 'Alquiler' }))
        else if (href === '/ventas') dispatch(setFilter({ key: "operationType", value: 'Venta' }))
        else if (href === '/internacional') dispatch(setFilter({ key: "internacional", value: true }))
    }, [href])

    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <h3>{propertyCount}</h3>
                    <p>resultados</p>
                </div>
                <div className={styles.selector}>
                    <TypeSelector
                        options={ORDER_OPTIONS}
                        value={orderBy}
                        onChange={(v) =>
                            setOrderBy(v)
                        }
                    />
                </div>
            </div>

            <div className={styles.content}>
                <main className={styles.listing}>
                    {propertyCount === 0 ? (
                        <div className={styles.emptyState}>
                            <h4>No se encontraron propiedades</h4>
                            <p>Probá modificar o limpiar los filtros aplicados.</p>
                        </div>
                    ) : (
                        <>
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
                        </>
                    )}
                </main>
            </div>
        </div>
    )
}