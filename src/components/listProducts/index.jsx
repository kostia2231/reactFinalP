import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";
import ListProductsItem from "../listProductsItem";
import { useProducts } from "@/dataHook/data";

export default function ListProducts({
  // принимаем пропсы и дефолты //
  limit,
  showAll,
  priceRange = { from: 0, to: Infinity },
  showDiscountedOnly = false,
  sortOrder = "default",
}) {
  //хукаем дату и тд. //
  const { data: products, isLoading, isError, error } = useProducts();

  // обрабатываем ошибочки и лоадинг //
  if (isLoading) return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (isError) {
    console.error("Error:", error.message);
    return <TypographyH4Muted>Error: {error.message}</TypographyH4Muted>;
  }
  if (!products || products.length === 0) {
    return (
      <TypographyH4Muted>
        It seems like there is no products available.
      </TypographyH4Muted>
    );
  }

  // Фильтруем //
  let filteredProducts = products
    .filter(
      (product) =>
        product.price >= priceRange.from && product.price <= priceRange.to
    )
    .filter((product) => !showDiscountedOnly || product.discont_price !== null);

  // Сортируем //
  if (sortOrder) {
    switch (sortOrder) {
      case "newest":
        filteredProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      case "price:low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price:high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "default":
      default:
        break;
    }
  }

  // Ограничиваем по количеству //
  const productsToShow = !showAll
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

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
