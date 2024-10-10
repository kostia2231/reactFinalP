import { TypographyH1 } from "../ui/typo/typographyH1";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import ListProducts from "../listProducts";

export default function SaleComponent() {
  return (
    <div className="p-8 mt-16">
      <div className="flex items-center justify-between">
        <TypographyH1>Sales</TypographyH1>
        <div className="flex-grow ml-8">
          <hr className="min-w-full" />
        </div>
        <Link to="/all-sales">
          <Badge className="h-fit" variant="outline">
            Sales
          </Badge>
        </Link>
      </div>
      <ListProducts limit={4} showAll={false} showDiscountedOnly={true} />
    </div>
  );
}
