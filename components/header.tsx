"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">Premier</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/buy" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Buy
          </Link>
          <Link href="/rent" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Rent
          </Link>
          <Link href="/sell" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Sell
          </Link>
          <Link
            href="/agents"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Find Agent
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex text-foreground">
            Sign In
          </Button>
          <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container flex flex-col gap-4 p-4">
            <Link href="/buy" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              Buy
            </Link>
            <Link href="/rent" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              Rent
            </Link>
            <Link href="/sell" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              Sell
            </Link>
            <Link href="/agents" className="text-sm font-medium text-foreground/80 hover:text-foreground">
              Find Agent
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full text-foreground">
                Sign In
              </Button>
              <Button className="w-full bg-primary text-primary-foreground">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
