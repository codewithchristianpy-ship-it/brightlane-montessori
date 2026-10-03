import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-[0_12px_32px_rgba(46,157,247,0.28)] hover:bg-primary/90",
        secondary:
          "bg-secondary text-ink shadow-[0_12px_28px_rgba(255,201,60,0.28)] hover:bg-secondary/90",
        accent:
          "bg-accent text-white shadow-[0_12px_28px_rgba(255,107,107,0.28)] hover:bg-accent/90",
        ghost: "bg-transparent text-ink hover:bg-slate-100",
        outline: "border border-slate-200 bg-white text-ink hover:bg-slate-50",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
