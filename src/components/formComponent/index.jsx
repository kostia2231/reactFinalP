import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useFormik } from "formik";
import { validateForm } from "@/lib/validation";

export default function FormComponent({ setShowPopup }) {
  const formik = useFormik({
    initialValues: { email: "", name: "", phone: "" },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      console.log("onSubmit", values);
      resetForm();
      setShowPopup(true);
    },
    validate: validateForm,
  });
  //
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 p-8 mt-auto"
      >
        {["name", "phone", "email"].map((field, index) => (
          <Input
            key={index}
            id={field}
            placeholder={
              formik.touched[field] && formik.errors[field]
                ? formik.errors[field]
                : field.charAt(0).toUpperCase() + field.slice(1)
            }
            name={field}
            type={
              field === "phone" ? "tel" : field === "email" ? "email" : "text"
            }
            value={formik.values[field]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border ${
              formik.touched[field] && formik.errors[field]
                ? "border-red-400 placeholder-red-400"
                : "placeholder-white"
            }`}
          />
        ))}
        <Button type="submit" variant="secondary" className="w-full mt-4">
          Get a discount
        </Button>
      </form>
    </>
  );
}
