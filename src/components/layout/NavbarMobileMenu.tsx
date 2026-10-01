"use client";

import { type MouseEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { accountLinks, navigationLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export interface NavbarMobileMenuProps {
  className?: string;
}

export function NavbarMobileMenu({ className }: NavbarMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navigationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  useEffect(() => {
    accountLinks.forEach((link) => router.prefetch(link.href));

    return () => {
      if (navigationTimerRef.current) {
        clearTimeout(navigationTimerRef.current);
      }
    };
  }, [router]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsClosing(false);
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function handleMenuToggle() {
    if (navigationTimerRef.current) {
      clearTimeout(navigationTimerRef.current);
      navigationTimerRef.current = null;
    }

    setIsClosing(false);
    setIsOpen((open) => !open);
  }

  function handleAccountNavigation(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    if (isClosing) {
      return;
    }

    setIsClosing(true);
    const transitionDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : 180;

    navigationTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      router.push(href);
      navigationTimerRef.current = null;
    }, transitionDelay);
  }

  return (
    <div className={className}>
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="group grid size-11 cursor-pointer place-items-center rounded-full border border-white/15 bg-white/[0.07] shadow-[0_8px_24px_rgb(0_0_0_/_0.14)] backdrop-blur-md transition-[background-color,border-color,box-shadow,transform] duration-300 hover:border-electric-lime-400/50 hover:bg-white/[0.12] hover:shadow-[0_10px_28px_rgb(0_0_0_/_0.2)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-persian-blue-800 motion-reduce:transform-none"
        onClick={handleMenuToggle}
        ref={triggerRef}
        type="button"
      >
        <span aria-hidden="true" className="relative block h-[18px] w-[22px]">
          <span
            className={cn(
              "absolute left-0 top-0 h-0.5 w-[22px] rounded-pill bg-white transition-[top,transform,background-color] duration-300 ease-out group-hover:bg-electric-lime-400 motion-reduce:transition-none",
              isOpen && "top-2 rotate-45 bg-electric-lime-400",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-2 h-0.5 w-[16px] rounded-pill bg-white transition-[opacity,width,background-color] duration-200 group-hover:w-[22px] group-hover:bg-electric-lime-400 motion-reduce:transition-none",
              isOpen && "w-0 opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 h-0.5 w-[22px] rounded-pill bg-white transition-[bottom,transform,background-color] duration-300 ease-out group-hover:bg-electric-lime-400 motion-reduce:transition-none",
              isOpen && "bottom-2 -rotate-45 bg-electric-lime-400",
            )}
          />
        </span>
      </button>
      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={cn(
            "mobile-menu-panel absolute inset-x-0 top-full z-50 overflow-hidden rounded-b-[24px] border-x border-b border-white/10 bg-persian-blue-800/95 px-5 pb-5 pt-4 shadow-[0_28px_60px_rgb(0_0_0_/_0.28)] backdrop-blur-xl",
            isClosing && "mobile-menu-panel-exit pointer-events-none",
          )}
        >
          <ul className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link
                  aria-current={link.isActive ? "page" : undefined}
                  className={cn(
                    "group/link flex min-h-11 items-center justify-between rounded-[12px] px-3 text-label-m text-shuttle-gray-50 transition-colors duration-200 hover:bg-white/[0.08] hover:text-electric-lime-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400",
                    link.isActive && "bg-white/[0.06] font-medium",
                  )}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-1.5 rounded-full bg-white/35 transition-[background-color,box-shadow] duration-200 group-hover/link:bg-electric-lime-400",
                        link.isActive &&
                          "bg-electric-lime-400 shadow-[0_0_0_4px_rgb(212_251_32_/_0.12)]",
                      )}
                    />
                    {link.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="translate-x-0 text-body-l text-white/35 transition-[color,transform] duration-200 group-hover/link:translate-x-0.5 group-hover/link:text-electric-lime-400"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="group/link flex min-h-11 items-center justify-between rounded-[12px] px-3 text-label-m text-shuttle-gray-50 transition-colors duration-200 hover:bg-white/[0.08] hover:text-electric-lime-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400"
                href="/cart"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <Image src="/icons/shopping-bag.svg" alt="" height={18} width={18} />
                  Shopping bag
                </span>
                <span
                  aria-hidden="true"
                  className="translate-x-0 text-body-l text-white/35 transition-[color,transform] duration-200 group-hover/link:translate-x-0.5 group-hover/link:text-electric-lime-400"
                >
                  →
                </span>
              </Link>
            </li>
          </ul>

          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
            {accountLinks.map((link) => {
              const isPrimary = link.id === "join-us";

              return (
                <Link
                  className={cn(
                    "inline-flex min-h-11 items-center justify-center rounded-pill px-4 text-label-m font-medium transition-[transform,box-shadow,background-color,border-color] duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-persian-blue-800 motion-reduce:transform-none",
                    isPrimary
                      ? "border border-electric-lime-400 bg-electric-lime-400 text-shuttle-gray-950 shadow-[0_10px_26px_rgb(203_252_1_/_0.16)] hover:-translate-y-0.5 hover:bg-electric-lime-500 hover:shadow-[0_14px_32px_rgb(203_252_1_/_0.22)]"
                      : "border border-white/20 bg-white/[0.07] text-white hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.12]",
                  )}
                  href={link.href}
                  key={link.id}
                  onClick={(event) => handleAccountNavigation(event, link.href)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </div>
  );
}
