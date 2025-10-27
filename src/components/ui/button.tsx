import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-mono text-sm px-6 py-3 rounded-full transition-all duration-0",
          variant === "solid" &&
            "bg-brand-green text-background hover:bg-brand-green/90 hover:text-background",
          variant === "outline" &&
            "bg-black border border-black text-white hover:bg-black/90 hover:text-background",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
