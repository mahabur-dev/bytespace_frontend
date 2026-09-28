import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  action?: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  headingLevel?: "h2" | "h3";
  title: string;
}

export function SectionHeading({
  action,
  className,
  description,
  eyebrow,
  headingLevel = "h2",
  title,
}: SectionHeadingProps) {
  const Heading = headingLevel;

  return (
    <div className={cn("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-4xl">
        {eyebrow ? <p className="text-label-l font-medium text-electric-violet-600">{eyebrow}</p> : null}
        <Heading className="font-display text-display-s font-medium text-black">{title}</Heading>
        {description ? <p className="mt-4 max-w-2xl text-body-l text-black-muted">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
