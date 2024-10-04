import { Link } from "react-router-dom";
import { TypographyH1 } from "../ui/typo/typographyH1";
import { Badge } from "@/components/ui/badge";
import ListCategories from "../listCategories";
export default function MainCategories() {
  return (
    <div className="p-8 mt-16">
      <div className="flex items-center justify-between">
        <TypographyH1>Categories</TypographyH1>
        <div className="flex-grow ml-8">
          <hr className="min-w-full" />
        </div>
        <Link to="/categories">
          <Badge className="h-fit" variant="outline">
            Categories
          </Badge>
        </Link>
      </div>
      <ListCategories limit={4} />
    </div>
  );
}
