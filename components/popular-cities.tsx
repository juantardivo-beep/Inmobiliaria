import Link from "next/link"

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

export function PopularCities() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
          Real Estate in Popular Cities
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Browse listings, view photos, and connect with an agent to schedule a viewing in some of our most popular
          cities.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {POPULAR_CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/homes/${city.slug}`}
              className="group p-4 rounded-lg border border-border bg-card hover:border-accent hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{city.state}</p>
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/markets"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Markets
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
