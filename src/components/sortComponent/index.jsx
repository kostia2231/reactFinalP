import { Checkbox } from "@/components/ui/checkbox";
import { InputSearch } from "@/components/ui/inputSearch";
import { TypographyH4 } from "../ui/typo/typographyH4";
import Combobox from "../ui/combobox";

export default function SortComponent({
  onPriceChange,
  onDiscountToggle,
  onSortChange,
}) {
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
    <div className="flex items-center gap-10">
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
      <div className="flex items-center my-10 space-x-4">
        <label
          htmlFor="terms"
          className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Discounted items
        </label>
        <Checkbox id="terms" onCheckedChange={onDiscountToggle} />
      </div>
      <div className="flex items-center gap-4">
        <TypographyH4>Sorted</TypographyH4>
        <Combobox onChange={handleSortChange} />
      </div>
    </div>
  );
}
