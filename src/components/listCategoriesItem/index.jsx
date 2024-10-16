import { TypographyH4 } from "../ui/typo/typographyH4";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ListCategoriesItem({ item }) {
  return (
    <div>
      <Link to={`/categories/${item.title}`}>
        <div className="flex flex-col items-center justify-center gap-4">
          {/* <img src={item.image} alt="Categories Image" /> */}

          <div className="bg-secondary h-[350px] w-full rounded-xl"></div>
          <TypographyH4>{item.title}</TypographyH4>
        </div>
      </Link>
    </div>
  );
}

ListCategoriesItem.propTypes = {
  item: PropTypes.object.isRequired,
};
