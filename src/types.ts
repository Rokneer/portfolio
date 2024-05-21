export interface Project {
  title: string;
  shortDescription: string;
  longDescription: string;
  role: string;
  category: string;
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
