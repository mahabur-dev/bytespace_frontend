import { Container } from "@/components/ui/Container";
import { courseSectionContent, courses } from "@/data/courses";
import { CourseCard } from "./courses/CourseCard";

export interface CoursesProps {
  className?: string;
}

export function Courses({ className }: CoursesProps) {
  return (
    <section className={className} id="courses">
      <Container className="py-20">
        <div className="text-center">
          <h2 className="whitespace-pre-line font-display text-display-xs font-semibold text-black lg:text-display-s">
            {courseSectionContent.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[920px] text-body-m text-shuttle-gray-400 lg:text-body-l">
            {courseSectionContent.description}
          </p>
        </div>

        <div aria-label="Course categories" className="mt-11 flex flex-col items-center gap-5">
          {courseSectionContent.categoryRows.map((row, rowIndex) => (
            <div className="flex flex-wrap justify-center gap-4" key={row.join("-")}>
              {row.map((category, categoryIndex) => {
                const isFeatured = rowIndex === 0 && categoryIndex === 0;

                return (
                  <span
                    className={
                      isFeatured
                        ? "rounded-pill bg-electric-lime-400 px-4 py-3 text-body-m leading-[19px] text-shuttle-gray-950"
                        : "rounded-pill bg-shuttle-gray-50 px-4 py-3 text-body-m leading-[19px] text-shuttle-gray-700"
                    }
                    key={category}
                  >
                    {category}
                  </span>
                );
              })}
              {rowIndex === courseSectionContent.categoryRows.length - 1 ? (
                <span className="px-1 py-3 text-body-m leading-[19px] text-persian-blue-800">
                  {courseSectionContent.moreLabel}
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-[60px] grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
