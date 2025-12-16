# Premier Real Estate - WordPress Frontend Template

A modern, professional real estate frontend template built with Next.js 16 and React, designed to integrate seamlessly with WordPress as a headless CMS.

## Features

- 🏠 **Modern Design**: Professional real estate UI inspired by industry leaders
- 🎨 **Sophisticated Color Palette**: Warm, trustworthy color scheme perfect for real estate
- 📱 **Fully Responsive**: Mobile-first design that works beautifully on all devices
- 🔌 **WordPress Integration**: Ready-to-use REST API utilities for fetching property data
- ⚡ **Next.js 16**: Built with the latest Next.js features and optimizations
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML structure
- 🔍 **Property Search**: Hero section with tabbed search functionality
- 🏘️ **Property Listings**: Beautiful property cards with all essential information
- 🌆 **Popular Cities**: Quick navigation to major real estate markets
- ✨ **Service Highlights**: Showcase your unique services (like Concierge)

## WordPress Integration

This template is designed to work with WordPress as a headless CMS. Follow these steps to connect:

### 1. WordPress Setup

**Install Required Plugins:**
- Advanced Custom Fields (ACF) - for property custom fields
- Custom Post Type UI - to create a 'properties' post type

**Create Custom Post Type:**
1. Go to CPT UI > Add/Edit Post Types
2. Create a post type called `properties`
3. Set REST API to "Show in REST API" ✅

**Configure Custom Fields (ACF):**
Create a field group for properties with these fields:
- `price` (Number)
- `location` (Text)
- `bedrooms` (Number)
- `bathrooms` (Number)
- `square_feet` (Number)
- `property_type` (Select: residential, commercial, land)
- `status` (Select: available, pending, sold, featured)

### 2. Environment Variables

Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

### 3. Using the API

The template includes ready-to-use API utilities in `lib/wordpress-api.ts`:

```typescript
import { getProperties, transformWordPressProperty } from '@/lib/wordpress-api'

// Fetch properties
const properties = await getProperties({ perPage: 10, featured: true })

// Transform to app format
const formattedProperties = properties.map(transformWordPressProperty)
```

### Example: Fetch Properties in a Component

```typescript
// app/properties/page.tsx
import { getProperties, transformWordPressProperty } from '@/lib/wordpress-api'
import { PropertyCard } from '@/components/property-card'

export default async function PropertiesPage() {
  const wpProperties = await getProperties({ perPage: 12 })
  const properties = wpProperties.map(transformWordPressProperty)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero-section.tsx    # Hero with search
│   ├── featured-properties.tsx
│   ├── property-card.tsx   # Individual property card
│   ├── service-highlight.tsx
│   ├── popular-cities.tsx
│   └── footer.tsx
└── lib/
    └── wordpress-api.ts    # WordPress REST API utilities
```

## Customization

### Colors
Edit `app/globals.css` to customize the color scheme. The template uses semantic design tokens:
- `--primary`: Main brand color (sophisticated dark brown)
- `--secondary`: Accent color (warm terracotta)
- `--background`: Page background
- `--foreground`: Text color

### Fonts
The template uses:
- **Inter** for body text (sans-serif)
- **Cormorant Garamond** for headings (serif)

Change fonts in `app/layout.tsx`:

```typescript
import { Cute_Font as Your_Font } from 'next/font/google'
```

### Content
- Update company name in `components/header.tsx` and `components/footer.tsx`
- Modify sample data in `components/featured-properties.tsx`
- Customize cities list in `components/popular-cities.tsx`

## WordPress REST API Endpoints

The template expects these endpoints:

- `GET /wp/v2/properties` - List properties
- `GET /wp/v2/properties/:id` - Single property
- `GET /wp/v2/properties?search=query` - Search properties
- `GET /wp/v2/properties?filter[meta_key]=featured&filter[meta_value]=true` - Featured properties

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_WORDPRESS_API_URL`
4. Deploy!

### Build Locally

```bash
npm run build
npm start
```

## Support

For WordPress-specific questions, refer to:
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [ACF REST API Documentation](https://www.advancedcustomfields.com/resources/wp-rest-api-integration/)

For Next.js questions:
- [Next.js Documentation](https://nextjs.org/docs)

## License

This template is free to use for personal and commercial projects.
