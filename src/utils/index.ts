import type { BreakpointType } from "../types";

export function formatImageSrcSet(
  src: string,
  formatImage: (src: string, size: BreakpointType) => string,
): Record<BreakpointType, string> {
  return {
    xs: formatImage(src, "xs"),
    sm: formatImage(src, "sm"),
    md: formatImage(src, "md"),
    lg: formatImage(src, "lg"),
    xl: formatImage(src, "xl"),
    "2xl": formatImage(src, "2xl"),
  };
}
