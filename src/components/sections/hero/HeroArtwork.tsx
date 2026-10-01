import Image from "next/image";
import type { HeroContent } from "@/data/hero";
import { cn } from "@/lib/utils";

interface HeroOrnamentProps {
  className: string;
  colorClassName: string;
  enterDelay: number;
  mask: string;
  motionClassName: string;
  size: string;
  src: string;
}

function HeroOrnament({
  className,
  colorClassName,
  enterDelay,
  mask,
  motionClassName,
  size,
  src,
}: HeroOrnamentProps) {
  return (
    <div className={className}>
      <div className="hero-motion-ornament-enter absolute inset-0" style={{ animationDelay: `${enterDelay}ms` }}>
        <div className={cn("absolute inset-0", motionClassName)}>
          <Image className="object-cover" src={src} alt="" fill sizes={size} />
          <div
            className={cn("absolute inset-0 mix-blend-hard-light", colorClassName)}
            style={{ maskImage: `url('${mask}')`, maskSize: "100% 100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export interface HeroArtworkProps {
  hero: HeroContent;
}

export function HeroArtwork({ hero }: HeroArtworkProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden lg:bottom-auto lg:h-[904px]">
      <div className="hidden sm:block lg:hidden">
        <HeroOrnament
          className="absolute -bottom-20 -left-14 size-56 md:-bottom-16 md:left-[-30px] md:size-64"
          colorClassName="bg-shuttle-gray-50"
          enterDelay={640}
          mask="/images/hero/mask-cone-left.png"
          motionClassName="hero-motion-ambient-b [animation-delay:-9s]"
          size="256px"
          src="/images/hero/ornament-cone-left.png"
        />
        <HeroOrnament
          className="absolute -bottom-10 -right-12 size-48 md:bottom-4 md:right-[-28px] md:size-56"
          colorClassName="bg-electric-lime-400"
          enterDelay={720}
          mask="/images/hero/mask-pill-large.png"
          motionClassName="hero-motion-ambient-c [animation-delay:-5s]"
          size="224px"
          src="/images/hero/ornament-pill.png"
        />
        <HeroOrnament
          className="absolute -right-16 top-[310px] size-40 md:-right-12 md:top-[350px] md:size-48"
          colorClassName="bg-shuttle-gray-50"
          enterDelay={520}
          mask="/images/hero/mask-sphere.png"
          motionClassName="hero-motion-ambient-a [animation-delay:-7s]"
          size="192px"
          src="/images/hero/ornament-sphere.png"
        />
      </div>

      <div className="hidden lg:block">
      <div className="absolute left-1/2 top-[462px] size-[1149px] -translate-x-1/2">
        <div className="hero-motion-ellipse-enter absolute inset-0">
          <Image src="/images/hero/hero-ellipse.svg" alt="" fill sizes="1149px" />
        </div>
      </div>

      <HeroOrnament
        className="absolute left-[calc(50%-838px)] top-[101px] size-[385px] 2xl:left-[-118px]"
        colorClassName="bg-electric-lime-400"
        enterDelay={180}
        mask="/images/hero/mask-pill-large.png"
        motionClassName="hero-motion-ambient-a"
        size="385px"
        src="/images/hero/ornament-pill.png"
      />
      <HeroOrnament
        className="absolute left-[calc(50%-536px)] top-[357px] size-[175px] -scale-x-100 2xl:left-[184px]"
        colorClassName="bg-shuttle-gray-50"
        enterDelay={300}
        mask="/images/hero/mask-pill-small.png"
        motionClassName="hero-motion-ambient-b [animation-delay:-4s]"
        size="175px"
        src="/images/hero/ornament-pill.png"
      />
      <HeroOrnament
        className="absolute left-[calc(50%+407px)] top-[552px] size-[330px] 2xl:left-auto 2xl:right-[-17px]"
        colorClassName="bg-shuttle-gray-50"
        enterDelay={540}
        mask="/images/hero/mask-sphere.png"
        motionClassName="hero-motion-ambient-c [animation-delay:-6s]"
        size="330px"
        src="/images/hero/ornament-sphere.png"
      />
      <HeroOrnament
        className="absolute left-[calc(50%-702px)] top-[562px] size-[342px] 2xl:left-[18px]"
        colorClassName="bg-shuttle-gray-50"
        enterDelay={660}
        mask="/images/hero/mask-cone-left.png"
        motionClassName="hero-motion-ambient-b [animation-delay:-9s]"
        size="342px"
        src="/images/hero/ornament-cone-left.png"
      />
      <HeroOrnament
        className="absolute left-[calc(50%+511px)] top-[101px] size-[370px] 2xl:left-auto 2xl:right-[-161px]"
        colorClassName="bg-electric-lime-400"
        enterDelay={240}
        mask="/images/hero/mask-cone-right.png"
        motionClassName="hero-motion-ambient-a [animation-delay:-7s]"
        size="370px"
        src="/images/hero/ornament-cone-right.png"
      />
      <HeroOrnament
        className="absolute left-[calc(50%+386px)] top-[344px] size-[188px] 2xl:left-auto 2xl:right-[146px]"
        colorClassName="bg-shuttle-gray-50"
        enterDelay={420}
        mask="/images/hero/mask-cone-small.png"
        motionClassName="hero-motion-ambient-c [animation-delay:-3s]"
        size="188px"
        src="/images/hero/ornament-cone-small.png"
      />

      <div className="absolute left-1/2 top-[392px] h-[541px] w-[578px] -translate-x-1/2">
        <div className="hero-motion-learner-enter absolute inset-0">
          <div className="hero-motion-learner absolute inset-0 [filter:drop-shadow(18px_28px_22px_rgb(0_0_0_/_0.22))]">
            <Image
              src="/images/hero/learner.png"
              alt="A learner wearing headphones and holding a laptop"
              fill
              priority
              sizes="578px"
            />
          </div>
        </div>
      </div>

      <div className="hero-motion-card-enter absolute left-[calc(50%-316px)] top-[519px] [animation-delay:650ms]">
        <div className="hero-motion-card rounded-panel bg-white p-4">
          <p className="text-label-m font-medium text-shuttle-gray-950">{hero.category.title}</p>
          <p className="mt-0.5 flex items-center gap-2 text-body-xs text-shuttle-gray-400">
            <span>{hero.category.courses}</span>
            <span aria-hidden="true">•</span>
            <span>{hero.category.students}</span>
          </p>
        </div>
      </div>

      <div className="hero-motion-card-enter absolute left-[calc(50%+122px)] top-[531px] w-[232px] [animation-delay:800ms]">
        <div className="hero-motion-card rounded-panel bg-white p-4 [animation-delay:-2s]">
          <p className="text-label-s font-medium text-shuttle-gray-950">{hero.progress.label}</p>
          <p className="mt-2 font-display text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-shuttle-gray-950">
            {hero.progress.value}
          </p>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-pill bg-shuttle-gray-50">
            <div className="hero-motion-progress h-full w-[56%] rounded-pill bg-electric-lime-400" />
          </div>
        </div>
      </div>

      <div className="hero-motion-card-enter absolute left-[calc(50%-392px)] top-[717px] w-[258px] [animation-delay:950ms]">
        <div className="hero-motion-card rounded-panel bg-white p-4 [animation-delay:-4s]">
          <p className="text-label-m font-medium text-shuttle-gray-950">{hero.rating.label}</p>
          <p className="flex items-center text-body-xs text-shuttle-gray-400">
            <span className="text-shuttle-gray-950">{hero.rating.value} </span>
            <span>{hero.rating.count}</span>
            <Image className="ml-1 size-3 shrink-0" src="/icons/star.svg" alt="" width={16} height={16} />
          </p>
          <div className="mt-2 flex items-center">
            {hero.avatars.map((avatar) => (
              <Image
                className="-mr-4 rounded-full border border-white"
                src={avatar.src}
                alt=""
                height={43}
                key={avatar.id}
                width={43}
              />
            ))}
            <div className="relative ml-0 size-[43px]">
              <Image src="/images/hero/avatar-count.svg" alt="" fill sizes="43px" />
              <span className="absolute inset-0 grid place-items-center text-body-xs font-bold text-shuttle-gray-950">
                {hero.avatarCount}
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
