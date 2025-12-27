import HeroSection from "../components/organisms/hero/HeroSection"
import FeaturedProperties from "../components/organisms/properties/Properties"

export default function HomePage() {
  return (
    <main className="min-vh-100">
      <HeroSection />
      <FeaturedProperties />
      {/* <ServiceHighlight /> */}
    </main>
  )
}
