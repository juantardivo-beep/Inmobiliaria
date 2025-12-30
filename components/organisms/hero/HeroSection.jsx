"use client"

import { useState, useEffect } from "react"
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import { Search } from "lucide-react"
import styles from "./heroSection.module.scss"
import { BEDROOM_OPTIONS, HERO_IMAGES, PROPERTY_TYPES } from "../../../constants/constants"
import PriceSlider from "../../atoms/PriceSlider/PriceSlider"
import TypeSelector from "../../atoms/TypeSelector/TypeSelector"
import Home from "../../../assets/home_3_line.svg"
import Image from "next/image"
import HeroBuilding from '../../../assets/hero-buildings.jpg'

export default function HeroSection() {
  const [searchType, setSearchType] = useState("buy")
  const [searchQuery, setSearchQuery] = useState("")
  const images = HERO_IMAGES
  const [current, setCurrent] = useState(0)


  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCurrent((c) => (c + 1) % images.length)
  //   }, 10000)
  //   return () => clearInterval(id)
  // }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.hero__info}>
        <div className={styles.info__subcontainer}>
          <Image src={Home} alt={'home_icon'} className={styles.home__icon} />
          <p className={styles.agency}>Agencia Inmobiliaria</p>
        </div>
        <h3>ENCUENTRA LA PROPIEDAD</h3>
        <h1>DE TUS SUEÑOS</h1>
      </div>

      <div className={styles.hero__image}>
        {/* {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`${styles.hero__img} ${i === current ? styles.is_active : ""}`}
          />
        ))} */}
        <Image src={HeroBuilding} className={styles.hero__img} alt='hero-building'/>
      </div>

      <div className={styles.hero__content}>

        <div className={styles.hero__search_tabs}>
          <Button variant={searchType === "buy" ? "primary" : "outline"} onClick={() => setSearchType("buy")}>
            Alquiler
          </Button>
          <Button variant={searchType === "rent" ? "primary" : "outline"} onClick={() => setSearchType("rent")}>
            Venta
          </Button>
        </div>

        <div className={styles.hero__search_card}>

          <div className={styles.hero__search_input}>
            <div className={styles.input_wrapper}>
              <Search />
              <Input
                placeholder="País, Ciudad, Dirección"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.input_custom}
              />
            </div>
            <TypeSelector options={PROPERTY_TYPES} style={{width: '15rem'}}/>
            <TypeSelector options={BEDROOM_OPTIONS} />
            <PriceSlider />
            <Button variant="primary">Buscar</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
