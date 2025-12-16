import Link from "next/link"

export default function CityCard({ city }) {
  return (
    <Link href={`/homes/${city.slug}`} className="city-card">
      <div className="city-card__content">
        <div>
          <h3 className="city-card__name">{city.name}</h3>
          <p className="city-card__state">{city.state}</p>
        </div>
        <span className="city-card__arrow">→</span>
      </div>
    </Link>
  )
}
