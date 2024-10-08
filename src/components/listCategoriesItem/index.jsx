import { TypographyH4 } from "../ui/typo/typographyH4";
import { Link } from "react-router-dom";

export default function ListCategoriesItem({ item }) {
  return (
    <>
      <Link to={`/categories/${item.title}`}>
        <div className="flex flex-col items-center justify-center gap-4">
          {/* <img src={item.image} alt="Categories Image" /> */}

          <div className="bg-slate-200 h-[350px] w-[316px] rounded-xl"></div>
          <TypographyH4>{item.title}</TypographyH4>
        </div>
      </Link>
    </>
  );
}
