import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface AuthHomeLinkProps {
  className?: string;
  imageClassName?: string;
  variant?: "mark" | "back";
}

export function AuthHomeLink({
  className,
  imageClassName,
  variant = "mark",
}: AuthHomeLinkProps) {
  if (variant === "back") {
    return (
      <Link
        aria-label="Back to ByteSpace home"
        className={cn(
          "group inline-flex items-center gap-2 rounded-full border border-persian-blue-800/10 bg-persian-blue-800/[0.04] px-3 py-2 font-display text-[13px] font-medium leading-none text-persian-blue-800 shadow-[0_6px_18px_rgb(0_59_226_/_0.06)] transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-persian-blue-800/20 hover:bg-persian-blue-800/[0.08] hover:shadow-[0_10px_24px_rgb(0_59_226_/_0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persian-blue-800 focus-visible:ring-offset-2 motion-reduce:transform-none",
          className,
        )}
        href="/"
      >
        <svg
          aria-hidden="true"
          className="size-4 transition-transform duration-300 ease-out group-hover:-translate-x-0.5 motion-reduce:transform-none"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            d="M15.5 10H4.5m0 0 4.25-4.25M4.5 10l4.25 4.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
        </svg>
        <span>Back to Home</span>
      </Link>
    );
  }

  return (
    <Link
      aria-label="Back to ByteSpace home"
      className={cn(
        "rounded-sm transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400",
        className,
      )}
      href="/"
    >
      <Image
        className={imageClassName}
        src="/icons/bytespace-mark.svg"
        alt=""
        width={29}
        height={32}
        priority
      />
    </Link>
  );
}
