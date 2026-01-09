import styles from "./propertyDetail.module.scss";
import Image from "next/image";
import 'flag-icons/css/flag-icons.min.css';
import spinnerIcon from '../../../assets/spinner-ios.svg'
import location from '../../../assets/location_fill.svg'
import Badge from "../../atoms/Badge/Badge"
import { Bed, Bath, Square } from "lucide-react"
import Carrousel from '../../molecules/carrousel/Carrousel'

export default function PropertyDetail({ property }) {

    const COUNTRY_FLAGS = {
        'Argentina': 'ar',
        'Brasil': 'br',
        'Uruguay': 'uy',
    };

    const images = [
        property.acf.image_1,
        property.acf.image_2,
        property.acf.image_3,
    ].filter(Boolean)

    const Loader = () => (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <img
                draggable={false}
                src={spinnerIcon}
                alt="spinner icon"
                className="loader"
            />
        </div>
    )

    if (!property) return <Loader></Loader>

    const image =
        property._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? placeholderImg

    const isFeatured = Boolean(property.acf?.featured)

    const sqft = property.acf?.square_feet ?? 0

    const countryKey =
        property.acf?.country?.charAt(0).toUpperCase() +
        property.acf?.country?.slice(1).toLowerCase()

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={image} alt={property.title.rendered} className={styles.image} />
                <div className={styles.property__card__badge}>
                    <div className={styles.row}>
                        {isFeatured && (
                            <Badge type={'primary'}>Exclusiva</Badge>
                        )}
                        <Badge type={'secondary'}>{property.acf.operation}</Badge>
                        <span className={`fi fi-${COUNTRY_FLAGS[countryKey]}`}></span>
                    </div>
                    <h1>{property.acf.title}</h1>
                    <div className={styles.row}>
                        <p className={styles.price}>${property.acf.price}</p>
                        <p>Propiedad: {property.id}</p>
                    </div>
                    <div className={styles.row}>
                        <Image src={location} alt='location-icon' />
                        <p>{property.acf.location}</p>
                    </div>
                </div>
            </div>

            <div className={styles.description}>
                <div className={styles.row}>
                    <div className={styles.divider}></div>
                    <h2>Descripción:</h2>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                    <p>{property.acf.description}</p>
                    <div className={styles.property__card__features}>
                        <div className={styles.feature}>
                            <Bed size={24} />
                            <span>{property.acf.bedrooms}</span>
                        </div>
                        <div className={styles.feature}>
                            <Bath size={24} />
                            <span>{property.acf.bathrooms}</span>
                        </div>
                        <div className={styles.feature}>
                            <Square size={24} />
                            <span>{sqft.toLocaleString()} mts</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.description}>
                <div className={styles.row}>
                    <div className={styles.divider}></div>
                    <h2>Detalles de la propiedad:</h2>
                </div>
                <div className={styles.detail}>
                    <div className={styles.detail_column}>
                        <div className={styles.detail_row}>
                            <h5>Precio</h5>
                            <p>${property.acf.price}</p>
                        </div>
                        <div className={styles.detail_row}>
                            <h5>Metros Cuadrados</h5>
                            <p>{sqft.toLocaleString()}</p>
                        </div>
                        <div className={styles.detail_row}>
                            <h5>Habitaciones</h5>
                            <p>{property.acf.bedrooms}</p>
                        </div>
                        <div className={styles.detail_row}>
                            <h5>Garage</h5>
                            <p>{property.acf.garage ?? 0}</p>
                        </div>
                    </div>
                    <div className={styles.detail_column}>
                        <div className={styles.detail_row}>
                            <h5>ID</h5>
                            <p>{property.id}</p>
                        </div>
                        <div className={styles.detail_row}>
                            <h5>Baños</h5>
                            <p>{property.acf.bathrooms}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Carrousel images={images} />
        </div>
    )
}