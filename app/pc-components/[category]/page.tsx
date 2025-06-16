"use client";

import { FilterSelect } from "@/components/shared/filterSelect";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DESKTOP_PRODUCT_BRANDS } from "@/constants/data";
import { desktopProductType } from "@/drizzle/schema";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { IoFilter, IoSparkles } from "react-icons/io5";
import { LuScanBarcode } from "react-icons/lu";

interface Props {
  params: Promise<{ category: string }>;
}

const ProductCategory = ({ params }: Props) => {
  const { category } = use(params);
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState<string | number>("");
  const [maxPrice, setMaxPrice] = useState<string | number>("");

  const { data, isError, isPending } = useQuery<desktopProductType[], Error>({
    queryKey: ["desktop_products", category, brand, minPrice, maxPrice],
    queryFn: async () => {
      const res = await axios.get(`/api/get-desktop-products`, {
        params: {
          category,
          brand,
          minPrice,
          maxPrice,
        },
      });
      return res.data.products;
    },
    refetchOnWindowFocus: false,
    staleTime: 10 * 1000 * 60,
    gcTime: 10 * 60 * 1000,
  });

  if (isError) return <div> Something went wrong... </div>;

  return (
    <div className="container min-h-screen">
      {/* //Header  */}
      <div className=" flex w-full flex-col items-center my-12 ">
        <p className="text-3xl font-extrabold text-slate-700 mb-2">
          PC COMPONENTS/{category.toUpperCase()}
        </p>
        <div className="bg-red-400 h-1 w-[100px] "></div>
      </div>
      <div className="grid grid-cols-5 ">
        {/* sidebar (filter)  & Product page  */}
        {/* sidebar  */}
        <div className=" col-span-1  border-r min-h-screen  ">
          <div className="  mx-4">
            {/* heading  */}
            <p className=" bg-blue-500 flex items-center justify-center gap-2  text-xl font-bold text-white py-2  rounded-lg ">
              <IoFilter /> Filter Products
            </p>

            {/* //filtering  */}

            <div className=" flex flex-col items-start space-y-4 my-5 w-full">
              <FilterSelect
                placeholder="Brand"
                setValue={setBrand}
                options={DESKTOP_PRODUCT_BRANDS}
              />

              <div className=" flex flex-col items-center space-y-4 ">
                <input
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  value={minPrice}
                  type="number"
                  placeholder="Min. price"
                  className="border border-grey-300 bg-gray-50/70 rounded-md py-1 px-[10px] placeholder:text-sm placeholder:text-slate-500 "
                />
                <input
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  type="number"
                  value={maxPrice}
                  placeholder="Max. price"
                  className="border border-grey-300 bg-gray-50/70 rounded-md placeholder:text-sm placeholder:text-slate-500 py-1 px-[10px]"
                />
              </div>
              <Button
                onClick={() => {
                  setBrand("");
                  setMinPrice("");
                  setMaxPrice("");
                }}
                className="bg-[#008add] hover:bg-[#008add]"
              >
                {" "}
                reset
              </Button>
            </div>
          </div>
        </div>

        {/* main product page  */}
        <div className="col-span-4 flex flex-wrap px-8 gap-4 mb-20 ">
          {isPending && (
            <p className="text-4xl text-blue-500 font-bold text-center">
              Fetching products...
            </p>
          )}
          {!isPending &&
            data.map((product, i) => (
              <Link href={`/pc-components/${category}/${product.id}`} key={i}>
                <Card className="max-w-[250px] w-full group h-[450px] flex flex-col items-center py-4 hover:shadow-xl relative  ">
                  <div className=" absolute top-2 text-white text-xs group-hover:bg-lime-600 transition-all duration-200 flex items-center gap-1 px-3 py-1 rounded-full">
                    <IoSparkles className="font-bold" /> 100% Genuine
                  </div>

                  <Image
                    src={product.images[0]}
                    alt=""
                    width={400}
                    height={400}
                    className="w-auto h-[250px] object-contain "
                  />

                  <CardContent className="w-full px-0 ">
                    <p className=" flex gap-2 line-clamp-1 text-lg font-semibold items-center bg-slate-200 w-full py-2 px-2  justify-center">
                      <LuScanBarcode />
                      <span className="line-clamp-1">
                        {product.productCode}
                      </span>
                    </p>
                    <p className="text-center mt-2 line-clamp-2">
                      {product.name}
                    </p>
                    <div className="max-w-[40%] mx-auto h-[2px] bg-slate-200 flex items-center  mt-2"></div>

                    <p className="text-center text-base text-green-600 mt-4">
                      ₹{product.price}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
