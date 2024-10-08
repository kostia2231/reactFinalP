import { DataProvider } from "@/dataHook/data";
import ListCategoriesItem from "../listCategoriesItem";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";

export default function ListCategories({ limit }) {
  const { data, isLoading, isError, error } = DataProvider();
  console.log(data);
  if (isLoading) return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (isError || error) return console.log("Error ", error.message);

  const limitedData = data?.categories?.slice(0, limit);

  console.log("Fetching Categories");

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
