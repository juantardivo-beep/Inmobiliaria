'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import styles from './googleMaps.module.scss'

// export default function GoogleMaps() {
//     const mapRef = useRef(null)

//     useEffect(() => {
//         const initMap = async () => {
//             const loader = new Loader({
//                 apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//                 version: 'weekly',
//             })

//             const { Map } = await loader.importLibrary('maps')
//             const { Marker } = await loader.importLibrary('marker')

//             const position = {
//                 lat: -31.6167,
//                 lng: -60.7833,
//             }

//             const map = new Map(mapRef.current, {
//                 center: position,
//                 zoom: 15,
//             })

//             new Marker({
//                 map: map,
//                 position: position,
//             })
//         }

//         initMap()
//     }, [])

//     return (
//         <div
//             ref={mapRef}
//             className={styles.container}
//             style={{ width: '100%', height: '450px' }}
//         />
//     )
// }

export default function GoogleMaps(){
    return(
        <div className={styles.container}>
            <img src={'/maps.png'}></img>
        </div>
    )
}