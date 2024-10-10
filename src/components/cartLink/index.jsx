import { NavLink } from "react-router-dom";
import CartIcon from "../../assets/svg/cart.svg";
import useCartStore from "@/storeHook/storeCart";

export default function CartLink() {
  const cartCount = useCartStore((state) => state.getCartCount());
  return (
    <NavLink to="/cart">
      <div className="relative flex">
        {cartCount > 0 && (
          <div className="flex items-center justify-center rounded-full bg-primary h-[26px] w-[26px] text-white text-xs absolute mt-2">
            {cartCount}
          </div>
        )}
        <img src={CartIcon} alt="Cart" />
      </div>
    </NavLink>
  );
}
