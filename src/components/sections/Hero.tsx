import Image from "next/image";
import { heroContent } from "@/data/hero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { HeroArtwork } from "./hero/HeroArtwork";

export interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative isolate min-h-[calc(100svh-72px)] overflow-hidden bg-persian-blue-800 bg-[url('/images/hero/grid.svg')] bg-[length:1440px_1024px] bg-[position:center_-120px] lg:h-[904px] lg:min-h-[904px]",
        className,
      )}
    >
      <HeroArtwork hero={heroContent} />
      <Container className="relative z-20 pt-16 text-center lg:pt-[49px]">
        <div className="mx-auto max-w-[935px]">
          <h1 className="font-display text-display-xs font-semibold text-white lg:text-heading-l">
            {heroContent.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[819px] text-body-m text-shuttle-gray-100 lg:mt-8 lg:text-body-l">
            {heroContent.subtitle}
          </p>
        </div>
        <form className="mx-auto mt-10 flex max-w-[581px] flex-col gap-4 sm:flex-row lg:mt-[60px]" method="get" role="search">
          <Input
            aria-label="Search courses"
            className="w-full text-left sm:w-[461px]"
            name="search"
            placeholder={heroContent.search.placeholder}
            startAdornment={<Image src="/icons/search.svg" alt="" width={24} height={24} />}
            type="search"
          />
          <Button className="min-h-[46px] shrink-0" type="submit">
            {heroContent.search.buttonLabel}
          </Button>
        </form>

        <div className="relative mx-auto mt-12 h-[385px] max-w-[360px] lg:hidden">
          <div className="absolute inset-x-0 bottom-0 h-[300px] overflow-hidden rounded-t-full bg-electric-lime-400" />
          <Image
            className="object-contain object-bottom"
            src="/images/hero/learner.png"
            alt="A learner wearing headphones and holding a laptop"
            fill
            priority
            sizes="360px"
          />
          <div className="absolute left-0 top-12 rounded-panel bg-white p-3 text-left">
            <p className="text-label-s font-medium text-shuttle-gray-950">{heroContent.category.title}</p>
            <p className="text-body-xs text-shuttle-gray-400">{heroContent.category.courses}</p>
          </div>
          <div className="absolute bottom-8 right-0 rounded-panel bg-white p-3 text-left">
            <p className="text-label-s font-medium text-shuttle-gray-950">{heroContent.progress.label}</p>
            <p className="font-display text-heading-xs font-semibold text-shuttle-gray-950">{heroContent.progress.value}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
