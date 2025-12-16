import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const SearchBar = () => {
  const [searchType, setSearchType] = useState<"buy" | "rent">("buy");

  return (
    <div className="bg-card rounded-xl shadow-card p-2 md:p-3 max-w-4xl mx-auto">
      {/* Search Type Tabs */}
      <div className="flex gap-1 mb-3">
        <button
          onClick={() => setSearchType("buy")}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
            searchType === "buy"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-secondary"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setSearchType("rent")}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
            searchType === "rent"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-secondary"
          }`}
        >
          Rent
        </button>
      </div>

      {/* Search Fields */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-3">
        {/* Location Input */}
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="City, neighborhood, or address"
            className="pl-10 h-12 bg-background border-border"
          />
        </div>

        {/* Property Type */}
        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-40 h-12 bg-background border-border">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
          </SelectContent>
        </Select>

        {/* Price Range */}
        <Select defaultValue="any">
          <SelectTrigger className="w-full md:w-40 h-12 bg-background border-border">
            <SelectValue placeholder="Price" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="any">Any Price</SelectItem>
            <SelectItem value="0-500000">Under $500K</SelectItem>
            <SelectItem value="500000-1000000">$500K - $1M</SelectItem>
            <SelectItem value="1000000-2000000">$1M - $2M</SelectItem>
            <SelectItem value="2000000+">$2M+</SelectItem>
          </SelectContent>
        </Select>

        {/* Beds */}
        <Select defaultValue="any">
          <SelectTrigger className="w-full md:w-32 h-12 bg-background border-border">
            <SelectValue placeholder="Beds" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="any">Any Beds</SelectItem>
            <SelectItem value="1">1+ Bed</SelectItem>
            <SelectItem value="2">2+ Beds</SelectItem>
            <SelectItem value="3">3+ Beds</SelectItem>
            <SelectItem value="4">4+ Beds</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button className="h-12 px-6 gap-2">
          <Search className="h-4 w-4" />
          <span className="hidden md:inline">Search</span>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
