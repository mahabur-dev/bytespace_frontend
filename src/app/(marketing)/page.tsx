import { Courses } from "@/components/sections/Courses";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { GrowthShowcase } from "@/components/sections/GrowthShowcase";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { CourseDiscoveryProvider } from "@/components/sections/courses/CourseDiscoveryProvider";

export default function Home() {
  return (
    <>
      <CourseDiscoveryProvider>
        <Hero />
        <PartnerLogos />
        <Courses />
      </CourseDiscoveryProvider>
      <LearningPaths />
      <GrowthShowcase />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
