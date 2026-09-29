import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "compact";
type ButtonSize = "default" | "compact";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-electric-lime-400 text-shuttle-gray-950 hover:brightness-95 focus-visible:ring-electric-lime-400",
  compact:
    "bg-electric-lime-300 text-shuttle-gray-900 hover:brightness-95 focus-visible:ring-electric-lime-300",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "min-h-11 px-6 py-3 text-label-l",
  compact: "min-h-10 px-6 py-2 text-label-m leading-6",
};

export function Button({
  children,
  className,
  disabled,
  size = "default",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-pill font-medium transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
