"use client"

import { useState, useEffect } from "react"
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import { Search } from "lucide-react"
import styles from "./heroSection.module.scss"
import { HERO_IMAGES } from "../../../constants/constants"
import PriceSlider from "../../atoms/PriceSlider/PriceSlider"

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
      <div className={styles.hero__image}>
        {/* {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`${styles.hero__img} ${i === current ? styles.is_active : ""}`}
          />
        ))} */}
        <img src={"/realState.png"} className={styles.hero__img}></img>
      </div>

      {/* <div className={styles.hero__content}>
        <div className={styles.hero__search_card}>
          <p className={styles.hero__title}>Encuentre su propiedad soñada</p>
          <div className={styles.hero__search_tabs}>
            <Button variant={searchType === "buy" ? "primary" : "ghost"} onClick={() => setSearchType("buy")}>
              Alquiler
            </Button>
            <Button variant={searchType === "rent" ? "primary" : "ghost"} onClick={() => setSearchType("rent")}>
              Venta
            </Button>
            <PriceSlider/>
          </div>

          <div className={styles.hero__search_input}>
            <div className={styles.input_wrapper}>
              <Search />
              <Input
                placeholder="Dirección, Tipo de propiedad"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="primary">Buscar</Button>
          </div>
        </div>
      </div> */}
    </section>
  )
}
