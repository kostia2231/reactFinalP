// ----- to make an alert and export some elements.
// ----- fix validation.

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DiscountImg from "../../assets/img/discount.png";
import { useFormik } from "formik";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { useState } from "react";

export default function DiscountForm() {
  // const [showAlert, setShowAlert] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log("onSubmit", values);
      resetForm();
      // setShowAlert(true);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required!";
      }
      if (!values.phone) {
        errors.phone = "Phone is required!";
      }
      if (!values.name) {
        errors.name = "Name is required!";
      }
      return errors;
    },
  });

  return (
    <div className="bg-primary m-8 rounded-md grid">
      <h1 className="text-white text-6xl font-bold mx-auto pt-8">
        5% off on the first order
      </h1>
      <div className="flex flex-wrap mx-auto gap-6">
        <p className="text-red-400 text-xl flex justify-center">
          {formik.errors.name && formik.touched.name && formik.errors.name}
        </p>
        <p id="alert" className="text-red-400 text-xl flex justify-center">
          {formik.errors.phone && formik.touched.phone && formik.errors.phone}
        </p>
        <p id="alert" className="text-red-400 text-xl flex justify-center">
          {formik.errors.email && formik.touched.email && formik.errors.email}
        </p>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-6 ">
        <div className="relative mt-auto h-fit">
          <img
            src={DiscountImg}
            alt="Discount Image"
            className="w-full h-auto"
          />
        </div>
        <div className=" relative flex flex-col mt-auto p-8">
          {/* {showAlert && (
            <Alert className="block my-auto">
              <AlertDescription>Request has been sent!</AlertDescription>
            </Alert>
          )} */}
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div>
              <Input
                id="input"
                placeholder="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onSubmit={formik.handleBlur}
              />
            </div>
            <div>
              <Input
                id="input"
                type="number"
                placeholder="Phone number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onSubmit={formik.handleBlur}
              />
            </div>
            <div>
              <Input
                id="input"
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onSubmit={formik.handleBlur}
              />
            </div>
            <Button
              type="submit"
              variant="secondary"
              className="mt-4  w-full h-fit"
            >
              Get discount
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
