"use client"
import Carrousel from "../../components/molecules/carrousel/Carrousel"
import AboutUS from "../../components/organisms/aboutUS/aboutUS"
import Inmobiliaria1 from '../../assets/inmobiliaria_1.jpg'
import Inmobiliaria2 from '../../assets/inmobiliaria_2.jpg'
import Inmobiliaria3 from '../../assets/inmobiliaria_3.jpg'
import Inmobiliaria4 from '../../assets/inmobiliaria_4.jpg'
import Inmobiliaria5 from '../../assets/inmobiliaria_5.jpg'

export default function NosotrosPage() {

  const images = [
    Inmobiliaria1,
    Inmobiliaria2,
    Inmobiliaria3,
    Inmobiliaria4,
    Inmobiliaria5,
  ]

  return (
    <main className="min-vh-100">
      <Carrousel images={images} />
      <AboutUS />
    </main>
  )
}
