"use client";

import { laptopProductType } from "@/drizzle/schema";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function UseGetBrandProducts(brandname: string, page = 1) {
  return useQuery({
    queryKey: ["brand_products", brandname, page],
    queryFn: async () => {
      const res = await axios.get("/api/get-brand-products", {
        params: {
          brandname,
          page,
        },
      });

      return res.data.products;
    },
  });
}

export function getSpecificDesktopProduct(productId: string) {
  return useQuery({
    queryKey: ["desktop_products", productId],
    queryFn: async () => {
      const res = await axios.get("/api");
    },
  });
}

export function UseGetLaptopProducts(
  page = 1,
  ram?: string,
  brand?: string,
  rom?: string,
  romType?: string,
  processor?: string,
  useType?: string,
  minPrice?: number | string,
  maxPrice?: number | string
) {
  return useQuery<laptopProductType[], Error>({
    queryKey: [
      "laptop_products",
      page,
      ram,
      brand,
      rom,
      romType,
      processor,
      useType,
      minPrice,
      maxPrice,
    ],
    queryFn: async ({ queryKey }) => {
      const res = await axios.get("/api/get-laptop-products", {
        params: {
          page: queryKey[1],
          ram,
          brand,
          rom,
          romType,
          processor,
          useType,
          minPrice,
          maxPrice,
        },
      });
      return res.data.products;
    },
    refetchOnWindowFocus: false,
    gcTime: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    placeholderData: (previousData, previousQuery) => previousData,
  });
}

// const [res] = await db
//   .select()
//   .from(desktopTable)
//   .where(eq(desktopTable.id, product_id));
