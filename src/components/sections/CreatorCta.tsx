import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { creatorCtaContent } from "@/data/creatorCta";
import { cn } from "@/lib/utils";
import { CreatorCtaArtwork } from "./creator-cta/CreatorCtaArtwork";

export interface CreatorCtaProps {
  className?: string;
}

export function CreatorCta({ className }: CreatorCtaProps) {
  return (
    <section
      className={cn(
        "relative isolate min-h-[488px] overflow-hidden bg-persian-blue-800 bg-[url('/images/hero/grid.svg')] bg-[length:1440px_1024px] bg-[position:center_-120px]",
        className,
      )}
      id="creators"
    >
      <CreatorCtaArtwork />
      <Container className="relative z-10 flex min-h-[488px] flex-col items-center px-5 pb-16 pt-[87px] text-center">
        <h2 className="whitespace-pre-line font-display text-display-xs font-semibold text-white lg:w-[710px] lg:text-display-s">
          {creatorCtaContent.title}
        </h2>
        <p className="mt-10 max-w-full text-body-m text-shuttle-gray-100 lg:w-[964px] lg:text-body-l lg:leading-[29px]">
          {creatorCtaContent.description}
        </p>
        <Link
          className="mt-10 inline-flex min-h-[46px] items-center justify-center rounded-pill bg-electric-lime-400 px-6 py-3 text-label-l font-medium text-shuttle-gray-950 transition duration-200 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-persian-blue-800"
          href={creatorCtaContent.buttonHref}
        >
          <span className="inline-block h-[22px] w-[124px] leading-[22px]">
            {creatorCtaContent.buttonLabel}
          </span>
        </Link>
      </Container>
    </section>
  );
}
