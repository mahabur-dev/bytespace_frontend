import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="enterprise-surface testimonial-card relative isolate overflow-hidden rounded-card border border-transparent bg-white p-6">
      <div className="testimonial-avatar relative size-20 rounded-full">
        <Image
          className="size-20 rounded-full object-cover"
          src={testimonial.avatar.src}
          alt={testimonial.avatar.alt}
          height={80}
          width={80}
        />
      </div>
      <div className="mt-6">
        <h3 className="testimonial-name font-display text-heading-xs font-semibold text-black">
          {testimonial.name}
        </h3>
        <p className="testimonial-role mt-0.5 text-body-l text-persian-blue-800">
          {testimonial.role}
        </p>
      </div>
      <blockquote className="testimonial-quote mt-4 text-body-l leading-[29px] text-shuttle-gray-700 xl:w-[326px]">
        {testimonial.quote}
      </blockquote>
    </article>
  );
}
