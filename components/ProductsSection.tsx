"use client";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  const productImages: ProductImages = {
    "CAKE": [
      { url: "https://hawk-air-space.b-cdn.net/Cakes//BlackForest/BlackForestCake1.jpg", title: "Black Forest Cake" },
      { url: "https://hawk-air-space.b-cdn.net/Cakes//ButterScotch/ButterScotchCake2.jpeg", title: "Butterscotch Cake" },
      {
        url: 'https://hawk-air-space.b-cdn.net/Cakes//KidsCake/KidsCake16.png',title: "Kids Cake"
      },    {
        url:   'https://hawk-air-space.b-cdn.net/Cakes//KidsCake/KidsCake20.png',
        title: "Kids Cake"
      },      {
        url: 'https://hawk-air-space.b-cdn.net/Cakes//VanillaCake/VanillaCake6.jpeg',title: "Vanilla Cake"
      },{
        url:   'https://hawk-air-space.b-cdn.net/Cakes//ChocolateCake/ChocoCake5.jpeg',
        title: "Chocolate Cake"
      },
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{productName}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {productName && productImages[productName]?.map((image: ProductImage, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

type Product = {
  name: string;
  count: number;
  color: string;
};

const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products: Product[] = [
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
          PRODUCT WE BAKE <br /> HERE DAILY{" "}
          <span className="inline-block ml-2">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full shadow-lg">
              <span className="text-2xl">🍪</span>
            </span>
          </span>
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-xl">
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
            className={`${product.color} px-6 py-4 rounded-full flex items-center justify-between shadow-md transition-transform hover:scale-105 cursor-pointer`}
          >
            <span className="font-bold text-lg">{product.name}</span>
            <span className="bg-[#2D1810] text-white text-sm px-3 py-1 rounded-full font-semibold">
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