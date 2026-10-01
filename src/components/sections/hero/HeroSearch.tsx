"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { heroContent } from "@/data/hero";
import { useCourseDiscovery } from "../courses/CourseDiscoveryProvider";

export function HeroSearch() {
  const { query, setActiveCategory, setQuery } = useCourseDiscovery();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setActiveCategory("Featured");
    setQuery(query.trim());
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById("courses")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  return (
    <form
      className="hero-motion-reveal mx-auto mt-10 flex w-full max-w-[582px] flex-col gap-4 [animation-delay:240ms] sm:flex-row sm:items-start lg:mt-[60px]"
      onSubmit={handleSubmit}
      role="search"
    >
      <Input
        aria-label="Search courses"
        className="h-[52px] min-h-[52px] w-full text-left transition-[box-shadow,transform] duration-300 focus-within:-translate-y-0.5 focus-within:shadow-[0_12px_32px_rgb(0_0_0_/_0.16)] motion-reduce:transition-none motion-reduce:focus-within:translate-y-0 sm:w-[461px]"
        name="search"
        onChange={(event) => setQuery(event.target.value)}
        placeholder={heroContent.search.placeholder}
        startAdornment={<Image src="/icons/search.svg" alt="" width={24} height={24} />}
        type="search"
        value={query}
      />
      <Button
        className="hero-motion-search-glow h-[46px] min-h-[46px] w-full shrink-0 bg-electric-lime-500 px-0 py-0 hover:shadow-[0_12px_28px_rgb(0_0_0_/_0.18)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:w-[105px]"
        type="submit"
      >
        {heroContent.search.buttonLabel}
      </Button>
    </form>
  );
}
