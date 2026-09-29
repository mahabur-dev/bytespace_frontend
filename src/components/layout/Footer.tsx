import { footerLegalLinks, footerLinkGroups } from "@/data/footer";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <Container className="pb-12 pt-[71px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_580px] lg:gap-[92px]">
          <div className="max-w-[528px]">
            <div className="space-y-4">
              <BrandLogo className="items-start [&>span]:relative [&>span]:top-[7px] [&>span]:h-[30px] [&>span]:w-[134px] [&>span]:leading-[30px]" />
              <p className="text-body-s leading-[22px] text-shuttle-gray-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <div className="mt-[45px] space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <Input
                  aria-label="Email address"
                  className="w-full ring-shuttle-gray-200 sm:max-w-[376px]"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="min-h-[46px] self-start" type="button">
                  <span className="inline-block h-[22px] w-14 leading-[22px]">Search</span>
                </Button>
              </div>
              <p className="max-w-[504px] text-body-xs text-shuttle-gray-950">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:pt-10">
            {footerLinkGroups.map((group) => (
              <div key={group.id}>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li className="text-body-s leading-[22px] text-shuttle-gray-950" key={link.id}>
                      {link.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[130px] border-t border-shuttle-gray-200 pt-5">
          <div className="flex flex-col gap-4 text-body-xs text-shuttle-gray-950 sm:flex-row sm:items-center sm:justify-between">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.id}>{link.label}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
