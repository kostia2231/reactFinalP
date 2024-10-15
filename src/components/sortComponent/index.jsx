import React, { useCallback } from "react";
import DiscountCheckbox from "../checkboxComponent";
import Combobox from "../ui/combobox";
import PropTypes from "prop-types";
import useStore from "@/store/store";
import { InputSearch } from "@/components/ui/inputSearch";
import { TypographyH4 } from "../ui/typo/typographyH4";
import { useLocation } from "react-router-dom";

const SortComponent = React.memo(function SortComponent({
  onDiscountToggle,
  onSortChange,
}) {
  const { pathname } = useLocation();

  const setFilters = useStore((state) => state.setFilters);

  const handlePriceFromChange = useCallback(
    (e) => {
      const value = Number(e.target.value);
      if (!isNaN(value)) {
        setFilters({ priceFrom: value });
      }
    },
    [setFilters]
  );

  const handlePriceToChange = useCallback(
    (e) => {
      const value = Number(e.target.value);
      if (!isNaN(value)) {
        setFilters({ priceTo: value });
      }
    },
    [setFilters]
  );

  const handleSortChange = (sortValue) => {
    onSortChange(sortValue);
  };

  return (
    <div className="flex items-center gap-10 my-10">
      <div className="flex items-center gap-4">
        <TypographyH4>Price</TypographyH4>
        <InputSearch
          id="from"
          name="from"
          type="number"
          placeholder="from"
          onChange={handlePriceFromChange}
        />
        <InputSearch
          id="to"
          name="to"
          type="number"
          placeholder="to"
          onChange={handlePriceToChange}
        />
      </div>
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
  onDiscountToggle: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};
