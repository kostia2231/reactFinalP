// ----- to make an alert.
// ----- fix validation.

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
      const handleScroll = () => {
        closePopup();
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
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
    <div className="bg-primary m-8 rounded-md grid">
      {/* ///// */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="flex gap-4 bg-primary p-8 rounded-lg shadow-lg relative">
            <div className="mr-8">
              <h2 className="text-4xl text-white font-semibold mb-4">Sent!</h2>
              <p className="text-white text-xl">
                Congratulations,
                <br />
                check your email for a coupon.
              </p>
            </div>
            <Button variant="secondary" size="icon" onClick={closePopup}>
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
      {/* ///// */}

      <h1 className="text-white text-6xl font-bold mx-auto pt-8">
        5% off on the first order
      </h1>
      <div className="flex flex-wrap mx-auto gap-6">
        {["name", "phone", "email"].map((field) => (
          <p key={field} className="text-red-400 text-xl flex justify-center">
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
          className="w-full h-auto mt-auto  "
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
          <Button
            type="submit"
            variant="secondary"
            className="mt-4 w-full h-fit"
          >
            Get discount
          </Button>
        </form>
      </div>
    </div>
  );
}
