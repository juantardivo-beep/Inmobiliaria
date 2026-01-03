"use client"

import Logo from "@/components/atoms/Logo"
import NavLink from "@/components/molecules/NavLink"
import styles from "./header.module.scss"
import { useState } from "react";
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    console.log("AAAAAAAA")
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Logo className={styles.logo} />


          <nav className={styles.headerNav}>
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/alquileres">Alquileres</NavLink>
            <NavLink href="/ventas">Ventas</NavLink>
            <NavLink href="/tasaciones">Tasaciones</NavLink>
            <NavLink href="/internacional">Internacional</NavLink>
            <NavLink href="/nosotros">Nosotros</NavLink>
            <NavLink href="/contacto">Contacto</NavLink>
          </nav>

          {/* Botón Hamburguesa */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Overlay para cerrar el menú */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}
        onClick={closeMenu}
      />

      {/* Menú Mobile */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileMenuNav} onClick={closeMenu}>
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/alquileres">Alquileres</NavLink>
          <NavLink href="/ventas">Ventas</NavLink>
          <NavLink href="/tasaciones">Tasaciones</NavLink>
          <NavLink href="/internacional">Internacional</NavLink>
          <NavLink href="/nosotros">Nosotros</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </>
  );
}
