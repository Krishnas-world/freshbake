export default function ProductsSection() {
  const products = [
    { name: "CAKE", count: 12, color: "bg-[#E8E1E1]" },
    { name: "DILPASAND", count: 8, color: "bg-[#EDE7FF]" },
    { name: "ICE-CREAMS", count: 27, color: "bg-[#D4F3F9]" },
    { name: "SNACKS", count: 23, color: "bg-[#E8E1E1]" },
    { name: "FLOWERS", count: 21, color: "bg-yellow-300" },
    { name: "GIFTS", count: 13, color: "bg-[#FFE7DE]" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2D1810] mb-6 md:mb-8">
        PRODUCT WE BAKE
        <br />
        HERE DAILY
        <span className="inline-block ml-2">
          <span className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full">
            <span className="text-2xl">🥨</span>
          </span>
        </span>
      </h2>
      
      <div className="flex flex-wrap gap-3 md:gap-4">
        {products.map((product) => (
          <div
            key={product.name}
            className={`${product.color} px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 md:gap-3 transition-transform hover:scale-105`}
          >
            <span className="font-bold text-sm md:text-base">{product.name}</span>
            <span className="bg-[#2D1810] text-white text-xs md:text-sm px-2 py-0.5 rounded-full min-w-[1.5rem] md:min-w-[2rem] text-center">
              {product.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
