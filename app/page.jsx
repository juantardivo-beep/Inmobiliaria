import Header from "@/components/organisms/header/Header"
import HeroSection from "@/components/organisms/HeroSection"
import FeaturedProperties from "@/components/organisms/FeaturedProperties"
import ServiceHighlight from "@/components/organisms/ServiceHighlight"
import PopularCities from "@/components/organisms/PopularCities"
import Footer from "@/components/organisms/Footer"

export default function HomePage() {
  return (
    <main className="min-vh-100">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <ServiceHighlight />
      {/* <PopularCities /> */}
      <Footer />
    </main>
  )
}
