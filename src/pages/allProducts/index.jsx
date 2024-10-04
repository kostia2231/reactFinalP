import ListProducts from "@/components/listProducts";
import { TypographyH1 } from "@/components/ui/typo/typographyH1";

export default function AllProducts() {
  return (
    <div className="m-8">
      <TypographyH1>All Products</TypographyH1>
      <ListProducts limit={100} showAll={true} />
    </div>
  );
}
