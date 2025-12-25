import Header from "@/components/organisms/header/Header"
import HeroSection from "@/components/organisms/hero/HeroSection"
import FeaturedProperties from "@/components/organisms/properties/Properties"
import ServiceHighlight from "@/components/organisms/ServiceHighlight"
import Footer from "@/components/organisms/footer/Footer"

export default function HomePage() {
  return (
    <main className="min-vh-100">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      {/* <ServiceHighlight /> */}
      <Footer />
    </main>
  )
}
