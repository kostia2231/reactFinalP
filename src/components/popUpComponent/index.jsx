import { Button } from "../ui/button";
import { X } from "lucide-react";

export default function PopUpComponent({ closePopup }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="relative flex gap-4 p-8 rounded-lg shadow-lg bg-primary">
          <div className="mr-8">
            <h2 className="mb-4 text-4xl font-semibold text-white">Sent</h2>
            <p className="text-xl text-white">
              Congratulations!
              <br />
              Check your email for a coupon.
            </p>
          </div>
          <Button variant="secondary" size="icon" onClick={closePopup}>
            <X className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </>
  );
}
