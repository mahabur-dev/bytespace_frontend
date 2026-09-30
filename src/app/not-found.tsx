import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";

const notFoundContent = {
  code: "404",
  title: "The page you are looking\nfor doesn’t exist",
  description: "Try to use a correct url or go back to homepage to start again",
  action: "Back to Home",
} as const;

export default function NotFound() {
  return (
    <>
      <section className="blue-grid-top relative min-h-[760px] overflow-hidden bg-persian-blue-800 text-white lg:h-[957px]">
        <Navbar className="relative z-30 lg:h-[120px]" />

        <Container className="relative h-[688px] lg:h-[837px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[52px] -translate-x-1/2 scale-x-[1.12] select-none bg-[linear-gradient(180deg,#d4fb20_0%,#d4fb20_38%,rgba(212,251,32,0.64)_65%,rgba(0,59,226,0)_96%)] bg-clip-text font-display text-[176px] font-semibold leading-[0.92] text-transparent sm:text-[250px] lg:top-[75px] lg:scale-x-125 lg:text-[380px]"
          >
            {notFoundContent.code}
          </div>

          <div className="absolute inset-x-0 top-[250px] z-10 flex flex-col items-center px-2 text-center sm:top-[330px] lg:top-[402px]">
            <h1 className="max-w-[960px] whitespace-pre-line font-display text-[36px] font-semibold leading-[1.16] tracking-[-0.01em] sm:text-[48px] lg:text-heading-l">
              {notFoundContent.title}
            </h1>
            <p className="mt-8 max-w-[680px] text-body-m leading-6 text-shuttle-gray-50 lg:mt-[34px] lg:text-body-l">
              {notFoundContent.description}
            </p>
            <Link
              className="mt-8 inline-flex min-h-[46px] items-center justify-center rounded-pill bg-electric-lime-400 px-6 text-label-l font-medium text-shuttle-gray-950 transition duration-200 hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-persian-blue-800 active:translate-y-0 lg:mt-[30px]"
              href="/"
            >
              {notFoundContent.action}
            </Link>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
