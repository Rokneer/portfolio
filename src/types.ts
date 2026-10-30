export interface Project {
  name: string;
  cover: Image;
  logo: Image;
  images: Image[];
  description: string;
  roles: string[];
  contributions?: string[];
  platform: Image;
  itchCode?: string;
  youtubeCode?: string;
}

export interface Image {
  src: string;
  alt: string;
}
