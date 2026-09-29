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
        <div className="text-center">
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
              <Card className="flex h-[152px] flex-col items-center justify-center text-center xl:aspect-square xl:h-auto">
                <Image src={path.icon} alt="" height={60} width={60} />
                <span className="mt-4 text-label-xl font-normal text-shuttle-gray-950">
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
