"use client";

import { useState } from "react";

const ProductCatalogue = ({ data }: { data: string[] }) => {
  const [imgurl, setImgUrl] = useState<string>(data[0]);

  return (
    <div className=" bg-white rounded-lg flex flex-col items-center py-2 w-full border">
      <img src={imgurl} alt="" className="h-50 w-50 object-contain " />
      <div className="h-[1px] bg-slate-200 w-full my-2"></div>
      <div className=" flex items-center gap-2 ">
        {data.map((image, i) => (
          <img
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
