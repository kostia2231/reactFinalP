import { useMemo } from "react";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";
import ListProductsItem from "../listProductsItem";
import { useProducts } from "@/data/data";
import useStore from "@/store/store";
import PropTypes from "prop-types";

export default function ListProducts({ limit, showAll, showDiscountedOnly }) {
  const { data: products, isLoading, isError, error } = useProducts();
  const priceFrom = useStore((state) => state.filters.priceFrom);
  const priceTo = useStore((state) => state.filters.priceTo);
  const sortOrder = useStore((state) => state.filters.sortOrder);

  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    const filteredProducts = products.filter((product) => {
      const price = product.discont_price
        ? parseFloat(product.discont_price)
        : parseFloat(product.price);

      if (showDiscountedOnly && !product.discont_price) return false;
      if (priceFrom && price < parseFloat(priceFrom)) return false;
      if (priceTo && price > parseFloat(priceTo)) return false;
      return true;
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
      const priceA = a.discont_price
        ? parseFloat(a.discont_price)
        : parseFloat(a.price);
      const priceB = b.discont_price
        ? parseFloat(b.discont_price)
        : parseFloat(b.price);

      switch (sortOrder) {
        case "newest":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "price:low-high":
          return priceA - priceB;
        case "price:high-low":
          return priceB - priceA;
        case "default":
        default:
          return 0;
      }
    });

    return sortedProducts;
  }, [priceFrom, priceTo, showDiscountedOnly, sortOrder, products]);

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

  const productsToShow = !showAll
    ? filteredAndSortedProducts.slice(0, limit)
    : filteredAndSortedProducts;

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
  sortOrder: PropTypes.oneOf([
    "default",
    "newest",
    "price:low-high",
    "price:high-low",
  ]),
};
