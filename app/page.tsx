import AboutUsSection from "@/components/AboutUs";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import Navbar from "@/components/Navbar";

import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF6F4]">
      <AnnouncementBanner />
      <Navbar />
      <ComingSoon />
      <HeroSection />
      <ProductsSection />
      <InfiniteCarousel />
      <AboutUsSection />
      <Footer />
    </main>
  )
}

