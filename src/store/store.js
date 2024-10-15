import { devtools } from "zustand/middleware";
import { create } from "zustand";

const useStore = create(
  devtools((set) => ({
    filters: {
      discount: false,
      priceRange: { from: 0, to: Infinity },
      priceFrom: 0,
      priceTo: Infinity,
      sortOrder: "default",
      isAdded: false,
    },
    setFilters: (newFilters) =>
      set((state) => ({
        filters: { ...state.filters, ...newFilters },
      })),
    resetFilters: () =>
      set((state) => {
        const defaultFilters = {
          discount: false,
          priceFrom: 0,
          priceTo: Infinity,
          priceRange: { from: 0, to: Infinity },
          sortOrder: "default",
        };

        if (JSON.stringify(state.filters) === JSON.stringify(defaultFilters)) {
          return state;
        }

        return { filters: defaultFilters };
      }),
  }))
);

export default useStore;
