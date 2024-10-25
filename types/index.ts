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
export type TestimonialDetails = {
  quote: string;
  company: string;
  description: string;
  quoteImage: string;
  name: string;
  position: string;
  image: string;
  bgColor: string;
  extra: string;
  companyWidth: number;
  companyHeight: number;
  extraWidth: number;
  extraHeight: number;
};

