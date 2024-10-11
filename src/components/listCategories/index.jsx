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
    <div className="grid justify-between grid-cols-4 gap-8 mx-auto my-10">
      {limitedData.map((item) => (
        <div key={item.id}>
          <ListCategoriesItem item={item} />
        </div>
      ))}
    </div>
  );
}
