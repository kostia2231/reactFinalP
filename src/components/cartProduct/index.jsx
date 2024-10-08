import { TypographyH4 } from "../ui/typo/typographyH4";
import { TypographyH2 } from "../ui/typo/typographyH2";
import { Button } from "../ui/button";
import useCartStore from "@/storeHook/storeCart";

export default function CartProduct({ product }) {
  const { addItem, removeItem, clearOneTypeOfItem } = useCartStore();

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
  return (
    <div className="mb-4 border rounded-xl">
      <div className="flex flex-col gap-8 p-8">
        <div className="flex justify-between h-[20px]">
          <TypographyH4>{product.title}</TypographyH4>
          <Button
            onClick={() => clearOneTypeOfItem(product.id)}
            variant="ghost"
            size="icon"
          >
            X
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-8 border rounded-md h-fit">
            <Button
              onClick={() => removeItem(product.id)}
              variant="ghost"
              size="icon"
              className="m-0 border-r"
            >
              <p className="text-5xl font-thin">-</p>
            </Button>
            <TypographyH4>{product.quantity}</TypographyH4>
            <Button
              onClick={handleAddToCart}
              variant="ghost"
              size="icon"
              className="m-0 border-l"
            >
              <p className="text-4xl font-thin">+</p>
            </Button>
          </div>
          <div className="mt-auto">
            <TypographyH2>
              ${product.discont_price ? product.discont_price : product.price}
            </TypographyH2>
          </div>
          {product.discont_price !== null ? (
            <p className="mt-auto text-xl font-medium line-through text-muted">
              ${product.price}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
