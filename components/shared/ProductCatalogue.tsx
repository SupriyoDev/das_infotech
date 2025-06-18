"use client";

import Image from "next/image";
import { useState } from "react";
import { MdDiscount } from "react-icons/md";

const ProductCatalogue = ({
  data,
  discount,
}: {
  data: string[];
  discount: string;
}) => {
  const [imgurl, setImgUrl] = useState<string>(data[0]);

  return (
    <div className=" bg-white rounded-lg flex flex-col items-center py-2 w-full border h-[700px] ">
      <div className="h-[600px] w-[600px] flex items-center justify-center overflow-hidden relative">
        <img src={imgurl} alt="" className=" h-full w-full object-contain" />
        <div className="absolute top-4 right-4 bg-red-500 rounded-lg ">
          <p className=" p-4 text-white font-bold text-2xl flex items-center gap-1">
            {" "}
            -{discount}% <MdDiscount size={32} />
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-slate-200 w-full my-2"></div>
      <div className=" flex items-center gap-2 ">
        {data.map((image, i) => (
          <Image
            width={900}
            height={900}
            onClick={(e) => setImgUrl(image)}
            key={i}
            src={image}
            alt=""
            className="w-20 h-20 object-contain hover:outline hover:outline-blue-500 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalogue;
