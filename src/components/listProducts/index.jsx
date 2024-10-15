import { useMemo } from "react";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";
import { sortProducts } from "@/lib/sortProducts";
import { filterProducts } from "@/lib/filterProducts";
import { useProducts } from "@/data/data";
import ListProductsItem from "../listProductsItem";
import useStore from "@/store/store";
import PropTypes from "prop-types";

export default function ListProducts({ limit, showAll, showDiscountedOnly }) {
  const { data: products, isLoading, isError, error } = useProducts();

  const priceFrom = useStore((state) => state.filters.priceFrom);
  const priceTo = useStore((state) => state.filters.priceTo);
  const sortOrder = useStore((state) => state.filters.sortOrder);

  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    const filters = { showDiscountedOnly, priceFrom, priceTo };
    const filteredProducts = filterProducts(products, filters);
    const sortedProducts = sortProducts(filteredProducts, sortOrder);

    return sortedProducts;
  }, [priceFrom, priceTo, showDiscountedOnly, sortOrder, products]);

  const productsToShow = !showAll
    ? filteredAndSortedProducts.slice(0, limit)
    : filteredAndSortedProducts;

  if (isLoading) return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (isError) {
    console.error("Error:", error.message);
    return <TypographyH4Muted>Error: {error.message}</TypographyH4Muted>;
  }
  if (!products || products.length === 0) {
    return (
      <TypographyH4Muted>
        It seems like there are no products available.
      </TypographyH4Muted>
    );
  }

  return (
    <div className="grid justify-between gap-8 my-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-[1550px] mx-auto">
      {productsToShow.map((item) => (
        <ListProductsItem key={item.id} item={item} />
      ))}
    </div>
  );
}

ListProducts.propTypes = {
  limit: PropTypes.number,
  showAll: PropTypes.bool.isRequired,
  showDiscountedOnly: PropTypes.bool,
};
