import AnnouncementBanner from "@/components/AnnouncementBanner";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDF6F4]">
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <ProductsSection />
    </main>
  )
}

