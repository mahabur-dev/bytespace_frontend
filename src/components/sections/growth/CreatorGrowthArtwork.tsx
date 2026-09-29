import Image from "next/image";
import { heroContent } from "@/data/hero";
import { revenueCards } from "@/data/growth";

export interface CreatorGrowthArtworkProps {
  className?: string;
}

export function CreatorGrowthArtwork({ className }: CreatorGrowthArtworkProps) {
  return (
    <div className={className}>
      <div className="relative mx-auto h-[561px] w-full max-w-[600px]">
        <div className="absolute left-0 top-2 h-[117px] w-[200px] rounded-panel bg-persian-blue-800 p-4 text-white">
          <p className="text-label-m">{revenueCards[0].label}</p>
          <p className="text-body-xs">{revenueCards[0].period}</p>
          <p className="mt-2 font-display text-heading-xs font-semibold">{revenueCards[0].value}</p>
          <div className="mt-2 h-2 overflow-hidden rounded-pill bg-white/20">
            <div className="h-full w-[58%] rounded-pill bg-electric-lime-400" />
          </div>
        </div>

        <div className="absolute left-0 top-[158px] h-[136px] w-[136px] rounded-panel bg-persian-blue-800 p-4 text-white">
          <p className="text-label-m">{revenueCards[1].label}</p>
          <p className="text-body-xs">{revenueCards[1].period}</p>
          <p className="mt-3 font-display text-heading-xs font-semibold">{revenueCards[1].value}</p>
          <span className="mt-3 inline-flex rounded-pill bg-electric-lime-400 px-2 py-1 text-body-xs text-shuttle-gray-950">
            {revenueCards[1].badge}
          </span>
        </div>

        <div className="absolute -left-[85px] -top-[33px] z-10 size-[640px] [filter:drop-shadow(18px_28px_22px_rgb(0_0_0_/_0.2))]">
          <Image
            src="/images/growth/course-creator.png"
            alt="A course creator holding a tablet"
            fill
            sizes="640px"
          />
        </div>

        <div className="absolute left-[340px] top-[115px] z-20 size-[175px] -scale-x-100">
          <Image className="object-cover" src="/images/hero/ornament-pill.png" alt="" fill sizes="175px" />
          <div className="absolute inset-0 bg-electric-lime-400 mix-blend-hard-light [mask-image:url('/images/hero/mask-pill-small.png')] [mask-size:100%_100%]" />
        </div>

        <div className="absolute left-[284px] top-[377px] z-20 w-[258px] rounded-panel bg-white p-4">
          <p className="text-label-m font-medium text-shuttle-gray-950">{heroContent.rating.label}</p>
          <p className="flex items-center text-body-xs text-shuttle-gray-400">
            <span className="text-shuttle-gray-950">{heroContent.rating.value} </span>
            <span>{heroContent.rating.count}</span>
            <Image className="ml-1 size-3" src="/icons/star.svg" alt="" width={16} height={16} />
          </p>
          <div className="mt-2 flex items-center">
            {heroContent.avatars.map((avatar) => (
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
                {heroContent.avatarCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
