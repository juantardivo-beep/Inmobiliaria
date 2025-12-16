"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function HeroSection() {
  const [searchType, setSearchType] = useState<"buy" | "rent" | "sell">("buy")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 -z-10">
        <img src="/modern-luxury-home-exterior-with-beautiful-landsca.jpg" alt="Luxury home" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background/90" />
      </div>

      <div className="container relative h-full flex flex-col justify-center px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-background mb-6 text-balance">
            Find your place
          </h1>

          {/* Search Card */}
          <div className="bg-card rounded-lg shadow-2xl p-6">
            {/* Search Type Tabs */}
            <div className="flex gap-2 mb-4">
              <Button
                variant={searchType === "buy" ? "default" : "ghost"}
                onClick={() => setSearchType("buy")}
                className="flex-1"
              >
                Buy
              </Button>
              <Button
                variant={searchType === "rent" ? "default" : "ghost"}
                onClick={() => setSearchType("rent")}
                className="flex-1"
              >
                Rent
              </Button>
              <Button
                variant={searchType === "sell" ? "default" : "ghost"}
                onClick={() => setSearchType("sell")}
                className="flex-1"
              >
                Sell
              </Button>
            </div>

            {/* Search Input */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="City, Neighborhood, Address, School, ZIP, Agent, MLS #"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button className="h-12 px-8 bg-primary hover:bg-primary/90">Search</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
