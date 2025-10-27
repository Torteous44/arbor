"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-black/2">
        <div className="md:max-w-[90rem] md:mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left side: Logo + Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Arbor"
                width={120}
                height={34}
                className="w-[120px] h-[34px] mb-1"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                href="/api"
                className="text-sm text-black hover:text-brand-green  transition-colors tracking-wider"
              >
                API
              </Link>
              <Link
                href="/company"
                className="text-sm text-black hover:text-brand-green  transition-colors tracking-wider"
              >
                COMPANY
              </Link>
              <Link
                href="/news"
                className="text-sm text-black hover:text-brand-green  transition-colors tracking-wider"
              >
                NEWS
              </Link>
            </div>
          </div>

          {/* Right side: CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button variant="solid">TRY ARBOR</Button>
          </div>

          {/* Mobile Right Side: Try Arbor + Hamburger (Circular Buttons) */}
          <div className="md:hidden flex items-center gap-2">
            {/* Try Arbor Pill Button */}
            <button
              className="px-4 py-2 h-10 rounded-full bg-brand-green text-background flex items-center justify-center text-xs font-medium hover:bg-brand-green/90 transition-colors whitespace-nowrap"
              aria-label="Try Arbor"
            >
              TRY ARBOR
            </button>

            {/* Hamburger Circular Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex flex-col items-center justify-center gap-1"
              aria-label="Toggle menu"
            >
              <span
                className={`w-4 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="h-full w-full bg-background flex flex-col">
            {/* Navbar Header in Menu */}
            <div className="px-4 py-4 flex items-center justify-between border-b border-black/5">
              <Link
                href="/"
                className="flex items-center flex-shrink-0"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/logo.svg"
                  alt="Arbor"
                  width={100}
                  height={28}
                  className="w-[120px] h-[34px] mb-1"
                  priority
                />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  className="px-4 py-2 h-10 rounded-full bg-brand-green text-background flex items-center justify-center text-xs font-medium hover:bg-brand-green/90 transition-colors whitespace-nowrap"
                  aria-label="Try Arbor"
                  onClick={() => setIsMenuOpen(false)}
                >
                  TRY ARBOR
                </button>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu Options - Left Aligned with Bottom Borders */}
            <div className="flex-1 flex flex-col px-4 pt-8 overflow-y-auto">
              <Link
                href="/api"
                className="text-2xl text-black hover:text-brand-green transition-colors py-6 border-b border-black/10"
                onClick={() => setIsMenuOpen(false)}
              >
                API
              </Link>
              <Link
                href="/company"
                className="text-2xl text-black hover:text-brand-green transition-colors py-6 border-b capitalize border-black/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Company
              </Link>
              <Link
                href="/news"
                className="text-2xl text-black hover:text-brand-green transition-colors py-6 border-b border-black/10"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
