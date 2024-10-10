import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(
  devtools((set, get) => ({
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
          return {
            cart: updatedCart,
            totalCount: state.totalCount + 1,
          };
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
        if (!cartItem) {
          return state;
        }

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
    clearCart: () => set({ cart: [], totalCount: 0 }),

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
  }))
);

export default useCartStore;
