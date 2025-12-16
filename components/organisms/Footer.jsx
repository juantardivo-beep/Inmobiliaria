import Link from "next/link"
import Logo from "@/components/atoms/Logo"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__column">
            <h3>Buy</h3>
            <ul>
              <li>
                <Link href="/homes">Homes for Sale</Link>
              </li>
              <li>
                <Link href="/condos">Condos for Sale</Link>
              </li>
              <li>
                <Link href="/new-construction">New Construction</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Rent</h3>
            <ul>
              <li>
                <Link href="/apartments">Apartments for Rent</Link>
              </li>
              <li>
                <Link href="/houses-rent">Houses for Rent</Link>
              </li>
              <li>
                <Link href="/luxury-rentals">Luxury Rentals</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Sell</h3>
            <ul>
              <li>
                <Link href="/sell-home">Sell Your Home</Link>
              </li>
              <li>
                <Link href="/home-value">Get Home Value</Link>
              </li>
              <li>
                <Link href="/concierge">Concierge Service</Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Resources</h3>
            <ul>
              <li>
                <Link href="/agents">Find an Agent</Link>
              </li>
              <li>
                <Link href="/mortgage">Mortgage Calculator</Link>
              </li>
              <li>
                <Link href="/blog">Real Estate Blog</Link>
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
