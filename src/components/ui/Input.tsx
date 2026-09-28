import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
}

export function Input({ className, endAdornment, startAdornment, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "flex min-h-[52px] items-center gap-2 rounded-pill bg-white px-6 py-3 text-body-l text-shuttle-gray-950 ring-1 ring-transparent transition focus-within:ring-2 focus-within:ring-persian-blue-800",
        className,
      )}
    >
      {startAdornment ? <span className="shrink-0">{startAdornment}</span> : null}
      <input
        className="min-w-0 flex-1 bg-transparent text-body-l text-shuttle-gray-950 outline-none placeholder:text-shuttle-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      />
      {endAdornment ? <span className="shrink-0">{endAdornment}</span> : null}
    </div>
  );
}
