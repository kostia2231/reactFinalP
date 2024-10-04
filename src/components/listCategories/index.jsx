import { useData } from "@/dataFetch/data";
import ListCategoriesItem from "../listCategoriesItem";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";

export default function ListCategories({ limit }) {
  const { data, status, error } = useData();

  if (status === "loading")
    return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (status === "error") return console.log("Error: ", error.message);

  const limitedData = data?.categories?.slice(0, limit);

  return (
    <>
      <div className="grid grid-cols-4 gap-6 my-10">
        {limitedData?.map((item) => (
          <div key={item.id}>
            <ListCategoriesItem item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
