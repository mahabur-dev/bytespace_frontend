import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function MarketingLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar className="blue-grid-top sticky top-0 z-50 bg-persian-blue-800 lg:h-[120px] lg:overflow-hidden" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
