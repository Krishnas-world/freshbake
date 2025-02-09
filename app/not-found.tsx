"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDF6F4] text-[#2D1810] px-6">
      {/* Animated Icon */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Image
          src="/bg.jpg"
          alt="Lost Cake"
          width={180}
          height={180}
          className="rounded-full shadow-lg border-4 border-yellow-300"
        />
      </motion.div>

      {/* Text Section */}
      <h1 className="text-5xl sm:text-6xl font-black mt-6">We are still cooking this page.</h1>
      <p className="text-lg sm:text-xl font-medium mt-2 text-gray-700">
        Looks like you're lost in the bakery.
      </p>
      <p className="text-sm sm:text-base text-gray-600 mt-1">
        This page might is the oven or doesn't exist.
      </p>

      {/* Back Home Button */}
      <Link
        href="/"
        className="mt-6 bg-yellow-300 px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-md"
      >
        <ArrowLeft className="w-5 h-5" />
        Go Back Home
      </Link>
    </div>
  );
}
