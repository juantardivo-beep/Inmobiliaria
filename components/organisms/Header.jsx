"use client"

import { useState } from "react"
import Logo from "@/components/atoms/Logo"
import NavLink from "@/components/molecules/NavLink"
import Button from "@/components/atoms/Button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__container">
        <Logo />

        <nav className="header__nav">
          <NavLink href="/buy">Buy</NavLink>
          <NavLink href="/rent">Rent</NavLink>
          <NavLink href="/sell">Sell</NavLink>
          <NavLink href="/agents">Find Agent</NavLink>
        </nav>

        <div className="header__actions">
          <div className="d-none d-md-flex gap-2">
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Get Started</Button>
          </div>

          <button className="header__mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="header__mobile-menu">
          <nav>
            <NavLink href="/buy">Buy</NavLink>
            <NavLink href="/rent">Rent</NavLink>
            <NavLink href="/sell">Sell</NavLink>
            <NavLink href="/agents">Find Agent</NavLink>
          </nav>
          <div className="header__mobile-menu-actions">
            <Button variant="ghost" className="w-100">
              Sign In
            </Button>
            <Button variant="primary" className="w-100">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
