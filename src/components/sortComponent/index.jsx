import { Checkbox } from "@/components/ui/checkbox";
import { InputSearch } from "@/components/ui/inputSearch";
import { TypographyH4 } from "../ui/typo/typographyH4";
import Combobox from "../ui/combobox";
import { useLocation } from "react-router-dom";

export default function SortComponent({
  // принимаем пропсы акшонов со стора фильтров для хэндлИзменений  //
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
          <label
            htmlFor="terms"
            className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Discounted items
          </label>

          <Checkbox id="terms" onCheckedChange={onDiscountToggle} />
        </div>
      )}
      <div className="flex items-center gap-4">
        <TypographyH4>Sorted</TypographyH4>
        <Combobox onChange={handleSortChange} />
      </div>
    </div>
  );
}
