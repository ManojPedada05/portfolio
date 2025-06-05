export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  tag?: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
}