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
      set((state) => {
        const defaultFilters = {
          discount: false,
          priceRange: { from: 0, to: Infinity },
          sortOrder: null,
        };

        // тут важно проверить что если текущий фильтр соответствует дефолтному
        // то просто возвращать стейт и не перерендывать компонент целиком
        if (JSON.stringify(state.filters) === JSON.stringify(defaultFilters)) {
          return state;
        }

        return { filters: defaultFilters };
      }),
  }))
);

export default useStore;
