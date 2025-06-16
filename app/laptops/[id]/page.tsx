"use client";

import CustomTabs from "@/components/shared/CustomTabs";
import ProductCatalogue from "@/components/shared/ProductCatalogue";
import { Button } from "@/components/ui/button";
import { laptopProductType } from "@/drizzle/schema";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CircleCheckBig, MessageCircle, Tag } from "lucide-react";
import React, { use } from "react";
import { LuScanBarcode } from "react-icons/lu";
interface Props {
  params: Promise<{ id: string }>;
}

const Laptop = ({ params }: Props) => {
  const { id } = use(params);

  const { data, isError, isPending } = useQuery<laptopProductType, Error>({
    queryKey: ["laptop_products", id],
    queryFn: async () => {
      const res = await axios.get("/api/get-laptop-id", {
        params: {
          laptopId: id,
        },
      });
      return res.data.laptop;
    },
    refetchOnWindowFocus: false,
    gcTime: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
  });

  if (isError) {
    return <div>Something went wrong...</div>;
  }
  if (isPending) {
    return (
      <div className="container justify-center items-center  h-[80vh] flex">
        <p className="text-5xl font-bold text-blue-500">Loading...</p>
      </div>
    );
  }
  const images = [data?.featureImage, ...data!.images];

  return (
    <div className=" container min-h-screen mb-16">
      <div className=" w-full h-full bg-gray-100/90 ">
        {/* image and title  */}
        <div className="w-full h-[700px] grid grid-cols-2 p-2">
          <ProductCatalogue data={images} />
          {/* title  */}
          <div className="p-8 ">
            <div className="flex flex-col items-center">
              <p className=" text-4xl font-bold text-center text-slate-900">
                {data.name}
              </p>
              <div className=" bg-red-500 h-1 w-[20%] mt-3 "></div>
            </div>

            <div className="flex flex-col   gap-4 mt-8 ">
              <div className=" flex justify-between w-full">
                <p className="flex gap-2 items-center ">
                  {" "}
                  <Tag className="w-5 h-5" /> Brand
                </p>
                <p className=" ">{data.brand.toUpperCase()}</p>
              </div>
              <div className=" flex justify-between w-full">
                <p className="flex gap-2 items-center ">
                  {" "}
                  <LuScanBarcode /> Product Code
                </p>
                <p className=" ">{data.modelNo}</p>
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
                  ₹ {data.mrp || "0"}
                </p>
                <p className=" text-green-600 text-4xl font-medium">
                  ₹ {data.price}
                </p>
              </div>
              <div className=" w-full bg-slate-300 h-[1px]"></div>
            </div>
            <Button className=" bg-red-500 hover:bg-red-500/90 text-lg mt-4">
              {" "}
              <MessageCircle /> Ask Question
            </Button>
          </div>
        </div>

        {/* description and specification  */}

        <div className=" w-full  mt-10 px-4">
          <CustomTabs
            name={data.name}
            description={data.description}
            productCode={data.modelNo}
          />
        </div>
      </div>
    </div>
  );
};

export default Laptop;
