export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  category: string;
  page: "itch-play" | "itch-download" | "itch-learn" | "youtube";
  engine: "unity" | "godot" | "youtube";
  bulletPoints: string[];
}

export interface Feature {
  title: string;
  icon: string;
  description: string;
}

export interface Image {
  src: string;
  alt: string;
}

export type Orientation = "horizontal" | "vertical";

export const Breakpoints = {
  xs: "475px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
export type BreakpointType = keyof typeof Breakpoints;
