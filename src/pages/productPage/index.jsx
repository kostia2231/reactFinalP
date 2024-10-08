import { DataProvider } from "@/dataHook/data";
import { useParams } from "react-router-dom";
import { TypographyH4Muted } from "@/components/ui/typo/TypographyH4Muted";
import { TypographyH2 } from "@/components/ui/typo/typographyH2";
import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import { TypographyH4 } from "@/components/ui/typo/typographyH4";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
  const { data, status, error } = DataProvider();
  const { productTitle } = useParams();
  const product = data?.products?.find(
    (product) => product?.title === productTitle
  );

  if (status === "loading")
    return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (status === "error") return console.log("Error: ", error.message);

  return (
    <div className="m-8 grid grid-cols-2 gap-8">
      <div>Gallery </div>
      <div className="flex flex-col gap-8">
        <TypographyH2>{product?.title}</TypographyH2>
        <div className="flex gap-8">
          <TypographyH1>${product?.price}</TypographyH1>
          {product?.discont_price === null || (
            <p className="mt-auto text-4xl font-medium line-through text-muted">
              ${product?.discont_price}
            </p>
          )}
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8 border h-fit rounded-md">
            <Button variant="ghost" size="icon" className="m-0 border-r">
              <p className=" text-5xl font-thin">-</p>
            </Button>
            <TypographyH4>0</TypographyH4>
            <Button variant="ghost" size="icon" className="m-0 border-l">
              <p className=" text-4xl font-thin">+</p>
            </Button>
          </div>
          <Button className="m-0 h-14 w-screen">Add to cart</Button>
        </div>
        <div className="flex flex-col gap-4">
          <TypographyH4 moreStyle="font-semibold">Description</TypographyH4>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
}
