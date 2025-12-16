import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Buy</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/homes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Homes for Sale
                </Link>
              </li>
              <li>
                <Link href="/condos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Condos for Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/new-construction"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  New Construction
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Rent</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/apartments"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Apartments for Rent
                </Link>
              </li>
              <li>
                <Link
                  href="/houses-rent"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Houses for Rent
                </Link>
              </li>
              <li>
                <Link
                  href="/luxury-rentals"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Luxury Rentals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Sell</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sell-home"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sell Your Home
                </Link>
              </li>
              <li>
                <Link
                  href="/home-value"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Get Home Value
                </Link>
              </li>
              <li>
                <Link
                  href="/concierge"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Concierge Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/agents" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Find an Agent
                </Link>
              </li>
              <li>
                <Link
                  href="/mortgage"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Real Estate Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <span className="font-serif text-xl font-semibold text-foreground">Premier</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Premier Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
