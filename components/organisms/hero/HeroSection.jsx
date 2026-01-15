"use client"

import { useEffect, useEffectEvent, useState } from "react"
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import { Search } from "lucide-react"
import styles from "./heroSection.module.scss"
import { BEDROOM_OPTIONS, PROPERTY_TYPES } from "../../../constants/constants"
import PriceSlider from "../../atoms/PriceSlider/PriceSlider"
import TypeSelector from "../../atoms/TypeSelector/TypeSelector"
import Home from "../../../assets/home_3_line.svg"
import Image from "next/image"
import HeroBuilding from '../../../assets/hero-buildings.jpg'
import { useSelector, useDispatch } from "react-redux"
import { setAllFilters } from "../../../store/propertyFilterSlice"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const dispatch = useDispatch();
  const router = useRouter()
  const [searchType, setSearchType] = useState("rent")
  const appliedFilters = useSelector(state => state.propertyFilters)
  const [draft, setDraft] = useState(appliedFilters)

  const onChange = (key, value) => {
    setDraft(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const applyFilters = () => {
    dispatch(setAllFilters(draft))
    router.push("/all")
  }

  useEffect(() => {
    setDraft(appliedFilters)
  }, [appliedFilters])

  useEffect(() => {
    if (searchType === 'rent') onChange("operationType", "Alquiler")
    else if (searchType === 'buy') onChange("operationType", "Venta")
  }, [searchType])


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
        <Image src={HeroBuilding} className={styles.hero__img} alt='hero-building' />
      </div>

      <div className={styles.hero__content}>

        <div className={styles.hero__search_tabs}>
          <Button variant={searchType === "rent" ? "primary" : "outline"} onClick={() => setSearchType("rent")}>
            Alquiler
          </Button>
          <Button variant={searchType === "buy" ? "primary" : "outline"} onClick={() => setSearchType("buy")}>
            Venta
          </Button>
        </div>

        <div className={styles.hero__search_card}>

          <div className={styles.hero__search_input}>
            <div className={styles.input_wrapper}>
              <Search />
              <Input
                placeholder="País, Ciudad, Dirección"
                value={draft.search}
                onChange={(e) =>
                  onChange("search", e.target.value)
                }
                className={styles.input_custom}
              />
            </div>
            <TypeSelector
              options={PROPERTY_TYPES}
              value={draft.propertyType}
              onChange={(value) => {
                onChange("propertyType", value)
              }}
              style={{ width: '15rem' }}
            />
            <TypeSelector
              options={BEDROOM_OPTIONS}
              value={draft.beds}
              onChange={(v) =>
                onChange("beds", Number(v))
              }
              style={{ width: '10rem' }}
            />
            <PriceSlider
              value={draft.maxPrice}
              onChange={(v) => {
                setDraft(prev => ({
                  ...prev,
                  maxPrice: v
                }))
              }}
            />
            <Button variant="primary" onClick={applyFilters}>Buscar</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
