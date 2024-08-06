export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  category: string;
  page: "itch-play" | "itch-download" | "itch-learn" | "youtube";
  engine: "unity" | "godot" | "youtube";
  itchCode?: string;
  youtubeCode?: string;
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
  xs: "475",
  sm: "640",
  md: "768",
  lg: "1024",
  xl: "1280",
  "2xl": "1536",
} as const;
export type BreakpointType = keyof typeof Breakpoints;
