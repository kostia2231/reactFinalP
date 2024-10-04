import ListCategories from "@/components/listCategories";
import { TypographyH1 } from "@/components/ui/typo/typographyH1";

export default function Categories() {
  return (
    <div className="m-8">
      <TypographyH1>Categories</TypographyH1>
      <ListCategories limit={1000} />
    </div>
  );
}
