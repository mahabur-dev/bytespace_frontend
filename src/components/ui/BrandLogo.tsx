import type { HTMLAttributes } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoTone = "dark" | "light";

export interface BrandLogoProps extends HTMLAttributes<HTMLDivElement> {
  tone?: BrandLogoTone;
}

const toneClasses: Record<BrandLogoTone, string> = {
  dark: "text-shuttle-gray-950",
  light: "text-shuttle-gray-50",
};

export function BrandLogo({ className, tone = "dark", ...props }: BrandLogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", toneClasses[tone], className)} {...props}>
      <Image src="/icons/bytespace-mark.svg" alt="" width={29} height={32} />
      <span className="font-logo text-2xl leading-none">ByteSpace</span>
    </div>
  );
}
