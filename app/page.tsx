import Header from "@/components/shared/Header";
import HeroSlider from "@/components/shared/HeroSlider";
import React from "react";

import HeroSliderBottomGrid from "@/components/shared/HeroSliderBottomGrid";
import AnouncementSection from "@/components/shared/AnouncementSection";
import Footer from "@/components/shared/Footer";
import { TopBrand } from "@/components/shared/TopBrands";
import ButtonGroup from "@/components/shared/ButtonGroup";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <AnouncementSection />
      <Header />
      <HeroSlider />

      <div className="mt-0">
        <HeroSliderBottomGrid />
      </div>
      <div className="mb-5">
        <h2 className=" text-2xl lg:text-3xl xl:text-4xl text-center font-bold xl:font-extrabold bg-customBlue  text-white w-full py-2 lg:py-3 xl:py-4">
          {" "}
          Top Brands
        </h2>
        <TopBrand />
      </div>

      <div className="mb-40 bg-slate-200 py-10">
        <ButtonGroup />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
