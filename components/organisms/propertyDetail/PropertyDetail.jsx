import styles from "./propertyDetail.module.scss";
import Image from "next/image";
import 'flag-icons/css/flag-icons.min.css';
import spinnerIcon from '../../../assets/spinner-ios.svg'
import location from '../../../assets/location_fill.svg'
import Badge from "../../atoms/Badge/Badge"
import { Bed, Bath, Square } from "lucide-react"
import Carrousel from '../../molecules/carrousel/Carrousel'
import image1 from '../../../assets/historic-brooklyn-townhouse.jpg'
import image2 from '../../../assets/luxury-waterfront-villa.png'


export default function PropertyDetail({ property }) {

    const COUNTRY_FLAGS = {
        'Argentina': 'ar',
        'Brasil': 'br',
        'Uruguay': 'uy',
        'Paraguay': 'py',
        'Chile': 'cl',
        // Agregá los que necesites
    };

    const images = [
        image1,
        image2
    ]

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

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image src={property.image} alt={property.title} className={styles.image} />
                <div className={styles.property__card__badge}>
                    <div className={styles.row}>
                        {property.featured && (
                            <Badge type={'primary'}>Exclusiva</Badge>
                        )}
                        <Badge type={'secondary'}>{property.type}</Badge>
                        <span className={`fi fi-${COUNTRY_FLAGS[property.country]}`}></span>
                    </div>
                    <h1>{property.title}</h1>
                    <div className={styles.row}>
                        <p className={styles.price}>${property.price}</p>
                        <p>Propiedad: {property.id}</p>
                    </div>
                    <div className={styles.row}>
                        <Image src={location} alt='location-icon' />
                        <p>{property.location}</p>
                    </div>
                </div>
            </div>

            <div className={styles.description}>
                <div className={styles.row}>
                    <div className={styles.divider}></div>
                    <h2>Descripción:</h2>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                    <p>{property.description}</p>
                    <div className={styles.property__card__features}>
                        <div className={styles.feature}>
                            <Bed size={24} />
                            <span>{property.bedrooms}</span>
                        </div>
                        <div className={styles.feature}>
                            <Bath size={24} />
                            <span>{property.bathrooms}</span>
                        </div>
                        <div className={styles.feature}>
                            <Square size={24} />
                            <span>{property.sqft.toLocaleString()} mts</span>
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
                            <p>${property.price}</p>
                        </div>
                        <div className={styles.detail_row}>
                            <h5>Metros Cuadrados</h5>
                            <p>{property.sqft.toLocaleString()}</p>
                        </div>
                        <div className={styles.detail_row}>
                            <h5>Habitaciones</h5>
                            <p>{property.bedrooms}</p>
                        </div>
                        <div className={styles.detail_row}>
                            <h5>Garage</h5>
                            <p>{property.garage ?? 0}</p>
                        </div>
                    </div>
                    <div className={styles.detail_column}>
                        <div className={styles.detail_row}>
                            <h5>ID</h5>
                            <p>{property.id}</p>
                        </div>
                        <div className={styles.detail_row}>
                            <h5>Baños</h5>
                            <p>{property.bathrooms}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Carrousel images={images} />
        </div>
    )
}