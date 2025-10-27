import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-black/5">
      <div className="px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Arbor"
            width={120}
            height={32}
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/api"
            className="text-sm text-black hover:text-brand-green transition-colors"
          >
            API
          </Link>
          <Link
            href="/company"
            className="text-sm text-black hover:text-brand-green transition-colors"
          >
            Company
          </Link>
          <Link
            href="/news"
            className="text-sm text-black hover:text-brand-green transition-colors"
          >
            News
          </Link>

          {/* CTA Button */}
          <Button variant="solid">Try Arbor</Button>
        </div>
      </div>
    </nav>
  );
};
