import { TypographyH1 } from "@/components/ui/typo/typographyH1";
import { TypographyH4Muted } from "@/components/ui/typo/TypographyH4Muted";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Image404 from "../../assets/img/404.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-center my-8">
        <h1 className="text-[350px] font-bold leading-[250px] text-primary">
          4
        </h1>
        <img src={Image404} alt="Page not found" />
        <h1 className="text-[350px] font-bold leading-[250px] text-primary">
          4
        </h1>
      </div>

      <TypographyH1>Page Not Found</TypographyH1>
      <div className="flex flex-col items-center justify-center">
        <TypographyH4Muted>
          We’re sorry, the page you requested could not be found.
        </TypographyH4Muted>
        <TypographyH4Muted>Please go back to the homepage.</TypographyH4Muted>
      </div>
      <Button>
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
}
