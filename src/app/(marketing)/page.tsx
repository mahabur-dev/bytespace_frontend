import { Courses } from "@/components/sections/Courses";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { GrowthShowcase } from "@/components/sections/GrowthShowcase";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <Courses />
      <LearningPaths />
      <GrowthShowcase />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
