import { Link } from "react-router-dom";
import { TypographyH4 } from "../ui/typo/typographyH4";
import DiscountBadge from "../ui/discountBadge";
import { Button } from "../ui/button";

export default function ListProductsItem({ item }) {
  const discount = Math.round(
    ((item.price - item.discont_price) / item.discont_price) * 100
  );
  return (
    <div className="border rounded-xl">
      <Link to={`/all-products/${item.title}`}>
        <div className="bg-secondary h-[350px] w-full rounded-xl relative group">
          {item.discont_price ? (
            <DiscountBadge discount={discount} moreStyle="absolute m-4" />
          ) : null}
          <div className="absolute bottom-0 hidden w-full p-4 group-hover:block">
            <Button className="bottom-0 w-full mx-auto">Add to cart</Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8 mb-auto">
          {/* <img src={item.image} alt="Sales Image" /> */}
          <div className="grid gap-4">
            <div>
              <TypographyH4 moreStyle="line-clamp-1">{item.title}</TypographyH4>
            </div>
            <div className="flex gap-4">
              <p className="text-[40px] mt-auto leading-none font-semibold text-accent">
                ${item.discont_price ? item.discont_price : item.price}
              </p>

              {item.discont_price === null || (
                <p className="mt-auto text-xl font-medium line-through text-muted">
                  ${item.price}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
