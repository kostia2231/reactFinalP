import { Link, useLocation } from "react-router-dom";
import { TypographyH4 } from "../ui/typo/typographyH4";
import DiscountBadge from "../ui/discountBadge";
import { Button } from "../ui/button";
import useCartStore from "@/store/storeCart";
import PropTypes from "prop-types";
// import { useState } from "react";

export default function ListProductsItem({ item }) {
  const addItem = useCartStore((state) => state.addItem);

  const { pathname } = useLocation();
  // const [isAdded, setIsAdded] = useState(false);

  // const navigate = useNavigate();
  // const toCart = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const path = `/cart`;
  //   navigate(path);
  // };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (item) {
      addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        discont_price: item.discont_price,
        img: item.image,
      });
      // setIsAdded(true);
    }
  };

  const discount = item.discont_price
    ? Math.round(((item.price - item.discont_price) / item.price) * 100)
    : 0;

  return (
    <div className="border rounded-xl">
      <Link to={`${pathname === "/" ? "all-sales" : pathname}/${item.title}`}>
        <div className="bg-secondary h-[350px] w-full rounded-xl relative group">
          {item.discont_price ? (
            <DiscountBadge discount={discount} moreStyle="absolute m-4" />
          ) : null}
          <div className="absolute bottom-0 hidden w-full p-4 group-hover:block">
            <Button
              onClick={handleAddToCart}
              className="bottom-0 w-full mx-auto"
            >
              Add to cart
            </Button>
            {/* 
            //     <Button
            //       onClick={toCart}
            //       className="bottom-0 w-full mx-auto bg-white text-accent hover:bg-white active:bg-slate-50"
            //     >
            //       View in cart
            //     </Button> */}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8 mb-auto">
          {/* <img src=`URL${item.image}` alt="Sales Image" /> */}
          <div className="grid gap-4 mr-auto">
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

ListProductsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discont_price: PropTypes.number,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
