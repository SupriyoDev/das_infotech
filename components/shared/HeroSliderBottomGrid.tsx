import React from "react";

import psu from "@/public/assets/slider-bottom/psu.jpg";
import gpu from "@/public/assets/slider-bottom/gpu.png";
import memory from "@/public/assets/slider-bottom/memory.png";
import motherboard from "@/public/assets/slider-bottom/motherboard.jpg";
import celebration from "@/public/assets/slider-bottom/newYearCelebration.png";
import Image from "next/image";
import Link from "next/link";

const gridImages = [
  { url: psu, title: "", href: "" },
  { url: gpu, title: "", href: "" },
  { url: memory, title: "", href: "" },
  { url: motherboard, title: "", href: "" },
];

const HeroSliderBottomGrid = () => {
  return (
    <div className="bg-gray-100 mb-10 p-3 md:p-8 ">
      <div className=" 2xl:container  ">
        <div className=" flex gap-2 items-center justify-center overflow-hidden mb-3">
          {gridImages.map((image, i) => (
            <Link href={image.href} className="">
              <Image
                src={image.url}
                alt={image.title}
                height={315}
                width={315}
                className="rounded-xl"
              />
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Image src={celebration} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSliderBottomGrid;
