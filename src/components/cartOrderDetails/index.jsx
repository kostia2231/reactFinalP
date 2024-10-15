import { TypographyH2 } from "../ui/typo/typographyH2";
import { TypographyH1 } from "../ui/typo/typographyH1";
import useCartStore from "@/store/storeCart";

export default function CartOrderDetails() {
  const getCartCount = useCartStore((state) => state.getCartCount);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  return (
    <>
      <div className="flex flex-col gap-4">
        <TypographyH2 moreStyle="font-[700]">Order details</TypographyH2>
        <TypographyH2 moreStyle="text-muted font-[500]">
          {getCartCount()} items
        </TypographyH2>
        <div className="flex justify-between">
          <TypographyH2 moreStyle="text-muted font-[500] mt-auto">
            Total:
          </TypographyH2>
          <TypographyH1>${getTotalPrice()},00</TypographyH1>
        </div>
      </div>
    </>
  );
}
