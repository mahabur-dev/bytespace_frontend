import { Container } from "@/components/ui/Container";
import { creatorContent, growthContent, growthStats } from "@/data/growth";
import { cn } from "@/lib/utils";
import { CreatorGrowthArtwork } from "./growth/CreatorGrowthArtwork";
import { StudentGrowthArtwork } from "./growth/StudentGrowthArtwork";

export interface GrowthShowcaseProps {
  className?: string;
}

export function GrowthShowcase({ className }: GrowthShowcaseProps) {
  return (
    <section
      className={cn(
        "overflow-hidden [background-image:var(--token-background-growth)]",
        className,
      )}
    >
      <Container className="py-20 md:py-24 xl:py-[120px]">
        <article className="grid items-start gap-12 xl:min-h-[553px] xl:grid-cols-[520px_600px] xl:gap-20">
          <div className="xl:pt-[84px]">
            <h2 className="whitespace-pre-line font-display text-display-xs font-semibold text-shuttle-gray-950 lg:w-[560px] lg:max-w-none lg:text-display-s">
              {growthContent.title}
            </h2>
            <p className="mt-6 max-w-[500px] text-body-m text-shuttle-gray-700 md:mt-8 lg:text-body-l xl:mt-10">
              {growthContent.description}
            </p>
            <dl className="mt-8 flex gap-8 sm:gap-[60px] xl:mt-10">
              {growthStats.map((stat) => (
                <div key={stat.id}>
                  <dt className="font-display text-display-xs font-medium text-persian-blue-800">
                    {stat.value}
                  </dt>
                  <dd className="text-body-l text-shuttle-gray-700">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <StudentGrowthArtwork className="hidden xl:block" />
        </article>

        <article className="mt-20 grid items-start gap-12 md:mt-24 xl:mt-[107px] xl:min-h-[561px] xl:grid-cols-[520px_600px] xl:gap-20">
          <CreatorGrowthArtwork className="hidden xl:block" />
          <div className="xl:pl-[21px] xl:pt-[79px]">
            <h2 className="whitespace-pre-line font-display text-display-xs font-semibold text-shuttle-gray-950 lg:text-display-s">
              {creatorContent.title}
            </h2>
            <p className="mt-6 max-w-[560px] text-body-m text-shuttle-gray-700 md:mt-8 lg:text-body-l xl:mt-10">
              <strong>{creatorContent.descriptionLead}</strong>
              {creatorContent.description}
            </p>
            <ul className="mt-8 flex flex-col gap-4 xl:mt-10">
              {creatorContent.benefits.map((benefit) => (
                <li className="flex items-center gap-3 text-body-l text-shuttle-gray-950" key={benefit}>
                  <span
                    aria-hidden="true"
                    className="grid size-5 shrink-0 place-items-center rounded-full bg-persian-blue-800 text-xs font-bold text-white"
                  >
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Container>
    </section>
  );
}
