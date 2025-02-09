"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#2D1810] leading-tight">
                  <div className="relative inline-block mb-2">
                    FRESH
                    <span className="absolute -top-3 sm:-top-4 right-0 transform -rotate-2 animate-pulse">
                      <span className="bg-green-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md">
                        DAILY
                      </span>
                    </span>
                  </div>
                  {" "}
                  <div className="relative inline-block">
                    DELIGHTS
                    <span className="absolute -top-3 sm:-top-4 right-0 transform rotate-2 animate-pulse">
                      <span className="bg-orange-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md">
                        HANDMADE
                      </span>
                    </span>
                  </div>
                </h1>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#2D1810] leading-tight">
                  ARTISAN BAKERY
                  <br />
                  CRAFTED WITH LOVE
                  <br />
                  SINCE 2024
                  <span className="inline-block ml-2 bg-blue-400 text-white text-xs sm:text-sm px-3 py-1 rounded-full shadow-md animate-bounce">
                    PREMIUM
                  </span>
                </h2>
              </div>

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium">
                Every bite tells a story of perfection
                <br className="hidden sm:block" />
                Taste the difference in every slice!
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/order"
                  className="bg-yellow-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  ORDER NOW • SAVE 50₹
                  <span className="text-base sm:text-lg animate-bounce">🎂</span>
                </Link>
                <Link
                  href="/menu"
                  className="flex items-center gap-2 font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300"
                >
                  VIEW MENU
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </Link>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-sm">Shiv Mandir Pipra chowk, Near G.D College, Begusarai</span>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative">
              <div 
                className="absolute inset-0 bg-yellow-300 rounded-3xl -z-10 transform hover:rotate-0 transition-transform duration-500"
                style={{ transform: 'rotate(-2deg)' }}
              />
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/cakes.webp"
                  alt="Freshly baked sliced bread"
                  width={400}
                  height={200}
                  className="w-80 rounded-3xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}