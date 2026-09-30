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
      <Container className="partner-logos-container lg:h-full">
        <div className="partner-logos-viewport">
          <div className="partner-logos-track">
            {[false, true].map((isDuplicate) => (
              <div
                aria-hidden={isDuplicate ? "true" : undefined}
                className="partner-logos-group"
                key={isDuplicate ? "duplicate" : "original"}
              >
                {partnerLogos.map((logo) => (
                  <div className="partner-logo" key={logo.id}>
                    <Image
                      className="h-auto max-w-full"
                      src={logo.src}
                      alt={isDuplicate ? "" : logo.alt}
                      height={logo.height}
                      width={logo.width}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
