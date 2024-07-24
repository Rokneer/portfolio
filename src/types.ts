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
