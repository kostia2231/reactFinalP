import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import useCartStore from "@/storeHook/storeCart";

export default function Cart() {
  const { items, addItem, removeItem, getTotalPrice } = useCartStore();
  return (
    <div className="flex items-center justify-between m-8">
      <TypographyH1>Shopping Cart</TypographyH1>
      <div className="flex-grow ml-8">
        <hr className="min-w-full" />
      </div>
      <Link to="/all-products">
        <Badge className="h-fit" variant="outline">
          Back to store
        </Badge>
      </Link>
    </div>
  );
}
