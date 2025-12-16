import CityCard from "@/components/molecules/CityCard"

const POPULAR_CITIES = [
  { name: "Manhattan", state: "NY", slug: "manhattan-ny" },
  { name: "Los Angeles", state: "CA", slug: "los-angeles-ca" },
  { name: "San Francisco", state: "CA", slug: "san-francisco-ca" },
  { name: "Miami", state: "FL", slug: "miami-fl" },
  { name: "Chicago", state: "IL", slug: "chicago-il" },
  { name: "Brooklyn", state: "NY", slug: "brooklyn-ny" },
  { name: "Seattle", state: "WA", slug: "seattle-wa" },
  { name: "Boston", state: "MA", slug: "boston-ma" },
  { name: "Austin", state: "TX", slug: "austin-tx" },
  { name: "San Diego", state: "CA", slug: "san-diego-ca" },
  { name: "Denver", state: "CO", slug: "denver-co" },
  { name: "Portland", state: "OR", slug: "portland-or" },
]

export default function PopularCities() {
  return (
    <section className="popular-cities">
      <div className="container">
        <h2 className="popular-cities__title">Real Estate in Popular Cities</h2>
        <p className="popular-cities__description">
          Browse listings, view photos, and connect with an agent to schedule a viewing in some of our most popular
          cities.
        </p>

        <div className="popular-cities__grid">
          {POPULAR_CITIES.map((city) => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>

        <div className="popular-cities__view-all">
          <a href="/markets">
            View All Markets
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
