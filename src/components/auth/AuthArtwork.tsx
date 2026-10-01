import Image from "next/image";
import { CourseCard } from "@/components/sections/courses/CourseCard";
import { courses } from "@/data/courses";
import { heroContent } from "@/data/hero";
import { cn } from "@/lib/utils";

export interface AuthArtworkProps {
  className?: string;
}

export function AuthArtwork({ className }: AuthArtworkProps) {
  return (
    <div className={cn("auth-artwork relative mt-[90px] h-[560px] w-[540px]", className)} aria-hidden="true">
      <div className="signup-artwork-enter absolute left-0 top-[89px] w-[374px] opacity-80 [animation-delay:280ms]">
        <CourseCard course={courses[1]} highlightRating />
      </div>

      <div className="signup-artwork-enter absolute left-[112px] top-0 z-20 w-[374px] [animation-delay:400ms]">
        <div className="signup-artwork-float">
          <CourseCard course={courses[2]} highlightRating />
        </div>
      </div>

      <div className="signup-artwork-enter absolute left-[29px] top-[13px] z-30 size-[145px] [animation-delay:520ms]">
        <Image className="object-cover" src="/images/hero/ornament-cone-left.png" alt="" fill sizes="145px" />
        <div className="absolute inset-0 bg-electric-lime-400 mix-blend-hard-light [mask-image:url('/images/hero/mask-cone-left.png')] [mask-size:100%_100%]" />
      </div>

      <div className="signup-artwork-enter absolute -left-6 top-[395px] z-30 size-[190px] [animation-delay:620ms]">
        <Image className="object-cover" src="/images/hero/ornament-cone-small.png" alt="" fill sizes="190px" />
        <div className="absolute inset-0 bg-electric-lime-400 mix-blend-hard-light [mask-image:url('/images/hero/mask-cone-small.png')] [mask-size:100%_100%]" />
      </div>

      <div className="absolute left-[352px] top-[315px] z-50 size-[170px] -scale-x-100">
        <div className="signup-artwork-enter absolute inset-0 [animation-delay:700ms]">
          <Image className="object-cover" src="/images/hero/ornament-pill.png" alt="" fill sizes="170px" />
          <div className="absolute inset-0 bg-shuttle-gray-50 mix-blend-hard-light [mask-image:url('/images/hero/mask-pill-small.png')] [mask-size:100%_100%]" />
        </div>
      </div>

      <div className="signup-artwork-enter absolute left-[227px] top-[435px] z-40 w-[258px] rounded-panel bg-electric-lime-400 p-4 [animation-delay:780ms]">
        <p className="text-label-xl font-medium text-shuttle-gray-950">{heroContent.rating.label}</p>
        <p className="flex items-center text-body-xs text-shuttle-gray-700">
          <span>{heroContent.rating.value}</span>
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
          <div className="relative size-[43px]">
            <Image src="/images/hero/avatar-count.svg" alt="" fill sizes="43px" />
            <span className="absolute inset-0 grid place-items-center text-body-xs font-bold text-shuttle-gray-950">
              {heroContent.avatarCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
