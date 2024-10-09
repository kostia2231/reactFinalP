import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(
  devtools((set, get) => ({
    items: [],
    addItem: (item) =>
      set((state) => {
        if (item)
          return {
            items: [...state.items, item],
          };
      }),
    removeItem: (itemId) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== itemId),
      })),
    clearCart: () => set({ items: [] }),
    getTotalPrice: () => {
      return get().items.reduce((total, item) => total + item.price, 0);
    },
    getCartCount: () => get().items.length,
  }))
);

export default useCartStore;
