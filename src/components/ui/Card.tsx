import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "bordered" | "plain";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  bordered: "border border-shuttle-gray-200",
  plain: "border border-transparent",
};

export function Card({ children, className, variant = "bordered", ...props }: CardProps) {
  return (
    <div className={cn("overflow-hidden rounded-card bg-white", variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
}
