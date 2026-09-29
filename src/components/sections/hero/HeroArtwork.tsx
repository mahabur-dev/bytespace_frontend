import Image from "next/image";
import type { HeroContent } from "@/data/hero";

export interface HeroArtworkProps {
  hero: HeroContent;
}

export function HeroArtwork({ hero }: HeroArtworkProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden overflow-hidden lg:bottom-auto lg:block lg:h-[904px]">
      <div className="absolute left-1/2 top-[462px] size-[1149px] -translate-x-1/2">
        <Image src="/images/hero/hero-ellipse.svg" alt="" fill sizes="1149px" />
      </div>

      <div className="absolute left-[calc(50%-838px)] top-[101px] size-[385px]">
        <Image className="object-cover" src="/images/hero/ornament-pill.png" alt="" fill sizes="385px" />
        <div className="absolute inset-0 bg-electric-lime-400 mix-blend-hard-light [mask-image:url('/images/hero/mask-pill-large.png')] [mask-size:100%_100%]" />
      </div>
      <div className="absolute left-[calc(50%-536px)] top-[357px] size-[175px] -scale-x-100">
        <Image className="object-cover" src="/images/hero/ornament-pill.png" alt="" fill sizes="175px" />
        <div className="absolute inset-0 bg-shuttle-gray-50 mix-blend-hard-light [mask-image:url('/images/hero/mask-pill-small.png')] [mask-size:100%_100%]" />
      </div>
      <div className="absolute left-[calc(50%+407px)] top-[552px] size-[330px]">
        <Image className="object-cover" src="/images/hero/ornament-sphere.png" alt="" fill sizes="330px" />
        <div className="absolute inset-0 bg-shuttle-gray-50 mix-blend-hard-light [mask-image:url('/images/hero/mask-sphere.png')] [mask-size:100%_100%]" />
      </div>
      <div className="absolute left-[calc(50%-702px)] top-[562px] size-[342px]">
        <Image className="object-cover" src="/images/hero/ornament-cone-left.png" alt="" fill sizes="342px" />
        <div className="absolute inset-0 bg-shuttle-gray-50 mix-blend-hard-light [mask-image:url('/images/hero/mask-cone-left.png')] [mask-size:100%_100%]" />
      </div>
      <div className="absolute left-[calc(50%+511px)] top-[101px] size-[370px]">
        <Image className="object-cover" src="/images/hero/ornament-cone-right.png" alt="" fill sizes="370px" />
        <div className="absolute inset-0 bg-electric-lime-400 mix-blend-hard-light [mask-image:url('/images/hero/mask-cone-right.png')] [mask-size:100%_100%]" />
      </div>
      <div className="absolute left-[calc(50%+386px)] top-[344px] size-[188px]">
        <Image className="object-cover" src="/images/hero/ornament-cone-small.png" alt="" fill sizes="188px" />
        <div className="absolute inset-0 bg-shuttle-gray-50 mix-blend-hard-light [mask-image:url('/images/hero/mask-cone-small.png')] [mask-size:100%_100%]" />
      </div>

      <div className="absolute left-1/2 top-[392px] h-[541px] w-[578px] -translate-x-1/2 shadow-card">
        <Image
          src="/images/hero/learner.png"
          alt="A learner wearing headphones and holding a laptop"
          fill
          priority
          sizes="578px"
        />
      </div>

      <div className="absolute left-[calc(50%-316px)] top-[519px] rounded-panel bg-white p-4">
        <p className="text-label-m font-medium text-shuttle-gray-950">{hero.category.title}</p>
        <p className="mt-0.5 flex items-center gap-2 text-body-xs text-shuttle-gray-400">
          <span>{hero.category.courses}</span>
          <span aria-hidden="true">•</span>
          <span>{hero.category.students}</span>
        </p>
      </div>

      <div className="absolute left-[calc(50%+122px)] top-[531px] w-[232px] rounded-panel bg-white p-4">
        <p className="text-label-s font-medium text-shuttle-gray-950">{hero.progress.label}</p>
        <p className="mt-2 font-display text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-shuttle-gray-950">
          {hero.progress.value}
        </p>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-pill bg-shuttle-gray-50">
          <div className="h-full w-[56%] rounded-pill bg-electric-lime-400" />
        </div>
      </div>

      <div className="absolute left-[calc(50%-392px)] top-[717px] w-[258px] rounded-panel bg-white p-4">
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
  );
}
