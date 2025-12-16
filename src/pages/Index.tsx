import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PropertyListings from "@/components/PropertyListings";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PropertyListings />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
