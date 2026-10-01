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
        "blue-grid-offset relative isolate min-h-[488px] overflow-hidden bg-persian-blue-800",
        className,
      )}
      id="creators"
      style={{ backgroundPosition: "left -120px" }}
    >
      <CreatorCtaArtwork />
      <Container className="relative z-10 flex min-h-[488px] flex-col items-center px-5 pb-16 pt-[87px] text-center">
        <h2 className="creator-cta-reveal whitespace-pre-line font-display text-display-xs font-semibold text-white lg:w-[710px] lg:text-display-s">
          {creatorCtaContent.title}
        </h2>
        <p className="creator-cta-reveal creator-cta-reveal-copy mt-10 max-w-full text-body-m text-shuttle-gray-100 lg:w-[964px] lg:text-body-l lg:leading-[29px]">
          {creatorCtaContent.description}
        </p>
        <div className="creator-cta-reveal creator-cta-reveal-button mt-10">
          <Link
            className="inline-flex min-h-[46px] items-center justify-center rounded-pill bg-electric-lime-400 px-6 py-3 text-label-l font-medium text-shuttle-gray-950 transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:brightness-95 hover:shadow-[0_16px_34px_rgb(0_0_0_/_0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-persian-blue-800 active:translate-y-0 motion-reduce:transform-none"
            href={creatorCtaContent.buttonHref}
          >
            <span className="inline-block h-[22px] w-[124px] leading-[22px]">
              {creatorCtaContent.buttonLabel}
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
