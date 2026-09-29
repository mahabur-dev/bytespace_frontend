import { Container } from "@/components/ui/Container";
import { testimonials, testimonialsContent } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./testimonials/TestimonialCard";

export interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className }: TestimonialsProps) {
  return (
    <section
      className={cn(
        "overflow-hidden [background-color:var(--token-color-testimonials-canvas)] [background-image:var(--token-background-testimonials)]",
        className,
      )}
      aria-labelledby="testimonials-title"
    >
      <Container className="pb-[60px] pt-20 xl:max-w-[1204px]">
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-5 xl:grid-cols-[577px_580px] xl:gap-[43px]">
          <h2
            className="whitespace-pre-line font-display text-display-xs font-semibold text-black lg:text-display-s xl:w-[577px]"
            id="testimonials-title"
          >
            {testimonialsContent.title}
          </h2>
          <p className="text-body-m text-shuttle-gray-700 lg:text-body-l lg:leading-[29px] xl:w-[580px]">
            {testimonialsContent.description}
          </p>
        </div>

        <div className="mt-[67px] grid items-start gap-8 md:grid-cols-2 xl:grid-cols-[repeat(3,374px)] xl:gap-[41px]">
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
