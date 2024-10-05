import { DataProvider } from "@/dataFetch/data";
import ListCategoriesItem from "../listCategoriesItem";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";

export default function ListCategories({ limit }) {
  const { data, status, error } = DataProvider();

  if (status === "loading")
    return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (status === "error") return console.log("Error: ", error.message);

  const limitedData = data?.categories?.slice(0, limit);

  return (
    <>
      <div className="grid justify-between grid-cols-4 gap-8 my-10">
        {limitedData?.map((item) => (
          <div key={item.id}>
            <ListCategoriesItem item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
