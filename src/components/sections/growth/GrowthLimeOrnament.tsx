import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GrowthLimeOrnamentProps {
  className?: string;
  size: number;
}

export function GrowthLimeOrnament({ className, size }: GrowthLimeOrnamentProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute", className)}
      style={{ width: size, height: size }}
    >
      <Image
        className="object-cover"
        src="/images/hero/ornament-pill.png"
        alt=""
        fill
        sizes={`${size}px`}
      />
      <div className="absolute inset-0 bg-electric-lime-400 mix-blend-hard-light [mask-image:url('/images/hero/mask-pill-small.png')] [mask-size:100%_100%]" />
    </div>
  );
}
