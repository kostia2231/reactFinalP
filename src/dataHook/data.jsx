import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFilters } from "@/storeHook/store";

export function DataProvider() {
  const { filters } = useFilters();

  console.log(filters);
  return useQuery({
    queryKey: ["data", filters],
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
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });
}
