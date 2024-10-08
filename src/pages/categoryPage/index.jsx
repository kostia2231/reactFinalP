import { useCombinedData } from "@/dataHook/data";
import { useParams } from "react-router-dom";
import { TypographyH4Muted } from "@/components/ui/typo/TypographyH4Muted";
import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import ListProductsItem from "@/components/listProductsItem";
import SortComponent from "@/components/sortComponent";

export default function CategoryPage() {
  const { categories, products, isLoading, isError, error } = useCombinedData(
    {}
  ); // Убедитесь, что filters определены
  const { categoryTitle } = useParams();

  // Находим категорию по title
  const thisCategories = categories?.find(
    (category) => category?.title === categoryTitle
  );

  // Фильтруем продукты по ID категории
  const productsInCategory = products?.filter(
    (product) => product?.categoryId === thisCategories?.id
  );

  // Проверяем статус загрузки
  if (isLoading) {
    return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  }

  // Проверяем наличие ошибок
  if (isError) {
    console.error("Error: ", error.message);
    return <TypographyH4Muted>Error: {error.message}</TypographyH4Muted>;
  }

  // Проверяем наличие категории
  if (!thisCategories) {
    return <TypographyH4Muted>Category not found</TypographyH4Muted>;
  }

  return (
    <div className="m-8">
      <TypographyH1>{thisCategories?.title}</TypographyH1>
      <SortComponent />
      <div className="grid justify-between grid-cols-4 gap-8 my-10">
        {productsInCategory?.map((item) => (
          <ListProductsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
