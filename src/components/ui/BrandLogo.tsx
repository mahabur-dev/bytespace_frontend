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
    <div className={cn("inline-flex items-start gap-2", toneClasses[tone], className)} {...props}>
      <Image
        className="shrink-0"
        src="/icons/bytespace-mark.svg"
        alt=""
        width={29}
        height={32}
      />
      <span className="mt-[7px] h-[30px] w-[134px] whitespace-nowrap font-logo text-2xl leading-[30px]">
        ByteSpace
      </span>
    </div>
  );
}
