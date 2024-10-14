import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useFormik } from "formik";
import { validateForm } from "@/lib/validation";
import useSendUpdateData from "@/data/mutateData";
import PropTypes from "prop-types";

export default function FormComponent({ setShowPopup }) {
  const { sendSale } = useSendUpdateData();

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: { email: "", name: "", phone: "", userId: "" },
    onSubmit: async (values, { resetForm }) => {
      try {
        await sendSale(values);
        console.log("This data is sent: ", values);
        resetForm();
        setShowPopup(true);
      } catch (error) {
        console.log(error);
      }
    },
    validate: validateForm,
  });

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

FormComponent.propTypes = {
  setShowPopup: PropTypes.func.isRequired,
};
