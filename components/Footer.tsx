"use client";

export default function Footer() {
  return (
    <footer className="bg-[#2D1810] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Left Section - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-wide uppercase">Fresh Bake</h2>
          <p className="text-sm text-gray-300 mt-2 max-w-xs">
            Crafting delicious, handmade baked goods with love and the finest ingredients.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <a href="/menu" className="text-gray-300 hover:text-yellow-300 transition">Menu</a>
          <a href="/order" className="text-gray-300 hover:text-yellow-300 transition">Order Now</a>
          <a href="/about" className="text-gray-300 hover:text-yellow-300 transition">About Us</a>
          <a href="/contact" className="text-gray-300 hover:text-yellow-300 transition">Contact</a>
        </div>

        {/* Right Section - Socials & Location */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 justify-center md:justify-end mt-2">
            <a href="#" className="hover:text-yellow-300 transition">📷 Instagram</a>
            <a href="#" className="hover:text-yellow-300 transition">📘 Facebook</a>
            <a href="#" className="hover:text-yellow-300 transition">🐦 Twitter</a>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            📍 Shiv Mandir Pipra Chowk, Near G.D College, Begusarai
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        © 2025 Fresh Bake. All rights reserved.
      </div>
    </footer>
  );
}
