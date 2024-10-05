import * as React from "react";

import { cn } from "@/lib/utils";

const InputSearch = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "max-w-[115px] border rounded-lg px-4 py-2 focus-visible:outline-primary",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
InputSearch.displayName = "Input";

export { InputSearch };
