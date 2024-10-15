import { TypographyH4 } from "../ui/typo/typographyH4";
import { TypographyH2 } from "../ui/typo/typographyH2";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import useCartStore from "@/store/storeCart";
import PropTypes from "prop-types";
import CartSelector from "@/components/cartSelector";

export default function CartProduct({ product }) {
  const clearOneTypeOfItem = useCartStore((state) => state.clearOneTypeOfItem);

  return (
    <div className="flex justify-between mb-4 border rounded-xl">
      <div className="flex ">
        <div className="min-w-[200px] bg-secondary rounded-xl border-r"></div>
        <div className="flex flex-col gap-8 p-8 ">
          <div className="flex justify-between">
            <TypographyH4>{product.title}</TypographyH4>
          </div>
          <div className="flex items-center gap-4">
            <CartSelector blockButton={true} product={product} />

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
      <div className="p-8">
        <Button
          onClick={() => clearOneTypeOfItem(product.id)}
          variant="ghost"
          size="icon"
        >
          <X />
        </Button>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discont_price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};
