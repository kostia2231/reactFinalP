import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { TypographyH4 } from "@/components/ui/typo/TypographyH4";
import useCartStore from "@/store/storeCart";
import PropTypes from "prop-types";

export default function CartSelector({ product }) {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const cart = useCartStore((state) => state.cart);

  const item = cart.find((p) => p.id === product?.id);
  const itemQuantity = item ? item.quantity : 0;

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
    <>
      <div className="flex items-center gap-8 border rounded-md h-fit">
        <Button
          onClick={() => removeItem(product.id)}
          variant="ghost"
          size="icon"
          className="m-0 border-r"
        >
          <p className="text-5xl font-thin">
            <Minus />
          </p>
        </Button>
        <TypographyH4>{itemQuantity}</TypographyH4>
        <Button
          onClick={handleAddToCart}
          variant="ghost"
          size="icon"
          className="m-0 border-l"
        >
          <p className="text-4xl font-thin">
            <Plus />
          </p>
        </Button>
      </div>
      <Button onClick={handleAddToCart} className="w-screen m-0 h-14">
        Add to cart
      </Button>
    </>
  );
}

CartSelector.propTypes = {
  product: PropTypes.object,
};
