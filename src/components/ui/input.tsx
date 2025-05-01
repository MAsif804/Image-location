import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-b border-slate-200 bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent focus:border-none file:text-sm file:font-medium  placeholder:text-slate-500 ",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
