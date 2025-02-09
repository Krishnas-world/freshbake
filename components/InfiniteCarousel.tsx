"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const items = [
  { src: "/snacks.jpg", name: "Snacks" },
  { src: "/icecream.jpg", name: "Ice Creams" },
  { src: "/flowers.avif", name: "Flowers" },
  { src: "/dessert.jpg", name: "Desserts" },
  { src: "/cakes.webp", name: "Cakes" },
  { src: "/combos.jpeg", name: "Gifts" },
];

export default function InfiniteCarousel() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        },
      });
    }
  }, [controls, isPaused]);

  return (
    <div className="overflow-hidden w-full py-6 bg-[#FDF6F4] rounded-xl shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#2D1810] mb-4">
        Our Products 🍰
      </h2>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={controls}
          onMouseEnter={() => {
            controls.stop(); // Pause exactly where it is
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setIsPaused(false); // Resume from current position
          }}
        >
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] sm:min-w-[250px] md:min-w-[300px] p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 overflow-hidden rounded-full border-4 border-yellow-300">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg sm:text-xl font-semibold text-[#2D1810] mt-3">
                {item.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
