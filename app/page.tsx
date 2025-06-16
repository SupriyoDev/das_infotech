import HeroSlider from "@/components/shared/HeroSlider";

import ButtonGroup from "@/components/shared/ButtonGroup";
import Footer from "@/components/shared/Footer";
import HeroSliderBottomGrid from "@/components/shared/HeroSliderBottomGrid";
import { TopBrand } from "@/components/shared/TopBrands";

const Home = () => {
  return (
    <div className="w-full flex flex-col h-screen hide-scrollbar overflow-auto ">
      <HeroSlider />

      <div className="mt-0">
        <HeroSliderBottomGrid />
      </div>
      <div className="mb-5">
        <h2 className=" text-2xl lg:text-3xl xl:text-4xl text-center font-bold xl:font-extrabold bg-customBlue  text-white w-full py-2 lg:py-3 xl:py-4">
          {" "}
          TOP BRANDS
        </h2>
        <TopBrand />
      </div>

      {/* <div className="mb-40 bg-slate-200 py-10">
        <ButtonGroup />
      </div> */}
    </div>
  );
};

export default Home;
