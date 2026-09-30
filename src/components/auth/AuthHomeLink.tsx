import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface AuthHomeLinkProps {
  className?: string;
}

export function AuthHomeLink({ className }: AuthHomeLinkProps) {
  return (
    <Link
      aria-label="Back to ByteSpace home"
      className={cn(
        "rounded-sm transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400",
        className,
      )}
      href="/"
    >
      <Image src="/icons/bytespace-mark.svg" alt="" width={29} height={32} priority />
    </Link>
  );
}
