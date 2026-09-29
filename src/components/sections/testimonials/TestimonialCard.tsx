import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-card bg-white p-6">
      <Image
        className="size-20 rounded-full object-cover"
        src={testimonial.avatar.src}
        alt={testimonial.avatar.alt}
        height={80}
        width={80}
      />
      <div className="mt-6">
        <h3 className="font-display text-heading-xs font-semibold text-black">
          {testimonial.name}
        </h3>
        <p className="mt-0.5 text-body-l text-persian-blue-800">{testimonial.role}</p>
      </div>
      <blockquote className="mt-4 text-body-l leading-[29px] text-shuttle-gray-700 xl:w-[326px]">
        {testimonial.quote}
      </blockquote>
    </article>
  );
}
