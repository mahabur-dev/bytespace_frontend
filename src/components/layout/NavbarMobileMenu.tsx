"use client";

import { useState } from "react";
import { accountLinks, navigationLinks } from "@/data/navigation";

export interface NavbarMobileMenuProps {
  className?: string;
}

export function NavbarMobileMenu({ className }: NavbarMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <button
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        className="rounded-pill px-3 py-2 text-label-m font-medium text-shuttle-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        Menu
      </button>
      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-t border-shuttle-gray-900 bg-persian-blue-800 px-5 py-6 shadow-card"
        >
          <ul className="flex flex-col gap-4">
            {[...navigationLinks, ...accountLinks].map((link) => (
              <li key={link.id}>
                <a
                  className="block text-label-m text-shuttle-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-400"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
