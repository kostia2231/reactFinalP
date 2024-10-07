import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function DataProvider() {
  return useQuery({
    queryFn: async () => {
      const [categoriesResponse, productsResponse] = await Promise.all([
        axios.get("http://localhost:3333/categories/all"),
        axios.get("http://localhost:3333/products/all"),
      ]);

      return {
        categories: categoriesResponse.data,
        products: productsResponse.data,
      };
    },
    queryKey: ["data"],
  });
}
