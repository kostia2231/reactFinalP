import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import ListProducts from "@/components/listProducts";
import SortComponent from "@/components/sortComponent";
import useStore from "@/storeHook/store";

export default function AllProducts() {
  const { filters, setFilters } = useStore();

  const handlePriceChange = (from, to) => {
    setFilters({ priceRange: { from: from || 0, to: to || Infinity } });
  };

  const handleDiscountToggle = () => {
    setFilters({ discount: !filters.discount });
  };

  const handleSortChange = (sort) => {
    setFilters({ sortOrder: sort });
  };

  return (
    <div className="m-8">
      <TypographyH1>All Products</TypographyH1>
      <SortComponent
        onPriceChange={handlePriceChange}
        onDiscountToggle={handleDiscountToggle}
        onSortChange={handleSortChange}
      />
      <ListProducts
        showAll={true}
        priceRange={filters.priceRange}
        showDiscountedOnly={filters.discount}
        sortOrder={filters.sortOrder}
      />
    </div>
  );
}
