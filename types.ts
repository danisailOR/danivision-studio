
export interface ServiceItem {
  title: string;
  description: string;
  items: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  highlights?: string[];
}

export interface ProcessStep {
  title: string;
  concept: string;
  description: string;
}
