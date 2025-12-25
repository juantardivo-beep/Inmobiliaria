import Link from "next/link"
import Logo from "@/components/atoms/Logo"
import styles from "./footer.module.scss"
import NavLink from "@/components/molecules/NavLink"
import phoneIcon from "../../../assets/phone-icon.svg"
import worldIcon from "../../../assets/world-icon.svg"
import mailIcon from "../../../assets/mail-icon.svg"
import matriculaIcon from "../../../assets/matricula-icon.svg"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.background}>
        <img src={"Inmobiliaria//footer-background.jpg"} />
      </div>

      <div className={styles.footer__grid}>

        <div className={styles.footer__column}>
          <h3>Asociados</h3>
          <ul>
            <li>
              <img src={"/cci.jpg"}/>
            </li>
            <li>
              <img src={"/ceci.jpg"}/>
            </li>
            <li>
              <img src={"/fira.jpg"}/>
            </li>
            <li>
              <img src={"/micros-inmobiliarios.png"}/>
            </li>
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h3>Links Rápidos</h3>
          <ul>
            <li>
              <NavLink href="/inicio">Inicio</NavLink>
            </li>
            <li>
              <NavLink href="/internacional">Internacional</NavLink>
            </li>
            <li>
              <NavLink href="/nosotros">Nosotros</NavLink>
            </li>
            <li>
              <NavLink href="/contacto">Contacto</NavLink>
            </li>
            <li>
              <NavLink href="/contacto">Intranet</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h3>EIB Boulevard</h3>
          <ul>
            <li>
              <Image src={phoneIcon} alt="phone" className={styles.icons} />
              <p>0342 4554672 - 4556459</p>
            </li>
            <li>
              <Image src={mailIcon} alt="mail" className={styles.icons} />
              <p>embarbier119@gmail.com</p>
            </li>
            <li>
              <Image src={worldIcon} alt="world" className={styles.icons} />
              <p>Bv. Pellegrini 3275 - Santa Fe</p>
            </li>
            <li>
              <Image src={matriculaIcon} alt="matricula" className={styles.icons} />
              <p>Matricula N° 72 & 482</p>
            </li>
          </ul>
        </div>

        <div className={styles.footer__column}>
          <h3>EIB Facundo</h3>
          <ul>
            <li>
              <Image src={phoneIcon} alt="phone" className={styles.icons} />
              <p>0342 4563001</p>
            </li>
            <li>
              <Image src={mailIcon} alt="mail" className={styles.icons} />
              <p>ngallardo@eib.com.ar</p>
            </li>
            <li>
              <Image src={worldIcon} alt="world" className={styles.icons} />
              <p>Fdo. Zuviria 4289 - Santa Fe</p>
            </li>
            <li>
              <Image src={matriculaIcon} alt="matricula" className={styles.icons} />
              <p>Matricula N° 640</p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <Logo className={styles.logo}/>
        <p className={styles.footer__copyright}>© {new Date().getFullYear()} Premier Real Estate. All rights reserved.</p>
      </div>
    </footer>
  )
}
