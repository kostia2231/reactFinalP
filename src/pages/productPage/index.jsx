import { useProducts } from "@/data/data";
import { useParams } from "react-router-dom";
import { TypographyH4Muted } from "@/components/ui/typo/TypographyH4Muted";
import { TypographyH2 } from "@/components/ui/typo/typographyH2";
import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import { TypographyH4 } from "@/components/ui/typo/typographyH4";
import DiscountBadge from "@/components/ui/discountBadge";
import CartSelector from "@/components/cartSelector";

export default function ProductPage() {
  const { data: products, status, error } = useProducts();
  const { productTitle } = useParams();
  const product = products?.find((product) => product?.title === productTitle);

  const discount = Math.round(
    ((product?.price - product?.discont_price) / product?.discont_price) * 100
  );

  if (!product) {
    return <TypographyH4Muted>Product not found.</TypographyH4Muted>;
  }

  if (status === "loading")
    return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (status === "error") return console.log("Error: ", error.message);

  return (
    <div className="grid grid-cols-2 gap-8 m-8">
      <div className="bg-secondary rounded-xl h-[700px]"></div>
      <div className="flex flex-col gap-8">
        <TypographyH2>{product?.title}</TypographyH2>
        <div className="flex gap-8">
          <TypographyH1>
            ${product?.discont_price ? product?.discont_price : product?.price}
          </TypographyH1>
          {product?.discont_price === null || (
            <p className="mt-auto text-4xl font-medium line-through text-muted">
              ${product?.price}
            </p>
          )}
          {product?.discont_price ? (
            <DiscountBadge discount={discount} moreStyle="block" />
          ) : null}
        </div>
        <div className="flex items-center gap-8">
          <CartSelector product={product} />
        </div>
        <div className="flex flex-col gap-4">
          <TypographyH4 moreStyle="font-semibold">Description</TypographyH4>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
}
