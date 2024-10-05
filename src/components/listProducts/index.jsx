import { DataProvider } from "@/dataFetch/data";
import ListProductsItem from "../listProductsItem";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";

export default function ListProducts({ limit, showAll }) {
  const { data, status, error } = DataProvider();

  if (status === "loading")
    return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (status === "error") return console.log("Error: ", error.message);

  const limitedData = data?.products
    ?.filter((item) => item.discont_price !== null)
    ?.slice(0, limit);

  const productsToShow = showAll
    ? data?.products
    : limitedData?.slice(0, limit);

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
