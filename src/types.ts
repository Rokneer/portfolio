export interface Project {
  cover: Image;
  logo: Image;
  description: string;
  roles: string[];
  contributions?: string[];
  platform: Image;
  itchCode?: string;
  youtubeCode?: string;
  gddUrl?: string;
}

export interface Image {
  src: string;
  alt: string;
}

export const Breakpoints = {
  xs: "475",
  sm: "640",
  md: "768",
  lg: "1024",
  xl: "1280",
  "2xl": "1536",
} as const;
export type BreakpointType = keyof typeof Breakpoints;
