import { SVGProps } from "react";

export const LeafLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 660 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Left leaf */}
      <path
        d="M120 185C120 185 120 185 120 185C120 248 171 298 234 298L291 298L291 355C291 355 291 355 291 355C291 292 240 242 177 242L120 242L120 185Z"
        fill="currentColor"
      />
      {/* Right leaf */}
      <path
        d="M311 125C311 125 311 125 311 125C311 219 385 295 479 295L537 295L537 353C537 353 537 353 537 353C537 259 463 183 369 183L311 183L311 125Z"
        fill="currentColor"
      />
    </svg>
  );
};
