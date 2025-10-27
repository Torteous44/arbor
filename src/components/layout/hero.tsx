"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UpArrow } from "@/components/icons";

export const Hero = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle chat submission
    console.log("Submitted:", inputValue);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-background overflow-hidden">
      {/* Background Logo with Fade */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-full h-full flex items-end justify-center pb-16">
          <div
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%)",
            }}
          >
            <Image
              src="/logo.svg"
              alt=""
              width={1100}
              height={550}
              className="opacity-40"
              priority
            />
          </div>
        </div>
      </div>

      {/* Centered Chat Input */}
      <div className="relative z-10 w-full flex items-center justify-center px-4">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl">
          <div className="relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="What do you want to know?"
              rows={3}
              className="w-full px-6 py-6 bg-background text-black placeholder:text-black/40 focus:outline-none rounded-[30px] border border-black/10 shadow-sm hover:shadow-md transition-shadow duration-300 pr-20 resize-none"
            />
            <button
              type="submit"
              className="absolute bottom-3 right-2.5 w-10 h-10 rounded-full bg-brand-green text-background flex items-center justify-center hover:bg-brand-green/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
              aria-label="Submit"
            >
              <UpArrow className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full flex items-end justify-between px-8 pb-12">
        {/* Left scroll indicator */}
        <div className="flex items-center">
          <UpArrow className="w-7 h-7 text-black/40 rotate-180 flex-shrink-0" />
        </div>
        {/* Center Copy */}
        <div className="absolute left-1/3 -translate-x-1/2">
          <h1 className="text-lg text-black/70 whitespace-nowrap">
            Intelligence with a smaller footprint.
          </h1>
        </div>
        {/* Right CTAs */}
        <div className="flex items-center gap-4">
          <Button variant="solid">TRY ARBOR</Button>
          <Button variant="outline">USE THE API</Button>
        </div>
      </div>
    </section>
  );
};
