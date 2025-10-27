"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UpArrow } from "@/components/icons";
import { useWaitingList } from "@/contexts/waiting-list-context";

export const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const { openWaitingList } = useWaitingList();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Only open the waiting list modal if there's text in the input
    if (inputValue.trim()) {
      openWaitingList();
      // Clear the input after opening modal
      setInputValue("");
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-background overflow-hidden">
      <div className="relative w-full max-w-[90rem] mx-auto min-h-screen">
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
        <div className="relative z-10 w-full flex items-center justify-center px-4 md:px-8 lg:px-16 min-h-[calc(100vh-8rem)] md:min-h-screen">
          <form onSubmit={handleSubmit} className="w-full max-w-3xl">
            <div className="relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What do you want to know?"
                rows={3}
                className="w-full px-6 py-6 bg-background text-black placeholder:text-black/40 focus:outline-none rounded-[30px] border border-black/10  duration-300 pr-20 resize-none touch-manipulation"
              />
              <button
                type="submit"
                className="absolute bottom-3 right-2.5 w-11 h-11 rounded-full bg-brand-green text-background flex items-center justify-center hover:bg-brand-green/90 transition-colors duration-10 touch-manipulation"
                aria-label="Submit"
              >
                <UpArrow className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full px-4 pb-8 sm:pb-10 md:pb-12">
          {/* Mobile Layout */}
          <div className="md:hidden w-full">
            {/* Bottom row: Arrow left, Buttons right */}
            <div className="flex items-end justify-between">
              {/* Left: Scroll indicator */}
              <div className="flex items-center">
                <UpArrow className="w-6 h-6 text-black rotate-180 flex-shrink-0" />
              </div>

              {/* Right: CTAs - horizontal above 640px, stacked below */}
              <div className="flex flex-col sm:flex-row items-end gap-3">
                <Button
                  variant="solid"
                  className="whitespace-nowrap"
                  onClick={openWaitingList}
                >
                  TRY ARBOR
                </Button>
                <Button
                  variant="outline"
                  className="whitespace-nowrap"
                  onClick={openWaitingList}
                >
                  USE THE API
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-end justify-between">
            {/* Left side: Arrow and H1 */}
            <div className="flex items-center gap-18">
              <UpArrow className="w-7 h-7  rotate-180 flex-shrink-0" />
              <h1 className="text-lg lg:text-xl text-black whitespace-nowrap">
                Intelligence with a smaller footprint.
              </h1>
            </div>
            {/* Right CTAs */}
            <div className="flex items-center gap-4">
              <Button variant="solid" onClick={openWaitingList}>
                TRY ARBOR
              </Button>
              <Button variant="outline" onClick={openWaitingList}>
                USE THE API
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
