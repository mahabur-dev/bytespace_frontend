import { Courses } from "@/components/sections/Courses";
import { Hero } from "@/components/sections/Hero";
import { PartnerLogos } from "@/components/sections/PartnerLogos";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <Courses />
    </>
  );
}
