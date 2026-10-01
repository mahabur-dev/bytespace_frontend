"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { courseSectionContent, courses, type CourseCategory } from "@/data/courses";
import { cn } from "@/lib/utils";
import { CourseCard } from "./courses/CourseCard";
import { useCourseDiscovery } from "./courses/CourseDiscoveryProvider";

const COLLAPSED_CATEGORY_ROW_COUNT = 2;
const COURSE_CATEGORIES_ID = "course-categories";

export interface CoursesProps {
  className?: string;
}

export function Courses({ className }: CoursesProps) {
  const { activeCategory, query, setActiveCategory, setQuery } = useCourseDiscovery();
  const [areAllCategoryRowsVisible, setAreAllCategoryRowsVisible] = useState(false);
  const categoryRows: ReadonlyArray<ReadonlyArray<string>> = courseSectionContent.categoryRows;
  const hasHiddenCategoryRows = categoryRows.length > COLLAPSED_CATEGORY_ROW_COUNT;
  const visibleCategoryRows = areAllCategoryRowsVisible
    ? categoryRows.slice()
    : categoryRows.slice(0, COLLAPSED_CATEGORY_ROW_COUNT);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredCourses = useMemo(
    () =>
      courses.filter((course) => {
        const matchesCategory = course.categories.includes(activeCategory);
        const searchableText = [course.title, course.alt, ...course.categories]
          .join(" ")
          .toLocaleLowerCase();
        const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);

        return matchesCategory && matchesQuery;
      }),
    [activeCategory, normalizedQuery],
  );

  function resetFilters() {
    setActiveCategory("Featured");
    setQuery("");
  }

  return (
    <section className={cn("scroll-mt-[72px] lg:scroll-mt-[120px]", className)} id="courses">
      <Container className="py-20">
        <div className="section-motion text-center">
          <h2 className="whitespace-pre-line font-display text-display-xs font-semibold text-black lg:text-display-s">
            {courseSectionContent.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[920px] text-body-m text-shuttle-gray-400 lg:text-body-l">
            {courseSectionContent.description}
          </p>
        </div>

        <div
          aria-label="Course categories"
          className="mt-11 flex flex-col items-center gap-5"
          id={COURSE_CATEGORIES_ID}
        >
          {visibleCategoryRows.map((row, rowIndex) => (
            <div className="flex flex-wrap justify-center gap-4" key={row.join("-")}>
              {row.map((category) => {
                const isSelected = activeCategory === category;

                return (
                  <button
                    aria-pressed={isSelected}
                    className={cn(
                      "cursor-pointer rounded-pill px-4 py-3 text-body-m leading-[19px] transition-[color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:bg-electric-lime-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persian-blue-800 focus-visible:ring-offset-2 active:translate-y-0 motion-reduce:transform-none",
                      isSelected
                        ? "bg-electric-lime-400 text-shuttle-gray-950 shadow-[0_10px_24px_rgb(193_227_56_/_0.2)]"
                        : "bg-shuttle-gray-50 text-shuttle-gray-700",
                    )}
                    key={category}
                    onClick={() => setActiveCategory(category as CourseCategory)}
                    type="button"
                  >
                    {category}
                  </button>
                );
              })}
              {hasHiddenCategoryRows && rowIndex === visibleCategoryRows.length - 1 ? (
                <button
                  aria-controls={COURSE_CATEGORIES_ID}
                  aria-expanded={areAllCategoryRowsVisible}
                  className="cursor-pointer rounded-pill px-1 py-3 text-body-m leading-[19px] text-persian-blue-800 transition-colors duration-300 hover:text-electric-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persian-blue-800 focus-visible:ring-offset-2"
                  onClick={() => setAreAllCategoryRowsVisible((visible) => !visible)}
                  type="button"
                >
                  {areAllCategoryRowsVisible
                    ? courseSectionContent.lessLabel
                    : courseSectionContent.moreLabel}
                </button>
              ) : null}
            </div>
          ))}
        </div>

        <p aria-live="polite" className="sr-only">
          {filteredCourses.length} courses shown
          {query ? ` for ${query}` : ""} in {activeCategory}
        </p>

        {filteredCourses.length ? (
          <div
            className="course-results-grid mt-[60px] grid gap-10 md:grid-cols-2 xl:grid-cols-3"
            key={`${activeCategory}-${normalizedQuery}`}
          >
            {filteredCourses.map((course) => (
              <div className="course-result-card" key={course.id}>
                <CourseCard course={course} href={`/courses/${course.id}`} />
              </div>
            ))}
          </div>
        ) : (
          <div className="course-empty-state mx-auto mt-[60px] max-w-[620px] rounded-card border border-shuttle-gray-100 bg-shuttle-gray-50 px-6 py-12 text-center">
            <p className="font-display text-heading-s font-semibold text-shuttle-gray-950">
              No matching courses yet
            </p>
            <p className="mx-auto mt-3 max-w-[460px] text-body-m text-shuttle-gray-700">
              Try another course name or select a different category.
            </p>
            <Button className="mt-6" onClick={resetFilters} type="button">
              Show all courses
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
