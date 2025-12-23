"use client"

import Logo from "@/components/atoms/Logo"
import NavLink from "@/components/molecules/NavLink"
import styles from "./header.module.scss"
import searchIcon from "../../../assets/search-icon.svg"

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo className={styles.logo}/>

        <nav className={styles.headerNav}>
          <NavLink href="/inicio">Inicio</NavLink>
          <NavLink href="/alquileres">Alquileres</NavLink>
          <NavLink href="/ventas">Ventas</NavLink>
          <NavLink href="/tasaciones">Tasaciones</NavLink>
          <NavLink href="/internacional">Internacional</NavLink>
          <NavLink href="/nosotros">Nosotros</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
        </nav>
        <img src={searchIcon.src} alt="Buscar" className={styles.searchIcon} />
      </div>
    </header>
  )
}
