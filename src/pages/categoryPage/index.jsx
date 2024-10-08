import { DataProvider } from "@/dataHook/data";
import { useParams } from "react-router-dom";
import { TypographyH4Muted } from "@/components/ui/typo/TypographyH4Muted";
import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import ListProductsItem from "@/components/listProductsItem";
import SortComponent from "@/components/sortComponent";

export default function CategoryPage() {
  const { data, status, error } = DataProvider();
  const { categoryTitle } = useParams();

  const categories = data?.categories?.find(
    (category) => category?.title === categoryTitle
  );
  const productsInCategory = data?.products?.filter(
    (product) => product?.categoryId === categories?.id
  );

  if (status === "loading")
    return <TypographyH4Muted>Loading...</TypographyH4Muted>;

  if (status === "error") return console.log("Error: ", error.message);

  if (!categories) {
    return <TypographyH4Muted>Category not found</TypographyH4Muted>;
  }

  return (
    <>
      <div className="m-8">
        <TypographyH1>{categories?.title}</TypographyH1>
        <SortComponent />
        <div className="grid justify-between grid-cols-4 gap-8 my-10">
          {productsInCategory?.map((item) => (
            <ListProductsItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
