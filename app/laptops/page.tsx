"use client";
import { FilterSelect } from "@/components/shared/filterSelect";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { laptopProductType } from "@/drizzle/schema";
import { UseGetLaptopProducts } from "@/lib/services";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  LAPTOP_BRANDS,
  RAM_SIZES,
  ROM_SIZES,
  ROM_TYPES,
  PROCESSOR_LISTS,
  LAPTOP_USE_TYPE,
} from "@/constants/data";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoFilter, IoSparkles } from "react-icons/io5";
import { LuScanBarcode } from "react-icons/lu";

const LaptopPage = () => {
  const [page, setPage] = useState(1);
  const [ram, setRam] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [rom, setRom] = useState<string>("");
  const [romType, setRomtype] = useState<string>("");
  const [processor, setProcessor] = useState<string>("");
  const [useType, setUseType] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string | number>("");
  const [maxPrice, setMaxPrice] = useState<string | number>("");

  const { isPending, data } = UseGetLaptopProducts(
    page,
    ram,
    brand,
    rom,
    romType,
    processor,
    useType,
    minPrice,
    maxPrice
  );

  return (
    <div className="container min-h-screen ">
      {/* //Header  */}
      <div className=" flex w-full flex-col items-center my-12 ">
        <p className="text-3xl font-extrabold text-slate-700 mb-2">
          PC COMPONENTS/LAPTOPS
        </p>
        <div className="bg-red-400 h-1 w-[100px] "></div>
      </div>
      <div className="grid grid-cols-5 ">
        {/* sidebar (filter)  & Product page  */}
        {/* sidebar  */}
        <div className=" col-span-1  border-r min-h-screen ">
          <div className="  mx-4 ">
            {/* heading  */}
            <p className=" bg-[#008add] flex items-center justify-center gap-2  text-xl font-bold text-white py-2   rounded-lg ">
              <IoFilter /> Filter Products
            </p>

            {/* //filtering  */}
            <div className=" flex flex-col items-start space-y-4 my-5 w-full">
              <FilterSelect
                placeholder="Brand"
                setValue={setBrand}
                options={LAPTOP_BRANDS}
              />
              <FilterSelect
                placeholder="Rom"
                setValue={setRom}
                options={ROM_SIZES}
              />{" "}
              <FilterSelect
                placeholder="Ram"
                setValue={setRam}
                options={RAM_SIZES}
              />{" "}
              <FilterSelect
                placeholder="HDD/SSD"
                setValue={setRomtype}
                options={ROM_TYPES}
              />{" "}
              <FilterSelect
                placeholder="Processor"
                setValue={setProcessor}
                options={PROCESSOR_LISTS}
              />{" "}
              <FilterSelect
                placeholder="Usage"
                setValue={setUseType}
                options={LAPTOP_USE_TYPE}
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
                className="bg-[#008add] hover:bg-[#008add]"
                onClick={() => {
                  setRam("");
                  setRom("");
                  setRomtype("");
                  setUseType("");
                  setBrand("");
                  setProcessor("");
                  setMaxPrice("");
                  setMinPrice("");
                }}
              >
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
            (data as laptopProductType[]).map((product, i) => (
              <Link href={`/laptops/${product.id}`} key={i}>
                <Card className="max-w-[250px] w-full group h-[450px] flex flex-col items-center py-4 hover:shadow-xl relative overflow-hidden ">
                  <div className=" absolute top-2 text-transparent group-hover:text-white text-xs group-hover:bg-lime-600 transition-all duration-200 flex items-center gap-1 px-3 py-1 rounded-full">
                    <IoSparkles className="font-bold" /> 100% Genuine
                  </div>

                  <img
                    src={product.featureImage}
                    alt=""
                    width={100}
                    height={100}
                    className="w-auto h-[230px] object-cover  "
                  />

                  <CardContent className="w-full px-0 ">
                    <p className=" flex gap-2 line-clamp-1 text-lg font-semibold items-center bg-slate-200 w-full py-2 px-2  justify-center">
                      <LuScanBarcode />
                      <span className="line-clamp-1">{product.modelNo}</span>
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

          {/* Load more buttons */}
          <div className=" flex items-center gap-5 justify-center w-full mt-10">
            <Button
              disabled={page === 1}
              onClick={() => setPage((page) => (page === 1 ? page : page - 1))}
              className="bg-[#008adc] hover:bg-[#008adc]/80 text-lg font-normal w-[150px] "
            >
              <ArrowLeft /> Previous
            </Button>
            <Button
              onClick={() => setPage((page) => page + 1)}
              className="bg-[#008adc]  hover:bg-[#008adc]/80  font-normal text-lg w-[150px]"
            >
              Next <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopPage;
