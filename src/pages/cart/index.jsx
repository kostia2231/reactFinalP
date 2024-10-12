import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import { TypographyH2 } from "@/components/ui/typo/typographyH2";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import useCartStore from "@/store/storeCart";
import CartProduct from "@/components/cartProduct";
import { TypographyH4Muted } from "@/components/ui/typo/TypographyH4Muted";
import OrderForm from "@/components/orderForm";
import PopUpComponent from "@/components/popUpComponent";
import { useState, useEffect } from "react";

export default function Cart() {
  const { cart, getCartCount, getTotalPrice } = useCartStore();
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
        <div className="grid grid-cols-[2fr_1fr] gap-8">
          <div>
            {cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </div>

          <div className=" rounded-xl bg-secondary h-fit">
            <div className="flex flex-col justify-between p-8">
              <div className="flex flex-col gap-4">
                <TypographyH2 moreStyle="font-[700]">
                  Order details
                </TypographyH2>
                <TypographyH2 moreStyle="text-muted font-[500]">
                  {getCartCount()} items
                </TypographyH2>
                <div className="flex justify-between">
                  <TypographyH2 moreStyle="text-muted font-[500] mt-auto">
                    Total:
                  </TypographyH2>
                  <TypographyH1>${getTotalPrice()},00</TypographyH1>
                </div>
              </div>
              <OrderForm cart={cart} setShowPopup={setShowPopup} />
            </div>
          </div>
        </div>
      ) : (
        <TypographyH4Muted>
          Oh no... It's empty.
          <br />
          You haven't added anything to your cart yet.
        </TypographyH4Muted>
      )}
    </div>
  );
}
