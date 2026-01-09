import Image from 'next/image'

export default function ImageWrapper({ src, alt, fill, priority, sizes, className, style }) {
    // Si es una URL externa de WordPress, usa img nativo
    const isWordPressImage = src?.includes('wp-content/uploads')

    if (isWordPressImage) {
        return (
            <img
                src={src}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                className={className}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    ...style
                }}
            />
        )
    }

    // Para imágenes locales usa Image de Next.js
    return (
        <Image
            src={src}
            alt={alt}
            fill={fill}
            priority={priority}
            sizes={sizes}
            className={className}
            style={style}
        />
    )
}