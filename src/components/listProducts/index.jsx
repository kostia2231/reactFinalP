import { useProducts } from "@/dataHook/data";
import ListProductsItem from "../listProductsItem";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";

export default function ListProducts({ limit, showAll }) {
  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (isError) {
    console.error("Error:", error.message);
    return <TypographyH4Muted>Error: {error.message}</TypographyH4Muted>;
  }
  if (!products || products.length === 0) {
    return <TypographyH4Muted>No products available.</TypographyH4Muted>;
  }

  const productsToShow = showAll
    ? products
    : products
        .filter((product) => product.discont_price !== null)
        .slice(0, limit);

  return (
    <div>
      <div className="grid justify-between grid-cols-4 gap-8 my-10">
        {productsToShow.map((item) => (
          <ListProductsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
