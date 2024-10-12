import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import ListProducts from "@/components/listProducts";
import SortComponent from "@/components/sortComponent";
import useStore from "@/store/store";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useCallback } from "react";

export default function AllProducts() {
  // импортируем фильтры (по одному стейту для предотвращения ререндеров)  и вытягиваем локацию из линка //
  const filters = useStore((state) => state.filters);
  const setFilters = useStore((state) => state.setFilters);
  const resetFilters = useStore((state) => state.resetFilters);

  const { pathname } = useLocation();

  // форматируем локацию с линка для использовании в заголовке категории //
  const formattedLocationPathname = useMemo(() => {
    return pathname
      .split("/")
      .map((part) =>
        part
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      )
      .join(" ");
  }, [pathname]);

  const handlePriceChange = useCallback(
    (from, to) => {
      setFilters({ priceRange: { from: from || 0, to: to || Infinity } });
    },
    [setFilters]
  );

  const handleDiscountToggle = useCallback(() => {
    setFilters({
      discount: !filters.discount,
    });
  }, [setFilters, filters.discount]);

  const handleSortChange = useCallback(
    (sort) => {
      setFilters({ sortOrder: sort });
    },
    [setFilters]
  );

  // сбрасываем фильтры если меняется линк //
  useEffect(() => {
    resetFilters();
  }, [pathname, resetFilters]);

  // показываем только со скидкой на странице скидок //
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
