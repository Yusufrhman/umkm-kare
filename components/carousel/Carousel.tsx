"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import ArrowButton from "../button/ArrowButton";

type Item = {
  title: string;
  image: StaticImageData;
};

export default function Carousel({ items, className }: { items: Item[], className: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div
      className={`w-full h-full rounded-t-xl overflow-clip relative ${className}`}
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Image
          src={items[currentIndex].image}
          alt={items[currentIndex].title}
          className="w-full h-full object-cover rounded-xl"
          layout="fill"
        />
      </motion.div>
      <div className="absolute left-0 bottom-0 z-30 p-6 md:p-8 xl:p-10 w-full md:w-1/2  ">
        <motion.h2
          key={items[currentIndex].title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="font-semibold tracking-wider leading-[1rem] lg:leading-[2rem] xl:leading-[3rem] text-lg sm:text-xl md:text-3xl xl:text-4xl text-white line-clamp-2 md:line-clamp-3 overflow-hidden"
        >
          {items[currentIndex].title}
        </motion.h2>
      </div>

      <div className="absolute right-0 bottom-0 px-20 py-10 z-30  gap-6 items-center justify-center hidden md:flex">
        <ArrowButton direction="left" onClick={prevItem} />
        <ArrowButton onClick={nextItem} />
      </div>
      <div className="w-full h-full absolute bg-gradient-to-t from-[#1f1f1fdf] via-[#4242423a]  to-transparent z-20"></div>
    </div>
  );
}
