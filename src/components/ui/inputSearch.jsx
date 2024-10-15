import * as React from "react";

import { cn } from "@/lib/utils";

const InputSearch = React.forwardRef(
  ({ id, name, className, type, ...props }, ref) => {
    // const handleWheel = (event) => {
    //   event.preventDefault();
    // };
    return (
      <input
        // value={value}
        id={id}
        name={name}
        type={type}
        // onWheel={handleWheel}
        className={cn(
          "touch-none hover:border-secondary max-w-[115px] border rounded-lg px-4 py-2 focus-visible:outline-primary",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
InputSearch.displayName = "Input";

export { InputSearch };
