import React from "react";
import DiscountCheckbox from "../checkboxComponent";
import { InputSearch } from "@/components/ui/inputSearch";
import { TypographyH4 } from "../ui/typo/typographyH4";
import Combobox from "../ui/combobox";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SortComponent = React.memo(function SortComponent({
  onPriceChange,
  onDiscountToggle,
  onSortChange,
}) {
  const { pathname } = useLocation();
  // console.log(pathname);

  const handlePriceFromChange = (e) => {
    onPriceChange(e.target.value, undefined);
  };

  const handlePriceToChange = (e) => {
    onPriceChange(undefined, e.target.value);
  };

  const handleSortChange = (sortValue) => {
    onSortChange(sortValue);
  };

  return (
    <div className="flex items-center gap-10 my-10">
      <div className="flex items-center gap-4">
        <TypographyH4>Price</TypographyH4>
        <InputSearch
          type="number"
          placeholder="from"
          onChange={handlePriceFromChange}
        />
        <InputSearch
          type="number"
          placeholder="to"
          onChange={handlePriceToChange}
        />
      </div>
      {/* показываем чекбокс только если это не страница скидок */}
      {pathname !== "/all-sales" && (
        <div className="flex items-center space-x-4">
          <DiscountCheckbox onChange={onDiscountToggle} />
        </div>
      )}
      <div className="flex items-center gap-4">
        <TypographyH4>Sorted</TypographyH4>
        <Combobox onChange={handleSortChange} />
      </div>
    </div>
  );
});

export default SortComponent;

SortComponent.propTypes = {
  onPriceChange: PropTypes.func.isRequired,
  onDiscountToggle: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};
