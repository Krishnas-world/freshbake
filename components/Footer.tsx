"use client";

export default function Footer() {
  return (
    <footer className="bg-[#2D1810] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-around gap-6">
        {/* Left Section - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-wide uppercase">My Fresh Bake</h2>
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

        {/* Right Section - Contact & Map */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          {/* WhatsApp Redirect */}
          <a 
            href="https://wa.me/7488577653?text=Hi%20there,%20I'm%20interested%20in%20your%20baked%20goods!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-yellow-400 transition block mt-2"
          >
            📞 7488577653 (WhatsApp)
          </a>
          <p className="text-sm text-gray-300 mt-2">
            📍 Shiv Mandir Pipra Chowk, Near G.D College, Begusarai
          </p>

          {/* Embedded Google Map */}
          <div className="mt-4 flex max-w-xs mx-auto md:mx-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1423.4547262889525!2d86.1218766!3d25.4154087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI0JzU1LjUiTiA4NsKwMDcnMTguOCJF!5e3!3m2!1sen!2sin!4v1707471930000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        © 2025 My Fresh Bake. All rights reserved.
      </div>
    </footer>
  );
}
