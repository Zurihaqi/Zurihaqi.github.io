export interface Project {
  id: number;
  images: string[];
  thumbnail: string[];
  img_alt: string[];
  title: string;
  description: string;
  category: string[];
  tech: string[];
  repo: string;
  live?: string;
}
