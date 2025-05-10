import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function UseGetBrandProducts(brandname: string) {
  return useQuery({
    queryKey: ["brand_products", brandname],
    queryFn: async () => {
      const res = await axios.get("/api/get-brand-products", {
        params: {
          brandname,
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

// const [res] = await db
//   .select()
//   .from(desktopTable)
//   .where(eq(desktopTable.id, product_id));
