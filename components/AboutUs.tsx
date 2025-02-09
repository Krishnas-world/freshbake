export default function AboutUsSection() {
  const highlights = [
    {
      title: "Handcrafted with Love",
      description: "Every cake and pastry is made from scratch using the finest ingredients.",
      color: "bg-[#FFE7DE] text-[#9C4221]",
    },
    {
      title: "100% Fresh & Natural",
      description: "We use no preservatives—just fresh, natural ingredients for the best taste.",
      color: "bg-[#D4F3F9] text-[#026772]",
    },
    {
      title: "Custom Cakes & More",
      description: "Personalized cakes, pastries, and desserts made to order for every occasion.",
      color: "bg-yellow-300 text-[#7A4900]",
    },
    {
      title: "Locally Sourced",
      description: "We support local farmers and suppliers to ensure premium quality.",
      color: "bg-[#EDE7FF] text-[#4A1E12]",
    },
  ];

  return (
    <section className="w-full bg-cover bg-center relative py-12"
      style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>

      <div className="relative container mx-auto px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D1810] mb-8">
          ABOUT MY FRESH BAKE 🎂
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className={`${item.color} p-6 rounded-2xl shadow-md hover:scale-105 transition-transform`}>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
