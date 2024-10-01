import { TypographyH1 } from "../ui/typo/typographyH1";
import { Badge } from "@/components/ui/badge";

export default function SaleComponent() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <TypographyH1 content="Sale" />
        <div className="flex-grow ml-8">
          <hr className="min-w-full" />
        </div>
        <Badge className="h-fit" variant="outline">
          Sale
        </Badge>
      </div>
      {/* GALLERY TO DO */}
    </div>
  );
}
