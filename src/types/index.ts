export type PageRoute =
  | '/'
  | '/mission'
  | '/atlas-of-all'
  | '/vision'
  | '/broadcast'
  | '/heartlight'
  | '/ledger'
  | '/codes'
  | '/connect'
  | '/privacy';

export interface NavItem {
  path: PageRoute;
  label: string;
  description: string;
}

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  iconImage?: string;
  rayColor: string;
  external: boolean;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconImage: string;
  alt: string;
}

export interface FeaturedCalling {
  title: string;
  description: string;
  cta: string;
  ctaUrl: string;
  imageUrl?: string;
}
