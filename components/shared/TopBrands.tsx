import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import acer from "@/public/assets/top_brands/Acer-150x150.png";
import benq from "@/public/assets/top_brands/Benq-150x150.png";
import colorful from "@/public/assets/top_brands/Colorful-150x150.png";
import crucial from "@/public/assets/top_brands/Crucial-150x150.png";
import dell from "@/public/assets/top_brands/Dell-150x150.png";
import Adata from "@/public/assets/top_brands/Adata-150x150.png";
import seagate from "@/public/assets/top_brands/Seagate-150x150.png";
import viewsonic from "@/public/assets/top_brands/Viewsonic-150x150.png";
import predator from "@/public/assets/top_brands/predator-150x150.png";
import logitech from "@/public/assets/top_brands/logitech-150x150.png";
import hp from "@/public/assets/top_brands/HP-150x150.png";
import nvidia from "@/public/assets/top_brands/nvidia-150x150.png";
import swmsung from "@/public/assets/top_brands/Samsung-150x150.png";
import gigabyte from "@/public/assets/top_brands/Gigabyte-150x150.png";
import intel from "@/public/assets/top_brands/intel-logo-150x150.png";
import Hyperx from "@/public/assets/top_brands/HyperX-150x150.png";
import kingston from "@/public/assets/top_brands/Kingston-150x150.png";
import msi from "@/public/assets/top_brands/MSI-150x150.png";
import deepcool from "@/public/assets/top_brands/Deepcool-logo-black-150x150.png";
import coolermaster from "@/public/assets/top_brands/Cooler-Master-150x150.png";
import epson from "@/public/assets/top_brands/Epson-150x150.png";
import antec from "@/public/assets/top_brands/Antec-150x150.png";
import dlink from "@/public/assets/top_brands/D - Link-150x150.png";
import amd from "@/public/assets/top_brands/amd-new-150x150.png";
import lg from "@/public/assets/top_brands/LG-150x150.png";
import wd from "@/public/assets/top_brands/WD-150x150.png";
import asus from "@/public/assets/top_brands/Asus-150x150.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Acer",
    img: acer,
  },
  {
    name: "Asus",
    img: asus,
  },

  {
    name: "Benq",
    img: benq,
  },
  {
    name: "Colorful",
    img: colorful,
  },
  {
    name: "Dell",
    img: dell,
  },
  {
    name: "Epson",
    img: epson,
  },
  {
    name: "crucial",
    img: crucial,
  },
  {
    name: "deepcool",
    img: deepcool,
  },
  {
    name: "logitech",
    img: logitech,
  },
  {
    name: "msi",
    img: msi,
  },
  {
    name: "lg",
    img: lg,
  },
  {
    name: "swmsung",
    img: swmsung,
  },
  {
    name: "gigabyte",
    img: gigabyte,
  },
  {
    name: "nvidia",
    img: nvidia,
  },
  {
    name: "antec",
    img: antec,
  },
  {
    name: "coolermaster",
    img: coolermaster,
  },
  {
    name: "viewsonic",
    img: viewsonic,
  },
  {
    name: "predator",
    img: predator,
  },
  {
    name: "wd",
    img: wd,
  },
  {
    name: "intel",
    img: intel,
  },
  {
    name: "amd",
    img: amd,
  },
  {
    name: "kingston",
    img: kingston,
  },
  {
    name: "hyperx",
    img: Hyperx,
  },
  {
    name: "adata",
    img: Adata,
  },
  {
    name: "seagate",
    img: seagate,
  },
  {
    name: "hp",
    img: hp,
  },
  {
    name: "dlink",
    img: dlink,
  },
];

const firstRow = brands.slice(0, brands.length / 2);
const secondRow = brands.slice(brands.length / 2);

const Brands = ({ img, name }: { img: StaticImageData; name: string }) => {
  return (
    <Link href={`/brands/${name.toLowerCase()}`}>
      <figure
        className={cn(
          "w-20 lg:w-40 xl:w-60 cursor-pointer flex items-center justify-center overflow-hidden rounded-xl border  p-4",
          // light styles
          "border-gray-950/[.1] bg-transparent hover:border hover:border-blue-400 ",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <Image src={img} alt={name} />
      </figure>
    </Link>
  );
};

export function TopBrand() {
  return (
    <div className="relative flex h-[200px] lg:h-[350px] xl:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((brands) => (
          <Brands key={brands.name} {...brands} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((brands) => (
          <Brands key={brands.name} {...brands} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
