import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        totalCount: 0,

        addItem: (item) =>
          set((state) => {
            const cartItem = state.cart.find((p) => p.id === item.id);

            let updatedCart;
            if (cartItem) {
              updatedCart = state.cart.map((p) =>
                p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
              );
            } else {
              updatedCart = [...state.cart, { ...item, quantity: 1 }];
            }

            return {
              cart: updatedCart,
              totalCount: state.totalCount + 1,
            };
          }),

        removeItem: (itemId) =>
          set((state) => {
            const cartItem = state.cart.find((p) => p.id === itemId);
            if (!cartItem) return state;

            const updatedCart = state.cart
              .map((p) => {
                if (p.id === itemId) {
                  if (p.quantity === 1) {
                    return null;
                  } else {
                    return {
                      ...p,
                      quantity: p.quantity - 1,
                    };
                  }
                }
                return p;
              })
              .filter(Boolean);

            const updatedTotalCount = state.totalCount - 1;

            return {
              cart: updatedCart,
              totalCount: updatedTotalCount,
            };
          }),

        clearOneTypeOfItem: (itemId) =>
          set((state) => {
            const itemsToRemove = state.cart.filter((p) => p.id === itemId);
            if (itemsToRemove.length === 0) return state;

            const updatedCart = state.cart.filter((p) => p.id !== itemId);
            const totalRemovedItems = itemsToRemove.reduce(
              (total, item) => total + item.quantity,
              0
            );

            return {
              cart: updatedCart,
              totalCount: state.totalCount - totalRemovedItems,
            };
          }),

        getTotalPrice: () => {
          return get().cart.reduce(
            (total, item) =>
              total +
              (item.discont_price ? item.discont_price : item.price) *
                item.quantity,
            0
          );
        },

        getCartCount: () => get().totalCount,
      }),
      {
        name: "cart-storage",
        getStorage: () => localStorage,
      }
    )
  )
);

export default useCartStore;
