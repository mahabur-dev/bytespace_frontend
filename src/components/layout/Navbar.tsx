import { accountLinks, navigationLinks } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "@/components/ui/Container";
import { NavbarMobileMenu } from "./NavbarMobileMenu";

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className={className}>
      <Container className="relative grid min-h-[72px] grid-cols-[1fr_auto] items-center lg:min-h-[120px] lg:grid-cols-3">
        <Link
          aria-label="ByteSpace home"
          className="w-fit rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400"
          href="/"
        >
          <BrandLogo className="gap-[10px] lg:-translate-y-[6px]" tone="light" />
        </Link>
        <nav aria-label="Primary navigation" className="hidden justify-self-center lg:block">
          <ul className="flex items-center gap-6">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link
                  aria-current={link.isActive ? "page" : undefined}
                  className={`text-body-m text-shuttle-gray-50 transition hover:text-electric-lime-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400 ${link.isActive ? "font-medium" : "font-normal"}`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center justify-self-end gap-6 lg:flex">
          {accountLinks.map((link) => (
            <Link
              className="text-body-m text-shuttle-gray-50 transition hover:text-electric-lime-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400"
              href={link.href}
              key={link.id}
            >
              {link.label}
            </Link>
          ))}
          <Link
            aria-label="Shopping bag"
            className="rounded-pill transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400"
            href="/cart"
          >
            <Image src="/icons/shopping-bag.svg" alt="" width={24} height={24} />
          </Link>
        </div>
        <NavbarMobileMenu className="lg:hidden" />
      </Container>
    </header>
  );
}
