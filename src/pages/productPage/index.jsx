import { useProducts } from "@/dataHook/data";
import { useParams } from "react-router-dom";
import { TypographyH4Muted } from "@/components/ui/typo/TypographyH4Muted";
import { TypographyH2 } from "@/components/ui/typo/typographyH2";
import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import { TypographyH4 } from "@/components/ui/typo/typographyH4";
import { Button } from "@/components/ui/button";
import useCartStore from "@/storeHook/storeCart";

export default function ProductPage() {
  const { addItem, removeItem, cart } = useCartStore();
  const { data: products, status, error } = useProducts();
  const { productTitle } = useParams();
  const product = products?.find((product) => product?.title === productTitle);
  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        discont_price: product.discont_price,
        img: product.image,
      });
    }
  };
  // считаем колл. конкретного айтема
  // const cartItems = useCartStore((state) => state.cart);
  const item = cart.find((p) => p.id === product?.id);
  const itemQuantity = item ? item.quantity : 0;

  // console.log(itemQuantity);

  if (status === "loading")
    return <TypographyH4Muted>Loading...</TypographyH4Muted>;
  if (status === "error") return console.log("Error: ", error.message);
  //
  return (
    <div className="grid grid-cols-2 gap-8 m-8">
      <div>Gallery </div>
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
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8 border rounded-md h-fit">
            <Button
              onClick={() => removeItem(product.id)}
              variant="ghost"
              size="icon"
              className="m-0 border-r"
            >
              <p className="text-5xl font-thin ">-</p>
            </Button>
            <TypographyH4>{itemQuantity}</TypographyH4>
            <Button
              onClick={handleAddToCart}
              variant="ghost"
              size="icon"
              className="m-0 border-l"
            >
              <p className="text-4xl font-thin ">+</p>
            </Button>
          </div>
          <Button onClick={handleAddToCart} className="w-screen m-0 h-14">
            Add to cart
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <TypographyH4 moreStyle="font-semibold">Description</TypographyH4>
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
}
