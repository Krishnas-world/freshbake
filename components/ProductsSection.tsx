"use client";

import AboutUsSection from "./AboutUs";

export default function ProductsSection() {
  const products = [
    { name: "CAKE", count: 12, color: "bg-[#E8E1E1] text-[#4A1E12]" },
    { name: "DILPASAND", count: 8, color: "bg-[#EDE7FF] text-[#4A1E12]" },
    { name: "ICE-CREAMS", count: 27, color: "bg-[#D4F3F9] text-[#026772]" },
    { name: "SNACKS", count: 23, color: "bg-[#E8E1E1] text-[#1A1A1A]" },
    { name: "FLOWERS", count: 21, color: "bg-yellow-300 text-[#7A4900]" },
    { name: "GIFTS", count: 13, color: "bg-[#FFE7DE] text-[#9C4221]" },
  ];

  return (
    <div className="container mx-auto px-12 py-12 flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left Section (Heading) */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2D1810] tracking-tight uppercase">
          PRODUCT WE BAKE
          <br /> HERE DAILY
          <span className="inline-block ml-2">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full shadow-lg">
              <span className="text-2xl">🍪</span>
            </span>
          </span>
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-xl">
          Fresh Bake is an artisan bakery dedicated to crafting handmade cakes, pastries, and baked goods using the finest ingredients. Known for its fresh, preservative-free treats, Fresh Bake offers a delightful selection of cakes, snacks, ice creams, and custom desserts, all made with love and care.
        </p>
      </div>

      {/* Right Section (Products) */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className={`${product.color} px-6 py-4 rounded-full flex items-center justify-between shadow-md transition-transform hover:scale-105`}
          >
            <span className="font-bold text-lg">{product.name}</span>
            <span className="bg-[#2D1810] text-white text-sm px-3 py-1 rounded-full font-semibold">
              {product.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
