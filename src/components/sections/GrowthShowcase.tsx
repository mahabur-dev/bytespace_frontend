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
      <Container className="py-[120px]">
        <article className="grid min-h-[553px] items-start gap-12 xl:grid-cols-[520px_600px] xl:gap-20">
          <div className="xl:pt-[84px]">
            <h2 className="whitespace-pre-line font-display text-display-xs font-semibold text-shuttle-gray-950 lg:w-[560px] lg:max-w-none lg:text-display-s">
              {growthContent.title}
            </h2>
            <p className="mt-10 max-w-[500px] text-body-m text-shuttle-gray-700 lg:text-body-l">
              {growthContent.description}
            </p>
            <dl className="mt-10 flex gap-12 sm:gap-[60px]">
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

        <article className="mt-[107px] grid min-h-[561px] items-start gap-12 xl:grid-cols-[520px_600px] xl:gap-20">
          <CreatorGrowthArtwork className="hidden xl:block" />
          <div className="xl:pl-[21px] xl:pt-[79px]">
            <h2 className="whitespace-pre-line font-display text-display-xs font-semibold text-shuttle-gray-950 lg:text-display-s">
              {creatorContent.title}
            </h2>
            <p className="mt-10 max-w-[560px] text-body-m text-shuttle-gray-700 lg:text-body-l">
              <strong>{creatorContent.descriptionLead}</strong>
              {creatorContent.description}
            </p>
            <ul className="mt-10 flex flex-col gap-4">
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
