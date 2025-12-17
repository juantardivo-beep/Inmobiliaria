"use client"

import Logo from "@/components/atoms/Logo"
import NavLink from "@/components/molecules/NavLink"
import Button from "@/components/atoms/Button"
import styles from "./header.module.scss"

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Logo />

        <nav className={styles.headerNav}>
          <NavLink href="/buy">Comprar</NavLink>
          <NavLink href="/rent">Alquilar</NavLink>
          <NavLink href="/sell">Vender</NavLink>
        </nav>

        <div className={styles.headerActions}>
          <Button variant="ghost">Contacto</Button>
        </div>
      </div>
    </header>
  )
}
