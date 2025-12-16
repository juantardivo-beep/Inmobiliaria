"use client"

import { useState } from "react"
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import { Search } from "lucide-react"

export default function HeroSection() {
  const [searchType, setSearchType] = useState("buy")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="hero">
      <div className="hero__image">
        <img src="/modern-luxury-home-exterior-with-beautiful-landsca.jpg" alt="Luxury home" />
      </div>

      <div className="container hero__content">
        <div>
          <h1 className="hero__title">Find your place</h1>

          <div className="hero__search-card">
            <div className="hero__search-tabs">
              <Button variant={searchType === "buy" ? "primary" : "ghost"} onClick={() => setSearchType("buy")}>
                Buy
              </Button>
              <Button variant={searchType === "rent" ? "primary" : "ghost"} onClick={() => setSearchType("rent")}>
                Rent
              </Button>
              <Button variant={searchType === "sell" ? "primary" : "ghost"} onClick={() => setSearchType("sell")}>
                Sell
              </Button>
            </div>

            <div className="hero__search-input">
              <div className="input-wrapper">
                <Search />
                <Input
                  placeholder="City, Neighborhood, Address, School, ZIP, Agent, MLS #"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="primary">Search</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
