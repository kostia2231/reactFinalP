import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Component() {
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
      const handleScroll = () => {
        closePopup();
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [showPopup]);

  return (
    <div className="p-4 max-w-md mx-auto">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={closePopup}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            <h2 className="text-xl font-bold mb-4">Form Submitted!</h2>
            <p>Thank you for your submission.</p>
          </div>
        </div>
      )}
    </div>
  );
}
