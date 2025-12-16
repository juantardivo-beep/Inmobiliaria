const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://your-wordpress-site.com/wp-json/wp/v2"

export interface WordPressProperty {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  acf?: {
    price?: number
    location?: string
    bedrooms?: number
    bathrooms?: number
    square_feet?: number
    featured_image?: string
    property_type?: string
    status?: string
  }
  featured_media?: number
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string
      alt_text: string
    }>
  }
}

/**
 * Fetch properties from WordPress
 * Assumes you have a custom post type called 'properties'
 */
export async function getProperties(
  params: {
    perPage?: number
    page?: number
    featured?: boolean
    orderBy?: "date" | "title" | "price"
    order?: "asc" | "desc"
  } = {},
): Promise<WordPressProperty[]> {
  const { perPage = 10, page = 1, featured, orderBy = "date", order = "desc" } = params

  const queryParams = new URLSearchParams({
    per_page: perPage.toString(),
    page: page.toString(),
    orderby: orderBy,
    order: order,
    _embed: "true", // Include featured image in response
  })

  if (featured) {
    queryParams.append("filter[meta_key]", "featured")
    queryParams.append("filter[meta_value]", "true")
  }

  try {
    const response = await fetch(`${WORDPRESS_API_URL}/properties?${queryParams.toString()}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching properties from WordPress:", error)
    return []
  }
}

/**
 * Fetch a single property by ID or slug
 */
export async function getProperty(idOrSlug: string | number): Promise<WordPressProperty | null> {
  try {
    const endpoint =
      typeof idOrSlug === "number"
        ? `${WORDPRESS_API_URL}/properties/${idOrSlug}?_embed=true`
        : `${WORDPRESS_API_URL}/properties?slug=${idOrSlug}&_embed=true`

    const response = await fetch(endpoint, {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.statusText}`)
    }

    const data = await response.json()
    return typeof idOrSlug === "number" ? data : data[0] || null
  } catch (error) {
    console.error("Error fetching property from WordPress:", error)
    return null
  }
}

/**
 * Search properties
 */
export async function searchProperties(query: string): Promise<WordPressProperty[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/properties?search=${encodeURIComponent(query)}&_embed=true`, {
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error searching properties:", error)
    return []
  }
}

/**
 * Transform WordPress property to app format
 */
export function transformWordPressProperty(wpProperty: WordPressProperty) {
  const featuredImage = wpProperty._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""

  return {
    id: wpProperty.id,
    title: wpProperty.title.rendered,
    location: wpProperty.acf?.location || "",
    price: wpProperty.acf?.price || 0,
    bedrooms: wpProperty.acf?.bedrooms || 0,
    bathrooms: wpProperty.acf?.bathrooms || 0,
    sqft: wpProperty.acf?.square_feet || 0,
    image: featuredImage,
    featured: wpProperty.acf?.status === "featured",
    type: wpProperty.acf?.property_type || "residential",
    excerpt: wpProperty.excerpt.rendered,
    content: wpProperty.content.rendered,
  }
}
