import { useEffect, useState } from 'react'
import ImageWrapper from '../../../helpers/ImageWrapper'
import styles from './carrousel.module.scss'

export default function Carrousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    if (!images || images.length === 0) return null

    useEffect(() => {
        if (images.length <= 1) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [images.length])

    const nextSlide = (e) => {
        e?.stopPropagation()
        setCurrentSlide((prev) => (prev + 1) % images.length)
    }

    const prevSlide = (e) => {
        e?.stopPropagation()
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <section className={styles.carousel}>
            <div className={styles.carouselContainer}>
                {images.length > 1 && (
                    <>
                        <button
                            className={styles.prevBtn}
                            onClick={prevSlide}
                            aria-label="Imagen anterior"
                        >
                            ❮
                        </button>
                        <button
                            className={styles.nextBtn}
                            onClick={nextSlide}
                            aria-label="Imagen siguiente"
                        >
                            ❯
                        </button>
                    </>
                )}

                <div className={styles.imageWrapper}>
                    <ImageWrapper
                        src={images[currentSlide]}
                        alt={`Propiedad - Imagen ${currentSlide + 1} de ${images.length}`}
                        fill
                        priority={currentSlide === 0}
                        sizes="(max-width: 768px) 100vw, 70vw"
                    />
                </div>

                {images.length > 1 && (
                    <div className={styles.dots}>
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                className={`${styles.dot} ${idx === currentSlide ? styles.active : ""}`}
                                onClick={() => setCurrentSlide(idx)}
                                aria-label={`Ir a imagen ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}