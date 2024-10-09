import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import ListProducts from "@/components/listProducts";
import SortComponent from "@/components/sortComponent";
import useStore from "@/storeHook/store";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AllProducts() {
  const { filters, setFilters, resetFilters } = useStore();
  const { pathname } = useLocation();

  const formattedLocationPathname = location.pathname
    .split("/")
    .map((part) =>
      part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    )
    .join(" ");

  const handlePriceChange = (from, to) => {
    setFilters({ priceRange: { from: from || 0, to: to || Infinity } });
  };

  const handleDiscountToggle = () => {
    setFilters({ discount: !filters.discount });
  };

  const handleSortChange = (sort) => {
    setFilters({ sortOrder: sort });
  };

  useEffect(() => {
    resetFilters();
  }, [pathname, resetFilters]);

  const showDiscounted =
    pathname === "/all-sales" ? !filters.discount : filters.discount;

  return (
    <div className="m-8">
      <TypographyH1>{formattedLocationPathname}</TypographyH1>
      <SortComponent
        onPriceChange={handlePriceChange}
        onDiscountToggle={handleDiscountToggle}
        onSortChange={handleSortChange}
      />
      <ListProducts
        showAll={true}
        priceRange={filters.priceRange}
        showDiscountedOnly={showDiscounted}
        sortOrder={filters.sortOrder}
      />
    </div>
  );
}
