import { devtools } from "zustand/middleware";
import { create } from "zustand";

const useStore = create(
  devtools((set) => ({
    filters: {
      discount: false,
      priceRange: { from: 0, to: Infinity },
      sortOrder: null,
    },
    setFilters: (newFilters) =>
      set((state) => ({
        filters: { ...state.filters, ...newFilters },
      })),
    resetFilters: () =>
      set({
        filters: {
          discount: false,
          priceRange: { from: 0, to: Infinity },
          sortOrder: null,
        },
      }),
  }))
);

export default useStore;
