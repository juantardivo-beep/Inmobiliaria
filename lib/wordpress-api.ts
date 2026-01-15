const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://your-wordpress-site.com/wp-json/wp/v2"

export interface WordPressProperty {
  id: number
  slug: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt?: {
    rendered: string
  }
  featured_media?: number
  acf: {
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    square_feet: number
    featured: string | boolean
    operation: string
    country: string
    description: string,
    type: string
  }
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

export async function getProperties() {
  try {
    const res = await fetch(
      `${WORDPRESS_API_URL}/property?_embed=true&per_page=100`,
      { cache: "no-store" }
    )

    if (!res.ok) return []

    return await res.json()
  } catch (err) {
    console.error(err)
    return []
  }
}

export function transformWordPressProperty(wpProperty: WordPressProperty) {
  const featuredImage =
    wpProperty._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""

  return {
    id: wpProperty.id,
    slug: wpProperty.slug,
    title: wpProperty.title.rendered,
    location: wpProperty.acf?.location || "",
    price: wpProperty.acf?.price || 0,
    bedrooms: wpProperty.acf?.bedrooms || 0,
    bathrooms: wpProperty.acf?.bathrooms || 0,
    sqft: wpProperty.acf?.square_feet || 0,
    image: featuredImage,
    featured: wpProperty.acf?.featured === true,
    operation: wpProperty.acf?.operation || "",
    country: wpProperty.acf?.country || "",
    description: wpProperty.acf?.description || "",
    type: wpProperty.acf?.type || ""
  }
}

export async function getPropertyBySlug(slug: string) {
  const res = await fetch(
    `${WORDPRESS_API_URL}/property?slug=${slug}&_embed=true`,
    { cache: "force-cache" }
  )

  if (!res.ok) return null

  const data = await res.json()
  return data[0] ?? null
}



