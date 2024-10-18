export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  instagram: string;
  linkedin: string;
}

// types.ts
export interface CoreValue {
  id: number;
  title: string;
  backgroundColor: string;
  sticker: string;
  padding: string;
}
export interface BlogCardData {
  category: string[];
  title: string;
  date: string;
  image: string;
  description: string;
}
