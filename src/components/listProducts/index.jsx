import { DataProvider } from "@/dataHook/data";
import ListProductsItem from "../listProductsItem";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";

export default function ListProducts({ limit, showAll }) {
  const { data, isLoading, isError, error } = DataProvider();

  if (isLoading) return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (isError || error) return console.log("Error ", error.message);

  const limitedData = data?.products
    ?.filter((item) => item.discont_price !== null)
    ?.slice(0, limit);

  const productsToShow = showAll
    ? data?.products
    : limitedData?.slice(0, limit);

  console.log("Fetching Products");

  return (
    <>
      <div className="grid justify-between grid-cols-4 gap-8 my-10">
        {productsToShow?.map((item) => (
          <ListProductsItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
