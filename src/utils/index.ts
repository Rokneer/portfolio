import type { BreakpointType } from "../types";

export function sendEmail() {
  const email = "alejandro.hincapie.lo@gmail.com";
  const subject = "Opportunity Email";
  const msgBody = "Your message here!";
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}

export function formatTitle(projectTitle: string) {
  const words = projectTitle.replace(/-/g, " ").split(" ");

  return words
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}

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
