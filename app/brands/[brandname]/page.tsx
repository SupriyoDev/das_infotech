"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UseGetBrandProducts } from "@/lib/services";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IoSparkles } from "react-icons/io5";
import { LuScanBarcode } from "react-icons/lu";

const BrandsPage = () => {
  const { brandname } = useParams();

  const { data, isPending } = UseGetBrandProducts(brandname as string);

  console.log(data);

  return (
    <div className=" container flex flex-col items-center mt-4  ">
      {/* title   */}
      <div className=" flex w-full flex-col items-center my-12 ">
        <p className="text-3xl font-extrabold text-slate-700 mb-2">
          BRANDS/{(brandname as string)?.toUpperCase()}
        </p>
        <div className="bg-red-400 h-1 w-[100px] "></div>
      </div>

      {/* main product page  */}
      <div className="col-span-4 flex flex-wrap px-8 gap-4 ">
        {isPending && (
          <p className="text-4xl text-primary font-bold text-center">
            Loading...
          </p>
        )}
        {!isPending &&
          data.map((product: any, i: any) => (
            <Link
              href={`/pc-components/${product.category}/${product.id}`}
              key={i}
            >
              <Card className="max-w-[250px] w-full group h-[450px] flex flex-col items-center py-4 hover:shadow-xl relative  ">
                <div className=" absolute top-2 text-white text-xs group-hover:bg-lime-600 transition-all duration-200 flex items-center gap-1 px-3 py-1 rounded-full">
                  <IoSparkles className="font-bold" /> 100% Genuine
                </div>

                <Image
                  src={product.images[0]}
                  alt=""
                  width={100}
                  height={100}
                  className="w-auto h-[250px] object-contain"
                />

                <CardContent className="w-full px-0 ">
                  <p className=" flex gap-2 line-clamp-1 text-lg font-semibold items-center bg-slate-200 w-full py-2 px-2  justify-center">
                    <LuScanBarcode />
                    <span className="line-clamp-1">{product.productCode}</span>
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
  );
};

export default BrandsPage;
