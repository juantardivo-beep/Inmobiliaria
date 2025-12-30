import Image from 'next/image'
import styles from './carrousel.module.scss'
import { useState, useEffect } from "react"

export default function Carrousel({ images }) {

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)

    return (
        <section className={styles.carousel}>
            <div className={styles.carouselContainer}>
                <button className={styles.prevBtn} onClick={prevSlide}>
                    ❮
                </button>
                <Image src={images[currentSlide]} alt={`Inmobiliaria ${currentSlide + 1}`} />
                <button className={styles.nextBtn} onClick={nextSlide}>
                    ❯
                </button>
                <div className={styles.dots}>
                    {images.map((_, idx) => (
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