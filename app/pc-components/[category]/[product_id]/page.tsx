"use client";
import CustomTabs from "@/components/shared/CustomTabs";
import ProductCatalogue from "@/components/shared/ProductCatalogue";
import { Button } from "@/components/ui/button";
import { desktopProductType } from "@/drizzle/schema";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CircleCheckBig, MessageCircle, Tag } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import { LuScanBarcode } from "react-icons/lu";

const demo = [
  "Platform: Desktop",
  "Market Segment: Mainstream Desktop",
  "Product Family: AMD Ryzen™ Processors",
  "Product Line: AMD Ryzen™ 5 Desktop Processors",
  "Consumer Use: Yes",
  "Architecture: Zen 3",
  "CPU Cores: 6",
  "Multithreading (SMT): Yes",
  "Threads: 12",
  "Max. Boost Clock: Up to 4.2GHz",
  "Base Clock: 3.6GHz",
  "L1 Cache: 384KB",
  "L2 Cache: 3MB",
  "L3 Cache: 16MB",
  "Default TDP: 65W",
  "Processor Technology for CPU Cores: TSMC 7nm FinFET",
  "CPU Compute Die (CCD) Size: 180mm²",
  "Package Die Count: 1",
  "Unlocked for Overclocking: Yes",
  "CPU Socket: AM4",
  "Socket Count: 1P",
  "Supporting Chipsets: X570, X470, X370, B550, B450, B350, A520",
  "CPU Boost Technology: Precision Boost 2",
  "Instruction Set: x86-64",
];

const demoString = `Name: AMD Ryzen 7 5800XT

Family: Ryzen

Series: Ryzen 5000 Series

Form Factor: Boxed Processor , Desktops

Market Segment: Enthusiast Desktop

Consumer Use: Yes

Commercial Use: No

Regional Availability: Global

Former Codename: Vermeer

Architecture: Zen 3

# of CPU Cores: 8

Multithreading (SMT): Yes

# of Threads: 16

Max. Boost Clock: Up to 4.8 GHz

Base Clock: 3.8 GHz

L1 Cache: 512 KB

L2 Cache: 4 MB

L3 Cache: 32 MB

Default TDP: 105W`;

interface Props {
  params: Promise<{ product_id: string }>;
}

const ProductPage = ({ params }: Props) => {
  const { product_id } = use(params);

  const {
    data: res,
    isError,
    isPending,
  } = useQuery<desktopProductType, Error>({
    queryKey: ["desktop_products", product_id],
    queryFn: async () => {
      const res = await axios.get("/api/get-desktop-id", {
        params: {
          desktopId: product_id,
        },
      });
      return res.data.desktop;
    },
    refetchOnWindowFocus: false,
    gcTime: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
  });

  if (isError) {
    return <div className=" container h-screen">Something went wrong</div>;
  }
  if (isPending) {
    return (
      <div className="container justify-center items-center  h-[80vh] flex">
        <p className="text-5xl font-bold text-blue-500">Loading...</p>
      </div>
    );
  }

  const discount = ((res.mrp! - res.price) * 100) / res.mrp!;

  return (
    <div className=" container min-h-screen mb-16">
      <div className=" w-full h-full bg-gray-100/90 ">
        {/* image and title grid */}
        <div className="w-full h-[600px] grid grid-cols-2 p-2">
          {/* image  */}
          <ProductCatalogue
            data={res.images}
            discount={String(discount.toFixed(0))}
          />
          {/* title  */}
          <div className="p-8 ">
            <div className="flex flex-col items-center">
              <p className=" text-4xl font-bold text-center text-slate-900">
                {res.name}
              </p>
              <div className=" bg-red-500 h-1 w-[20%] mt-3 "></div>
            </div>

            <div className="flex flex-col   gap-4 mt-8 ">
              <div className=" flex justify-between w-full">
                <p className="flex gap-2 items-center ">
                  {" "}
                  <Tag className="w-5 h-5" /> Brand
                </p>
                <p className=" ">{res.brand.toUpperCase()}</p>
              </div>
              <div className=" flex justify-between w-full">
                <p className="flex gap-2 items-center ">
                  {" "}
                  <LuScanBarcode /> Product Code
                </p>
                <p className=" ">{res.productCode}</p>
              </div>
              <div className=" flex justify-between w-full">
                <p className="flex gap-2 items-center ">
                  {" "}
                  <CircleCheckBig className="w-5 h-5" /> Availability
                </p>
                <p className=" ">In Stock</p>
              </div>

              <div className=" w-full bg-slate-300 h-[1px]"></div>
              <div className=" flex gap-5 items-center">
                <p className=" text-slate-600 text-2xl font-medium line-through">
                  ₹ {res.mrp || "0"}
                </p>
                <p className=" text-green-600 text-4xl font-medium">
                  ₹ {res.price}
                </p>{" "}
                <p className=" text-red-600 text-2xl font-medium">
                  -{discount.toFixed(0)}% Off
                </p>
              </div>
              <div className=" w-full bg-slate-300 h-[1px]"></div>
            </div>
            <Link href={"https://wa.me/919434340767"}>
              <Button className=" bg-red-500 hover:bg-red-500/90 text-lg mt-4">
                {" "}
                <MessageCircle /> Ask Question
              </Button>
            </Link>
          </div>
        </div>

        {/* description and specification  */}

        <div className=" w-full  mt-32 px-4">
          <CustomTabs
            name={res.name}
            description={res.description}
            productCode={res.productCode}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
