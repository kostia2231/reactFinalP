// ----- to make an alert.
// ----- fix validation.
// ----- pupUp animation.

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DiscountImg from "../../assets/img/discount.png";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

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

      return () => {
        window.removeEventListener("scroll", handleClose);
      };
    }
  }, [showPopup]);

  ///////////
  const formik = useFormik({
    initialValues: { email: "", name: "", phone: "" },
    onSubmit: (values, { resetForm }) => {
      console.log("onSubmit", values);
      resetForm();
      setShowPopup(true);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) errors.email = "Email is required!";
      if (!values.phone) errors.phone = "Phone is required!";
      if (!values.name) errors.name = "Name is required!";
      return errors;
    },
  });

  return (
    <div className="grid m-8 rounded-md bg-primary">
      {/* ///// */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="relative flex gap-4 p-8 rounded-lg shadow-lg bg-primary">
            <div className="mr-8">
              <h2 className="mb-4 text-4xl font-semibold text-white">Sent!</h2>
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
      )}
      {/* ///// */}

      <h1 className="pt-8 mx-auto text-6xl font-bold text-white">
        5% off on the first order
      </h1>
      <div className="flex flex-wrap gap-6 mx-auto">
        {["name", "phone", "email"].map((field) => (
          <p key={field} className="flex justify-center text-xl text-red-400">
            {formik.errors[field] &&
              formik.touched[field] &&
              formik.errors[field]}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-6">
        <img
          src={DiscountImg}
          alt="Discount Image"
          className="w-full h-auto mt-auto "
        />
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 p-8"
        >
          {["name", "phone", "email"].map((field, index) => (
            <Input
              key={index}
              id={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              type={
                field === "phone"
                  ? "number"
                  : field === "email"
                    ? "email"
                    : "text"
              }
              value={formik.values[field]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ))}
          <Button type="submit" variant="secondary" className="w-full mt-4">
            Get discount
          </Button>
        </form>
      </div>
    </div>
  );
}
