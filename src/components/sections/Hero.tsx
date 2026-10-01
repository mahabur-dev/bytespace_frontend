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

        <div className="relative mx-auto mt-12 h-[440px] max-w-[360px] sm:max-w-[480px] md:h-[480px] md:max-w-[540px] lg:hidden">
          <div className="absolute inset-x-0 bottom-0 h-[340px] overflow-hidden rounded-t-full bg-electric-lime-400 sm:inset-x-10 md:h-[380px]" />
          <Image
            className="hero-motion-learner object-contain object-bottom"
            src="/images/hero/learner.png"
            alt="A learner wearing headphones and holding a laptop"
            fill
            priority
            sizes="(min-width: 768px) 540px, (min-width: 640px) 480px, 360px"
          />
          <div className="hero-motion-reveal absolute left-0 top-12 rounded-panel bg-white p-3 text-left [animation-delay:520ms]">
            <p className="text-label-s font-medium text-shuttle-gray-950">{heroContent.category.title}</p>
            <p className="text-body-xs text-shuttle-gray-400">{heroContent.category.courses}</p>
          </div>
          <div className="hero-motion-reveal absolute bottom-16 right-0 rounded-panel bg-white p-3 text-left [animation-delay:680ms] sm:right-4 md:bottom-20">
            <p className="text-label-s font-medium text-shuttle-gray-950">{heroContent.progress.label}</p>
            <p className="font-display text-heading-xs font-semibold text-shuttle-gray-950">{heroContent.progress.value}</p>
          </div>
          <div className="hero-motion-reveal absolute bottom-2 left-2 rounded-panel bg-white p-3 text-left shadow-[0_12px_28px_rgb(0_0_0_/_0.14)] [animation-delay:820ms] sm:left-5 md:bottom-4">
            <p className="text-label-s font-medium text-shuttle-gray-950">{heroContent.rating.label}</p>
            <p className="mt-1 flex items-center text-body-xs text-shuttle-gray-400">
              <span className="text-shuttle-gray-950">{heroContent.rating.value} </span>
              <span>{heroContent.rating.count}</span>
              <Image className="ml-1 size-3 shrink-0" src="/icons/star.svg" alt="" width={16} height={16} />
            </p>
            <div className="mt-2 hidden items-center sm:flex">
              {heroContent.avatars.map((avatar) => (
                <Image
                  className="-mr-2 rounded-full border border-white"
                  src={avatar.src}
                  alt=""
                  height={28}
                  key={avatar.id}
                  width={28}
                />
              ))}
              <div className="relative size-7">
                <Image src="/images/hero/avatar-count.svg" alt="" fill sizes="28px" />
                <span className="absolute inset-0 grid place-items-center text-[8px] font-bold text-shuttle-gray-950">
                  {heroContent.avatarCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
