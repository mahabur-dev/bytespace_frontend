import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { courseAvatars, courseCardContent, type Course } from "@/data/courses";
import { cn } from "@/lib/utils";

export interface CourseCardProps {
  course: Course;
  highlightRating?: boolean;
}

export function CourseCard({ course, highlightRating = false }: CourseCardProps) {
  const metadata = [
    courseCardContent.lessons,
    courseCardContent.duration,
    courseCardContent.comments,
  ];

  return (
    <Card className="p-4 lg:h-[384px]">
      <div className="relative h-[195px] overflow-hidden rounded-media">
        <Image
          className="object-cover"
          src={course.image}
          alt={course.alt}
          fill
          sizes="(min-width: 1280px) 341px, (min-width: 640px) 45vw, calc(100vw - 72px)"
        />
        <div className="absolute inset-x-3 bottom-4 flex items-center justify-between gap-2">
          {metadata.map((item) => (
            <span
              className="whitespace-nowrap rounded-pill bg-white/75 px-3 py-1 text-body-xs text-shuttle-gray-700 backdrop-blur-sm"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-3">
          <h3 className="min-w-0 flex-1 truncate font-display text-heading-xs font-semibold text-black">
            {course.title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-body-l text-shuttle-gray-700">
            {courseCardContent.rating}
            <span
              aria-hidden="true"
              className={cn(
                "size-4 [mask-image:url('/icons/star.svg')] [mask-repeat:no-repeat] [mask-size:contain]",
                highlightRating ? "bg-electric-lime-400" : "bg-shuttle-gray-200",
              )}
            />
          </span>
        </div>
        <p className="mt-0.5 text-body-xs text-shuttle-gray-700">
          {courseCardContent.instructorPrefix}{" "}
          <span className="text-persian-blue-800">{courseCardContent.instructor}</span>
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="flex h-8 items-center gap-2 rounded-pill bg-shuttle-gray-50 px-3 text-body-xs text-shuttle-gray-700">
            <span aria-hidden="true" className="flex h-4 items-end gap-0.5">
              <span className="h-1.5 w-0.5 rounded-pill bg-shuttle-gray-700" />
              <span className="h-2.5 w-0.5 rounded-pill bg-shuttle-gray-700" />
              <span className="h-4 w-0.5 rounded-pill bg-shuttle-gray-700" />
            </span>
            {courseCardContent.level}
          </span>

          <div className="flex items-center">
            {courseAvatars.map((avatar, index) => (
              <Image
                className={index === 0 ? "rounded-full" : "-ml-2 rounded-full"}
                src={avatar.src}
                alt={avatar.alt}
                height={32}
                key={avatar.id}
                width={32}
              />
            ))}
            <Image
              className="-ml-2 rounded-full"
              src="/images/courses/course-avatar-count.png"
              alt="26 more learners"
              height={32}
              width={32}
            />
          </div>
        </div>

        <p className="mt-4 flex items-baseline">
          <span className="font-display text-heading-xs font-semibold text-persian-blue-800">
            {courseCardContent.price}
          </span>
          <span className="text-body-xs text-shuttle-gray-700">{courseCardContent.priceSuffix}</span>
        </p>
      </div>
    </Card>
  );
}
