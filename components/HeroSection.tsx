"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg.jpg')"
       }}
    >
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="rounded-3xl p-4 sm:p-6 lg:p-12">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12">
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
             {/* Coming Soon Section */}
             <div className="mt-4 sm:mt-6 flex flex-col items-center lg:items-start">
                <span className="bg-gray-900 text-white text-xs sm:text-sm px-4 py-2 rounded-full font-semibold tracking-wide animate-pulse">
                  WEB-BASED SERVICES COMING SOON 🚀
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-[#2D1810] leading-tight text-center lg:text-left">
                <span className="block mb-1 sm:mb-2">FRESH BAKE</span>
                <span className="relative inline-block">
                  DELIGHTS
                  <span className="absolute -top-2 sm:-top-3 right-0 transform rotate-2 animate-pulse">
                    <span className="bg-orange-500 block text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md">
                      HANDMADE
                    </span>
                  </span>
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-[#2D1810] text-center lg:text-left">
                ARTISAN BAKERY
                <br />
                CRAFTED WITH LOVE
                <br />
                SINCE 2024
                <span className="inline-block ml-1 sm:ml-2 bg-blue-400 text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-md animate-bounce">
                  PREMIUM
                </span>
              </h2>

              <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium text-center lg:text-left">
                Every bite tells a story of perfection. Taste the difference in every slice!
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/order"
                  className="bg-yellow-300 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  ORDER NOW • SAVE 50₹ 🎂
                </Link>
                <Link
                  href="/menu"
                  className="flex items-center gap-2 font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300"
                >
                  VIEW MENU
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </Link>
              </div>


              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-xs sm:text-sm">
                  Shiv Mandir Pipra chowk, Near G.D College, Begusarai
                </span>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-auto flex justify-center">
              <div className="absolute inset-0 bg-yellow-300 rounded-3xl -z-10 transform -rotate-2 hidden sm:block" />
              <Image
                src="/cakes.webp"
                alt="Freshly baked sliced bread"
                width={350}
                height={280}
                className="rounded-3xl transform hover:scale-105 transition-transform duration-500 sm:max-w-[300px] md:max-w-[350px] lg:max-w-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
