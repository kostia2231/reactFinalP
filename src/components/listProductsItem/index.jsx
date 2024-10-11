import { Link } from "react-router-dom";
import { TypographyH4 } from "../ui/typo/typographyH4";

export default function ListProductsItem({ item }) {
  return (
    <div className="border rounded-xl">
      <Link to={`/all-products/${item.title}`}>
        <div className="bg-slate-200 h-[350px] w-full rounded-xl"></div>
        <div className="flex flex-col items-center justify-center gap-4 p-8 mb-auto ">
          {/* <img src={item.image} alt="Sales Image" /> */}
          <div className="grid gap-4">
            <div>
              <TypographyH4 moreStyle="w-[316px] truncate">
                {item.title}
              </TypographyH4>
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
