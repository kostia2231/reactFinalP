import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";
import axios from "axios";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const { data, status, error } = useQuery({
    queryFn: async () => {
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          axios.get("http://localhost:3333/categories/all"),
          axios.get("http://localhost:3333/products/all"),
        ]);
        return {
          categories: categoriesResponse.data,
          products: productsResponse.data,
        };
      } catch (error) {
        console.error("Error fetching: ", error);
        throw error;
      }
    },
    queryKey: ["data"],
  });

  if (status === "loading") {
    console.log("loading...");
  }

  if (status === "error") {
    console.log("error...", error.message);
  }

  return (
    <DataContext.Provider value={{ data, status, error }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
