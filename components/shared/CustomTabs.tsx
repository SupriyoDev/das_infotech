import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ConvertToArrOfStringWithDbData } from "@/lib/utils";

interface Props {
  name: string;
  productCode: string;
  description: string;
}

const CustomTabs = ({ description, name, productCode }: Props) => {
  return (
    <Tabs
      defaultValue="description"
      className=" w-full  border bg-slate-300 p-4 rounded-lg"
    >
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="bg-white  rounded-lg">
        <div className="p-10">
          <p className="text-3xl font-bold mb-3 ">{name}</p>
          <p className="text-xl font-medium">{productCode}</p>
        </div>

        <div className="">
          <p className=" bg-slate-100 text-3xl font-light px-10 py-6">
            Specification
          </p>
          <ul className="p-10">
            {ConvertToArrOfStringWithDbData(description).map((line, i) => (
              <li className=" my-[10px] text-xl" key={i}>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
      <TabsContent value="reviews">reviews</TabsContent>
    </Tabs>
  );
};

export default CustomTabs;
