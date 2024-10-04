import { useData } from "@/dataFetch/data";
import ListSalesItem from "../listSalesItem";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";

export default function ListCategories({ limit }) {
  const { data, status, error } = useData();

  if (status === "loading")
    return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (status === "error") return console.log("Error: ", error.message);

  const limitedData = data?.products?.slice(0, limit);

  return (
    <>
      <div className="grid grid-cols-4 gap-6 my-10">
        {limitedData?.map((item) => (
          <ListSalesItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
