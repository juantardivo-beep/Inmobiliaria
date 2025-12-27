import Image from 'next/image'
import styles from './carrousel.module.scss'
import { useState, useEffect } from "react"
import Inmobiliaria1 from '../../../assets/inmobiliaria_1.jpg'
import Inmobiliaria2 from '../../../assets/inmobiliaria_2.jpg'
import Inmobiliaria3 from '../../../assets/inmobiliaria_3.jpg'
import Inmobiliaria4 from '../../../assets/inmobiliaria_4.jpg'
import Inmobiliaria5 from '../../../assets/inmobiliaria_5.jpg'

export default function Carrousel() {

    const carouselImages = [
        Inmobiliaria1,
        Inmobiliaria2,
        Inmobiliaria3,
        Inmobiliaria4,
        Inmobiliaria5,
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
                <Image src={carouselImages[currentSlide]} alt={`Inmobiliaria ${currentSlide + 1}`} />
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