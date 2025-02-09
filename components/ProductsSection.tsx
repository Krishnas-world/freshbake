"use client";
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

type ProductImage = {
  url: string;
  title: string;
};

type ProductImages = {
  [key: string]: ProductImage[];
};

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productName: string | null;
};
const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, productName }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const productImages: ProductImages = {
    "CAKE": [
      { url: "https://hawk-air-space.b-cdn.net/Cakes//BlackForest/BlackForestCake1.jpg", title: "Black Forest Cake" },
      { url: "https://hawk-air-space.b-cdn.net/Cakes//ButterScotch/ButterScotchCake2.jpeg", title: "Butterscotch Cake" },
      { url: "https://hawk-air-space.b-cdn.net/Cakes//KidsCake/KidsCake16.png", title: "Kids Cake" },
      { url: "https://hawk-air-space.b-cdn.net/Cakes//KidsCake/KidsCake20.png", title: "Kids Cake" },
      { url: "https://hawk-air-space.b-cdn.net/Cakes//VanillaCake/VanillaCake6.jpeg", title: "Vanilla Cake" },
      { url: "https://hawk-air-space.b-cdn.net/Cakes//ChocolateCake/ChocoCake5.jpeg", title: "Chocolate Cake" },
    ],
    "DILPASAND": [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuRuFA-EXJxemTM7e1Mch-viV49SoKlsX8g&s", title: "Classic Dilpasand" },
      { url: "https://olivemithai.com/cdn/shop/files/1C1A1194.jpg?v=1693822826", title: "Fruit Dilpasand" },
    ],
    "ICE-CREAMS": [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfj3QrdNBPkehrqc0-XKhXzXnV4DMFNTkLXA&s", title: "Vanilla" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNb4qLVc8li_M2NHBfEl14DaVpUCmplY5lg&s", title: "Chocolate" },
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJAmrhGITVl_239s1woqUKuYDi-F5RtYETw&s", title: "Strawberry" },
    ],
    "SNACKS": [
      { url: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-Recipe.jpg", title: "Samosa" },
      { url: "https://www.marcellinaincucina.com/wp-content/uploads/2022/04/chocolate-pastry-puffs-5-2.jpg", title: "Puff Pastry" },
    ],
    "FLOWERS": [
      { url: "https://zivmart.com/wp-content/uploads/2024/09/flower-bouquet-products-10.jpg", title: "Rose Bouquet" },
      { url: "https://cdn.cake2homes.com/img/2023/01/10/18/41_33_49628.webp", title: "Mixed Flowers" },
    ],
    "GIFTS": [
      { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxOVsrqOnU6BiRD1joc4uTfvZUDOLvnZuFw&s", title: "Gift Basket" },
      { url: "https://www.thegourmetbox.in/cdn/shop/files/20230829_162443_1200x1200.jpg?v=1693307224", title: "Gift Box" },
    ],
  };
  const images = productName ? productImages[productName] || [] : [];

  useEffect(() => {
    setActiveImageIndex(0);
    setIsZoomed(false);
  }, [productName]); // Reset on product change

  const handlePrevious = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-11/12 p-0 overflow-hidden">
        <div className="relative w-full bg-white">
          <DialogTitle className="sr-only">{productName} Gallery</DialogTitle>

          {/* Title */}
          <div className="relative p-4 border-b">
            <h2 className="text-lg sm:text-xl font-semibold text-center">{productName}</h2>
          </div>

          {/* Main Image Display */}
          <div className="flex flex-col">
            <div className="relative flex justify-center items-center overflow-hidden">
              <div className="relative w-full bg-gray-50 flex justify-center items-center"
                style={{ height: 'calc(100vh - 400px)', minHeight: '250px' }}>
                {images[activeImageIndex] && (
                  <img
                    src={images[activeImageIndex].url}
                    alt={images[activeImageIndex].title}
                    className={`max-h-full object-contain transition-transform duration-300 ${
                      isZoomed ? 'scale-150' : 'scale-100'
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  />
                )}

                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevious}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Zoom Button */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 p-1 sm:p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                >
                  {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                </button>
              </div>
            </div>

            {/* Image Title & Index */}
            <div className="p-3 sm:p-4 border-t border-b text-center">
              <p className="text-sm sm:text-base">
                <span className="font-medium">{images[activeImageIndex]?.title}</span>
                <span className="text-xs sm:text-sm text-gray-500 ml-1">
                  {activeImageIndex + 1} of {images.length}
                </span>
              </p>
            </div>

            {/* Thumbnail Gallery */}
            <div className="p-3 sm:p-4">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 sm:gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                      activeImageIndex === index 
                        ? 'ring-2 ring-blue-500 scale-95'
                        : 'hover:scale-95'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>

  );
};
const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    { name: "CAKE", count: 12, color: "bg-[#E8E1E1] text-[#4A1E12]" },
    { name: "DILPASAND", count: 8, color: "bg-[#EDE7FF] text-[#4A1E12]" },
    { name: "ICE-CREAMS", count: 27, color: "bg-[#D4F3F9] text-[#026772]" },
    { name: "SNACKS", count: 23, color: "bg-[#E8E1E1] text-[#1A1A1A]" },
    { name: "FLOWERS", count: 21, color: "bg-yellow-300 text-[#7A4900]" },
    { name: "GIFTS", count: 13, color: "bg-[#FFE7DE] text-[#9C4221]" },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Left Section (Heading) */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2D1810] tracking-tight uppercase">
          PRODUCT WE BAKE <br /> HERE DAILY{" "}
          <span className="inline-block ml-2">
            <span className="inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 bg-orange-500 rounded-full shadow-lg">
              <span className="text-xl md:text-2xl">🍪</span>
            </span>
          </span>
        </h2>
        <p className="text-base md:text-lg text-gray-700 mt-4 max-w-xl mx-auto md:mx-0">
          Fresh Bake is an artisan bakery dedicated to crafting handmade cakes,
          pastries, and baked goods using the finest ingredients. Known for its
          fresh, preservative-free treats, Fresh Bake offers a delightful
          selection of cakes, snacks, ice creams, and custom desserts, all made
          with love and care.
        </p>
      </div>

      {/* Right Section (Products) */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <button
            key={product.name}
            onClick={() => setSelectedProduct(product.name)}
            className={`${product.color} px-4 py-3 md:px-6 md:py-4 rounded-full flex items-center justify-between shadow-md transition-transform hover:scale-105 cursor-pointer text-sm md:text-lg`}
          >
            <span className="font-bold">{product.name}</span>
            <span className="bg-[#2D1810] text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-full font-semibold">
              {product.count}
            </span>
          </button>
        ))}
      </div>

      {/* Modal */}
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct}
      />
    </div>
  );
};

export default ProductsSection;
