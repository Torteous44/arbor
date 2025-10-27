// Utility functions

/**
 * Combines class names conditionally
 * Usage: cn("class1", condition && "class2", "class3")
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}
