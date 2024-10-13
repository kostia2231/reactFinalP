import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";
import ListProductsItem from "../listProductsItem";
import { useProducts } from "@/data/data";

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
        (product.discont_price ? product.discont_price : product.price) >=
          priceRange.from &&
        (product.discont_price ? product.discont_price : product.price) <=
          priceRange.to
    )
    .filter((product) => !showDiscountedOnly || product.discont_price !== null);

  // Сортируем //
  // (добавить условие цен) (блин снова забыл что цена и скидочная цена это разные вещи >.<)
  // !дата кстати одинаковая поэтому сортировка не происходит
  if (sortOrder) {
    switch (sortOrder) {
      case "newest":
        filteredProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      case "price:low-high":
        filteredProducts.sort(
          (a, b) =>
            (a.discont_price ? a.discont_price : a.price) -
            (b.discont_price ? b.discont_price : b.price)
        );
        break;
      case "price:high-low":
        filteredProducts.sort(
          (a, b) =>
            (b.discont_price ? b.discont_price : b.price) -
            (a.discont_price ? a.discont_price : a.price)
        );
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
    <div className="grid justify-between gap-8 my-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-[1550px] mx-auto">
      {productsToShow.map((item) => (
        <ListProductsItem key={item.id} item={item} />
      ))}
    </div>
  );
}
