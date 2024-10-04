// ---- to make real Breadcrumbs

import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="flex justify-start m-8">
      <Link to="/">
        <Badge className="h-fit" variant="outline">
          Main Page
        </Badge>
      </Link>
      <div className="w-4 my-auto">
        <hr className="min-w-full" />
      </div>
      <Badge className="h-fit text-accent" variant="outline">
        Categories
      </Badge>
    </div>
  );
}
