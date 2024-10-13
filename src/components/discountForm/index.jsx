import DiscountImg from "../../assets/img/discount.png";
import { useState, useEffect } from "react";
import PopUpComponent from "../popUpComponent";
import FormComponent from "../formComponent";

export default function DiscountForm() {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      const handleClose = () => {
        closePopup();
      };
      window.addEventListener("scroll", handleClose);
      window.addEventListener("click", handleClose);
      return () => {
        window.removeEventListener("scroll", handleClose);
        window.removeEventListener("click", handleClose);
      };
    }
  }, [showPopup]);

  return (
    <div className="grid m-8 rounded-md bg-primary">
      <div className="mx-auto">
        {showPopup && (
          <PopUpComponent closePopup={closePopup} isDiscount={true} />
        )}

        <h1 className="pt-8 text-6xl font-bold text-center text-white ">
          5% off on the first order
        </h1>
        <div className="grid grid-cols-[2fr_1fr] gap-6">
          <img
            src={DiscountImg}
            alt="Discount Image"
            className="w-full h-auto mt-auto"
          />

          <FormComponent setShowPopup={setShowPopup} />
        </div>
      </div>
    </div>
  );
}
