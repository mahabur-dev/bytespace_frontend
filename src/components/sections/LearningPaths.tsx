import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { learningPaths, learningPathsContent } from "@/data/learningPaths";
import { cn } from "@/lib/utils";

export interface LearningPathsProps {
  className?: string;
}

export function LearningPaths({ className }: LearningPathsProps) {
  return (
    <section className={cn("pb-[120px]", className)}>
      <Container>
        <div className="section-motion text-center">
          <h2 className="font-display text-display-xs font-semibold text-black lg:text-display-s">
            {learningPathsContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[920px] text-body-m text-shuttle-gray-400 lg:text-body-l">
            {learningPathsContent.description}
          </p>
        </div>

        <ul className="mt-[72px] grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-6 xl:gap-10">
          {learningPaths.map((path) => (
            <li key={path.id}>
              <Card className="enterprise-surface group/path relative isolate flex h-[152px] cursor-pointer flex-col items-center justify-center text-center before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_50%_28%,rgb(203_252_1_/_0.2),transparent_58%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 xl:aspect-square xl:h-auto">
                <span className="relative transition-transform duration-300 ease-out group-hover/path:-translate-y-1 group-hover/path:scale-110 motion-reduce:transform-none">
                  <span className="absolute inset-1 -z-10 rounded-full bg-electric-lime-400/25 opacity-0 blur-lg transition-opacity duration-300 group-hover/path:opacity-100" />
                  <Image src={path.icon} alt="" height={60} width={60} />
                </span>
                <span className="mt-4 text-label-xl font-normal text-shuttle-gray-950 transition-colors duration-300 group-hover/path:text-persian-blue-800">
                  {path.label}
                </span>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
