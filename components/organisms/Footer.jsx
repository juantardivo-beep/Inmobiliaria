import Link from "next/link"
import Logo from "@/components/atoms/Logo"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__column">
            <h3>Comprar</h3>
            <ul>
              <li>
                <Link href="/homes">Casas en Venta</Link>
              </li>
              <li>
                <Link href="/condos">Condominios en Venta</Link>
              </li>
              <li>
                <Link href="/new-construction">Nuevas Construcciones</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Alquiler</h3>
            <ul>
              <li>
                <Link href="/apartments">Departamentos en Alquiler</Link>
              </li>
              <li>
                <Link href="/houses-rent">Casas en Alquiler</Link>
              </li>
              <li>
                <Link href="/luxury-rentals">Alquileres de Lujo</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Vender</h3>
            <ul>
              <li>
                <Link href="/sell-home">Venda su Casa</Link>
              </li>
              <li>
                <Link href="/home-value">Obtener precio de Venta</Link>
              </li>
              <li>
                <Link href="/concierge">(nombre de la inmobiliaria) Servicios</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Recursos</h3>
            <ul>
              <li>
                <Link href="/agents">Encontrar un Agente</Link>
              </li>
              <li>
                <Link href="/mortgage">Calculadora Hipotecaria</Link>
              </li>
              <li>
                <Link href="/blog">Blog Inmobiliario</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <Logo />
          <p className="footer__copyright">© {new Date().getFullYear()} Premier Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
