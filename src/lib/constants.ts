// Design System Constants

/**
 * Brand Colors
 * Usage: Apply these in your Tailwind classes or use as reference
 */
export const COLORS = {
  brandGreen: "#2E6F40",
  background: "#FEFEFE",
  black: "#0A0A0A",
} as const;

/**
 * Font Families
 * These are configured in layout.tsx and available as Tailwind utilities
 */
export const FONTS = {
  main: "Geist",
  mono: "IBM Plex Mono",
} as const;

/**
 * Border Radius
 * Default: rounded-full (9999px)
 */
export const BORDER_RADIUS = {
  default: "9999px",
  full: "9999px",
  none: "0px",
} as const;
