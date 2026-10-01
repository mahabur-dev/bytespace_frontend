import Image from "next/image";
import { CourseCard } from "@/components/sections/courses/CourseCard";
import { courses } from "@/data/courses";
import { studentArtworkContent } from "@/data/growth";
import { cn } from "@/lib/utils";
import { GrowthLimeOrnament } from "./GrowthLimeOrnament";

export interface StudentGrowthArtworkProps {
  className?: string;
}

export function StudentGrowthArtwork({ className }: StudentGrowthArtworkProps) {
  return (
    <div className={cn("growth-artwork-viewport relative mx-auto w-full max-w-[600px]", className)}>
      <svg
        className="block h-auto w-full overflow-visible"
        height="553"
        viewBox="0 0 600 553"
        width="600"
      >
        <foreignObject className="overflow-visible" height="553" width="600">
          <div className="relative h-[553px] w-[600px]">
        <div className="absolute left-[38px] top-0 w-[373px]">
          <CourseCard course={courses[0]} />
        </div>

        <div className="absolute left-[38px] top-[7px] z-10 h-[541px] w-[578px] [filter:drop-shadow(18px_28px_22px_rgb(0_0_0_/_0.22))]">
          <Image
            src="/images/hero/learner.png"
            alt="A learner wearing headphones and holding a laptop"
            fill
            sizes="578px"
          />
        </div>

        <div className="absolute left-[383px] top-[211px] z-20 w-[232px] rounded-panel bg-white p-4">
          <p className="text-label-s font-medium text-shuttle-gray-950">
            {studentArtworkContent.progressLabel}
          </p>
          <p className="mt-2 font-display text-[48px] font-semibold leading-[1.2] tracking-[-0.03em] text-shuttle-gray-950">
            {studentArtworkContent.progressValue}
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-pill bg-shuttle-gray-50">
            <div className="h-full w-[56%] rounded-pill bg-electric-lime-400" />
          </div>
        </div>

        <GrowthLimeOrnament className="left-[451px] top-[55px] z-30" size={230} />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
