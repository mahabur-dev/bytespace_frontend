import Image from "next/image";
import { heroContent } from "@/data/hero";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { HeroArtwork } from "./hero/HeroArtwork";
import { HeroSearch } from "./hero/HeroSearch";

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "blue-grid-offset relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-persian-blue-800 lg:h-[904px] lg:min-h-[904px]",
        className,
      )}
    >
      <HeroArtwork hero={heroContent} />
      <Container className="relative z-20 pt-16 text-center lg:pt-[49px]">
        <div className="mx-auto max-w-[935px]">
          <h1 className="hero-motion-reveal font-display text-display-xs font-semibold text-white lg:h-[172px] lg:w-[935px] lg:text-heading-l">
            {heroContent.title}
          </h1>
          <p className="hero-motion-reveal mx-auto mt-6 max-w-[819px] text-body-m font-normal tracking-normal text-shuttle-gray-100 [animation-delay:120ms] lg:mt-8 lg:h-[29px] lg:w-[819px] lg:text-body-l">
            {heroContent.subtitle}
          </p>
        </div>
        <HeroSearch />

        <div className="relative mx-auto mt-12 h-[385px] max-w-[360px] lg:hidden">
          <div className="absolute inset-x-0 bottom-0 h-[300px] overflow-hidden rounded-t-full bg-electric-lime-400" />
          <Image
            className="hero-motion-learner object-contain object-bottom"
            src="/images/hero/learner.png"
            alt="A learner wearing headphones and holding a laptop"
            fill
            priority
            sizes="360px"
          />
          <div className="hero-motion-reveal absolute left-0 top-12 rounded-panel bg-white p-3 text-left [animation-delay:520ms]">
            <p className="text-label-s font-medium text-shuttle-gray-950">{heroContent.category.title}</p>
            <p className="text-body-xs text-shuttle-gray-400">{heroContent.category.courses}</p>
          </div>
          <div className="hero-motion-reveal absolute bottom-8 right-0 rounded-panel bg-white p-3 text-left [animation-delay:680ms]">
            <p className="text-label-s font-medium text-shuttle-gray-950">{heroContent.progress.label}</p>
            <p className="font-display text-heading-xs font-semibold text-shuttle-gray-950">{heroContent.progress.value}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
