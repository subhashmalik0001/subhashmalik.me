export type AchievementCategoryId =
  | "hackathons"
  | "projects"
  | "speaking"
  | "academics"
  | "community"
  | "industry"
  | "certifications";

export type ImageAspectRatio =
  | "16:9"
  | "4:3"
  | "3:4"
  | "4:5"
  | "1:1"
  | "certificate";

export interface PartnerLogo {
  name: string;
  logo: string;
  url?: string;
}

export interface AchievementLink {
  label: string;
  url: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  ratio?: ImageAspectRatio;
  kind?: "photo" | "stage" | "certificate" | "product" | "banner";
}

export interface Achievement {
  id: string;
  slug: string;
  category: AchievementCategoryId;
  categoryLabel: string;
  indexNumber: string;
  title: string;
  subtitle?: string;
  organization: string;
  organizationLogo?: string;
  recognition?: string;
  /** Distinguish 'win' | 'runner-up' | 'finalist' | 'qualified' | 'selection' | 'product' | 'community' | 'industry' | 'credential' */
  recognitionType?:
    | "win"
    | "runner-up"
    | "finalist"
    | "qualified"
    | "selection"
    | "product"
    | "speaking"
    | "mentorship"
    | "judging"
    | "community"
    | "internship"
    | "collaboration"
    | "credential";
  prize?: string;
  edition?: string;
  level?: string;
  date?: string;
  location?: string;
  role?: string;
  projectName?: string;
  description: string;
  contribution?: string;
  problemStatement?: string;
  solution?: string;
  outcome?: string;
  coverImage: string;
  coverRatio?: ImageAspectRatio;
  /** Optional note shown discreetly when an archival plate can be swapped with a raw ceremony photo */
  assetHint?: string;
  gallery: string[];
  galleryItems?: GalleryItem[];
  partnerLogos: PartnerLogo[];
  technologies: string[];
  links: AchievementLink[];
  featured: boolean;
}

export interface AchievementSectionMeta {
  index: string;
  code: string;
  id: AchievementCategoryId;
  heading: string;
  description: string;
  metaNote?: string;
}

