import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useCallback } from "react";
import { formatPathname } from "@/lib/formatPathname";
import ListProducts from "@/components/listProducts";
import SortComponent from "@/components/sortComponent";
import useStore from "@/store/store";

export default function AllProducts() {
  const discount = useStore((state) => state.filters.discount);
  const setFilters = useStore((state) => state.setFilters);
  const resetFilters = useStore((state) => state.resetFilters);

  const { pathname } = useLocation();
  const formattedLocationPathname = useMemo(
    () => formatPathname(pathname),
    [pathname]
  );

  const handleDiscountToggle = useCallback(() => {
    setFilters({
      discount: !discount,
    });
  }, [setFilters, discount]);

  const handleSortChange = useCallback(
    (sort) => {
      setFilters({ sortOrder: sort });
    },
    [setFilters]
  );

  useEffect(() => {
    if (pathname !== "/all-products") {
      resetFilters();
    }
  }, [pathname, resetFilters]);

  const showDiscounted = pathname === "/all-sales" ? !discount : discount;

  return (
    <div className="m-8">
      <TypographyH1>{formattedLocationPathname}</TypographyH1>
      <SortComponent
        onDiscountToggle={handleDiscountToggle}
        onSortChange={handleSortChange}
      />
      <ListProducts showAll={true} showDiscountedOnly={showDiscounted} />
    </div>
  );
}
