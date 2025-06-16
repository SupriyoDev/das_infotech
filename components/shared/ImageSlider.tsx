"use client";

import React, { useState, useEffect } from "react";
import ArrowRight from "@/public/assets/menu-icons/arrow-right.svg";
import ArrowLeft from "@/public/assets/menu-icons/arrow-left.svg";
import image1 from "@/public/assets/hero-slider/slider1.jpg";
import image2 from "@/public/assets/hero-slider/slider2.jpg";
import image3 from "@/public/assets/hero-slider/slider3.png";
import Image from "next/image";

const images = [
  { src: image3, alt: "Slide 3" },
  { src: image1, alt: "Slide 1" },
  { src: image2, alt: "Slide 2" },
];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images - replace with your actual images

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 1 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-full max-h-[86vh] overflow-hidden flex items-end ">
      {/* Image container */}

      <div className="w-full h-full flex items-center justify-center  ">
        {currentIndex === 0 && (
          <Image
            src={image1}
            alt=""
            width={1400}
            height={1200}
            className="  w-full h-full "
          />
        )}
        {currentIndex === 1 && (
          <Image src={image2} alt="" className="w-full h-full " />
        )}
        {currentIndex === 2 && (
          <Image src={image3} alt="" className="w-full h-full " />
        )}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute w-3 h-3 flex items-center bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <Image src={ArrowLeft} alt="" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute w-3 h-3 flex items-center bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <Image src={ArrowRight} alt="" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
