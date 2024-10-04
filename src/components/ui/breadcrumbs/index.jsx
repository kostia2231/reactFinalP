import { Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink = `/${crumb}`;

      const formattedCrumb = crumb
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toLocaleUpperCase() + word.slice(1))
        .join(" ");

      return (
        <div className="flex items-center" key={crumb}>
          <Badge variant="outline">
            <Link to={currentLink}>{formattedCrumb}</Link>
          </Badge>
          {index < array.length - 1 && (
            <div className="w-4 my-auto">
              <hr className="min-w-full" />
            </div>
          )}
        </div>
      );
    });

  if (
    location.pathname === "/" ||
    location.pathname === "" ||
    location.pathname === "/404"
  ) {
    return null;
  }

  return (
    <div className="flex m-8">
      <Badge variant="outline">
        <Link to="/">Main Page</Link>
      </Badge>
      <div className="w-4 my-auto">
        <hr className="min-w-full" />
      </div>
      {crumbs}
    </div>
  );
}
