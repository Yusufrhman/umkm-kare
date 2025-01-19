"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProductImageGallery({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className={`flex gap-2 sm:gap-4 w-full h-full ${className}`}>
      {/* Gambar Utama */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
        className="aspect-[12/11] sm:aspect-[2/1] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden relative w-3/4 shadow-lg"
      >
        <Image
          className="w-full h-full object-cover"
          src={`${process.env.NEXT_PUBLIC_ADMIN_URL}storage/${images[activeIndex]}`}
          width={500}
          height={500}
          alt=""
        />
      </motion.div>

      {/* Gambar Thumbnail */}
      <ul className="flex flex-col h-full gap-2 sm:gap-4 md:gap-4 w-1/4">
        {images.map((image, i) => {
          const isActive = activeIndex === i;
          return (
            <li key={image} className="h-full relative">
              <button
                onClick={() => setActiveIndex(i)}
                className="h-full w-full rounded-lg sm:rounded-xl md:rounded-2xl relative shadow-lg"
              >
                {isActive && (
                  <motion.div
                    layoutId="product-gallery-indicator"
                    className="absolute top-0 w-full h-full bg-transparent ring-4 ring-custom-sage-green rounded-lg sm:rounded-xl md:rounded-2xl"
                  ></motion.div>
                )}
                <Image
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
                  src={`${process.env.NEXT_PUBLIC_ADMIN_URL}storage/${image}`}
                  layout="fill"
                  alt=""
                  style={{ objectFit: "cover" }} // Menggunakan object-cover untuk proporsi gambar tetap
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
