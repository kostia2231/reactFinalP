import { useCategories } from "@/data/data"; // Импортируем новый хук
import ListCategoriesItem from "../listCategoriesItem";
import { TypographyH4Muted } from "../ui/typo/TypographyH4Muted";

export default function ListCategories({ limit }) {
  const { data: categories, isLoading, isError, error } = useCategories(); // Используем хук

  if (isLoading) return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (isError || error) {
    console.error("Error: ", error?.message);
    return <TypographyH4Muted>Error: {error?.message}</TypographyH4Muted>;
  }

  const limitedData = categories?.slice(0, limit);

  if (!Array.isArray(limitedData) || limitedData.length === 0) {
    return <TypographyH4Muted>No categories found.</TypographyH4Muted>;
  }

  return (
    <div className="grid justify-between gap-8 my-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-[1550px] mx-auto">
      {limitedData.map((item) => (
        <div key={item.id}>
          <ListCategoriesItem item={item} />
        </div>
      ))}
    </div>
  );
}
