import { validateForm } from "@/lib/validation";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import useSendUpdateData from "@/data/mutateData";
import useCartStore from "@/store/storeCart";
import PropTypes from "prop-types";

export default function OrderForm({ cart, setShowPopup }) {
  const clearCart = useCartStore((state) => state.clearCart);
  const { sendOrder } = useSendUpdateData();
  const data = cart.map(({ id, quantity }) => ({ id, quantity }));

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      name: "",
      phone: "",
      email: "",
      products: data,
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        await sendOrder(values);
        console.log("This data is sent: ", values);
        setShowPopup(true);
        resetForm();
        clearCart();
      } catch (error) {
        console.log(error);
      }
    },
    validate: validateForm,
  });

  return (
    <>
      <form
        className="flex flex-col gap-4 pt-8 mt-auto"
        onSubmit={formik.handleSubmit}
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
                : "placeholder-muted"
            } bg-white text-accent focus-visible:ring-none`}
          />
        ))}
        <Button type="submit" className="w-full mt-4">
          Order
        </Button>
      </form>
    </>
  );
}

OrderForm.propTypes = {
  cart: PropTypes.array.isRequired,
  setShowPopup: PropTypes.func.isRequired,
};
