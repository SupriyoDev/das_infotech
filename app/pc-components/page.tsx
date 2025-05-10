import { desktopProductCategory } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const PCComponents = () => {
  return (
    <div className="container w-full py-12 h-screen">
      <div className=" flex w-full flex-col items-center ">
        <p className="text-3xl font-extrabold text-slate-700 mb-2">
          PC COMPONENTS
        </p>
        <div className="bg-red-400 h-1 w-[100px] "></div>
      </div>

      {/* product category  */}
      <div className=" flex flex-wrap gap-6 w-full mt-6 justify-center">
        {desktopProductCategory.map((product, i) => (
          <Link href={`/pc-components/${product.value}`} key={i}>
            <div
              key={i}
              className=" w-[180px] bg-slate-200 flex flex-col hover:bg-yellow-100 transition-all duration-200  items-center py-4 rounded-lg mb-2 "
            >
              <Image src={product.icon} alt="" height={100} width={100} />
              <p className="text-xl font-semibold text-slate-800 mt-2 text-center">
                {product.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PCComponents;
