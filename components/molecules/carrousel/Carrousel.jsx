import styles from './carrousel.module.scss'
import { useState, useEffect } from "react"

export default function Carrousel() {

    const carouselImages = [
        "/inmobiliaria_1.jpg",
        "/inmobiliaria_2.jpg",
        "/inmobiliaria_3.jpg",
        "/inmobiliaria_4.jpg",
        "/inmobiliaria_5.jpg",
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)

    return (
        <section className={styles.carousel}>
            <div className={styles.carouselContainer}>
                <button className={styles.prevBtn} onClick={prevSlide}>
                    ❮
                </button>
                <img src={carouselImages[currentSlide]} alt={`Inmobiliaria ${currentSlide + 1}`} />
                <button className={styles.nextBtn} onClick={nextSlide}>
                    ❯
                </button>
                <div className={styles.dots}>
                    {carouselImages.map((_, idx) => (
                        <span
                            key={idx}
                            className={`${styles.dot} ${idx === currentSlide ? styles.active : ""}`}
                            onClick={() => setCurrentSlide(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}