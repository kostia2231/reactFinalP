import { Button } from "../ui/button";
import { X } from "lucide-react";
import PropTypes from "prop-types";

export default function PopUpComponent({ closePopup, isDiscount }) {
  // console.log(isDiscount);
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 ">
        <div className="relative flex gap-4 p-8 rounded-lg shadow-lg bg-primary max-w-[700px] z-50">
          <div className="mr-8">
            <h2 className="mb-4 text-4xl font-semibold text-white">
              Congratulations!
            </h2>
            {!isDiscount ? (
              <p className="text-xl text-white">
                Your order has been successfully placed on the website.
                <br />
                <br />
                A manager will contact you shortly
                <br />
                to confirm your order.
              </p>
            ) : null}
            {isDiscount ? (
              <p className="text-xl text-white">
                Discount code has been sent to your Email.
              </p>
            ) : null}
          </div>
          <Button variant="secondary" size="icon" onClick={closePopup}>
            <X className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </>
  );
}

PopUpComponent.propTypes = {
  closePopup: PropTypes.func.isRequired,
  isDiscount: PropTypes.bool.isRequired,
};
