import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { customerSupportData } from "@/constants/data";

const BrandSupport = () => {
  return (
    <div className=" container p-10 flex justify-center">
      <div className=" border border-gray-400 rounded-lg w-fit ">
        <Table className=" m-10 w-[800px] ">
          <TableCaption>
            Note: Information provided may changed in the future. <br /> Note: 2
            Products Warranty Support Provided by the Specific Manufacturer.
          </TableCaption>
          <TableHeader className="bg-slate-800 rounded-lg   ">
            <TableRow className="">
              <TableHead className="w-[200px] text-xl text-slate-200 py-6 text-left ">
                Brand
              </TableHead>
              <TableHead className=" text-xl text-slate-200 ">
                Customer Care Number
              </TableHead>

              <TableHead className="text-xl text-slate-200">
                Customer Care Email
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customerSupportData.map((data) => (
              <TableRow key={data.brand}>
                <TableCell className="font-medium ">{data.brand}</TableCell>
                <TableCell>{data.phone}</TableCell>

                <TableCell className="">{data.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BrandSupport;
