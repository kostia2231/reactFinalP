import { TypographyH1 } from "../ui/typo/typographyH1";
import { Badge } from "@/components/ui/badge";

export default function MainCategories() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <TypographyH1 content="Categories" />
        <div className="flex-grow ml-8">
          <hr className="min-w-full" />
        </div>
        <Badge className="h-fit" variant="outline">
          Categories
        </Badge>
      </div>
      {/* GALLERY TO DO */}
    </div>
  );
}
