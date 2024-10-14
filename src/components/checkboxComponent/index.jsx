import { Check } from "lucide-react";
import PropTypes from "prop-types";

export default function DiscountCheckbox({ onChange }) {
  return (
    <>
      <label
        htmlFor="discount-checkbox"
        className="text-xl font-medium leading-none pointer-events-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Discounted items
      </label>
      <div className="flex items-center justify-center">
        <input
          type="checkbox"
          id="discount-checkbox"
          onChange={onChange}
          className="active:bg-blue-500 transition hover:border-secondary cursor-pointer shrink-0 peer relative w-[42px] h-[42px] border rounded-lg appearance-none h- checked:bg-primary checked:border-0"
        />
        <span
          type="checkmark"
          className="absolute hidden pointer-events-none peer-checked:block"
        >
          <Check className="w-6 h-6 text-white" />
        </span>
      </div>
    </>
  );
}

DiscountCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
};
