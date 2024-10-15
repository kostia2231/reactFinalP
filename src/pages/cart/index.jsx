import { useState, useEffect } from "react";
import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import { TypographyH4Muted } from "@/components/ui/typo/TypographyH4Muted";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import useCartStore from "@/store/storeCart";
import CartProduct from "@/components/cartProduct";
import OrderForm from "@/components/orderForm";
import PopUpComponent from "@/components/popUpComponent";
import CartOrderDetails from "@/components/cartOrderDetails";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);

  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      const handleClose = () => {
        closePopup();
      };
      window.addEventListener("click", handleClose);
      return () => {
        window.removeEventListener("click", handleClose);
      };
    }
  }, [showPopup]);

  return (
    <div className="grid gap-8 m-8">
      {showPopup && <PopUpComponent closePopup={closePopup} />}

      <div className="flex items-center justify-between">
        <TypographyH1>Shopping Cart</TypographyH1>
        <div className="flex-grow ml-8">
          <hr className="min-w-full" />
        </div>
        <Link to="/all-products">
          <Badge className="h-fit" variant="outline">
            Back to store
          </Badge>
        </Link>
      </div>
      {cart.length !== 0 ? (
        <div className="grid grid-cols-[1fr] gap-8 xl:grid-cols-[2fr_1fr] ">
          <div>
            {cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>
          <div className=" rounded-xl bg-secondary h-fit">
            <div className="flex flex-col justify-between p-8">
              <CartOrderDetails />

              <OrderForm setShowPopup={setShowPopup} />
            </div>
          </div>
        </div>
      ) : (
        <TypographyH4Muted>
          Oh no... It is empty.
          <br />
          You have not added anything to your cart yet.
        </TypographyH4Muted>
      )}
    </div>
  );
}
