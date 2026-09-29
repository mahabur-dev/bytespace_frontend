import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partnerLogos } from "@/data/partners";
import { cn } from "@/lib/utils";

export interface PartnerLogosProps {
  className?: string;
}

export function PartnerLogos({ className }: PartnerLogosProps) {
  return (
    <section
      aria-label="Trusted partners"
      className={cn("bg-shuttle-gray-50 py-10 lg:h-[203px] lg:py-0", className)}
    >
      <Container className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:h-full lg:grid-cols-5 lg:gap-0">
        {partnerLogos.map((logo) => (
          <div className="flex min-w-0 items-center justify-center" key={logo.id}>
            <Image
              className="h-auto max-w-full"
              src={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
            />
          </div>
        ))}
      </Container>
    </section>
  );
}
