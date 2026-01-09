import { getProperties, getPropertyBySlug } from "../../../lib/wordpress-api"
import PropertyClient from "./PropertyClient"

export async function generateStaticParams() {
  const properties = await getProperties()

  return properties.map((property) => ({
    slug: property.slug,
  }))
}

export default async function PropertyPage({ params }) {
  const { slug } = await params
  const property = await getPropertyBySlug(slug)

  if (!property) {
    return <div>Propiedad no encontrada</div>
  }

  return <PropertyClient property={property} />
}
