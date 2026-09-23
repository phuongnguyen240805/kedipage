export type ProductImage = {
  src: string;
  alt: string;
  caption?: string;
  kind?: 'image' | 'video';
  poster?: string;
};

export type ProductStat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type PainItem = {
  kicker: string;
  title: string;
  description: string;
};

export type ModuleItem = {
  name: string;
  short: string;
  description: string;
  bullets: string[];
  image?: ProductImage;
  tag: string;
};

export type WorkflowItem = {
  title: string;
  owner?: string;
  keepHuman?: boolean;
};

export type MapNode = {
  title: string;
  description: string;
};

export type CapabilityRow = {
  label: string;
  value: string;
  why: string;
};

export type GalleryItem = ProductImage & {
  title: string;
  description: string;
};

export type RoadmapStep = {
  title: string;
  description: string;
  meta: string;
};

export type CompareColumn = {
  label: string;
  title: string;
  bullets: string[];
  summary: string;
  accent?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProductSectionKey =
  | 'marquee'
  | 'pain'
  | 'modules'
  | 'workflow'
  | 'ecosystem'
  | 'capability'
  | 'gallery'
  | 'roadmap'
  | 'comparison'
  | 'faq'
  | 'cta';

export type ProductLandingConfig = {
  slug: string;
  productName: string;
  sourceLabel: string;
  routeClass?: string;
  motionMarkSrc?: string;
  motionMascotSrc?: string;
  css?: string;
  hero: {
    eyebrow: string;
    titleLines: string[];
    emphasisLine?: number;
    lead: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    statusNote: string;
    mainImage: ProductImage;
    secondaryImage: ProductImage;
    floatingBadges: [string, string];
    mascot: ProductImage;
    stats: ProductStat[];
  };
  marquee?: string[];
  pain?: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    mascot: ProductImage;
    items: PainItem[];
  };
  modules?: {
    eyebrow: string;
    title: string;
    items: ModuleItem[];
  };
  workflow?: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    items: WorkflowItem[];
    humanSummary: string;
    workflowLabel?: string;
  };
  ecosystem?: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    centerTitle: string;
    centerSubtitle: string;
    nodes: MapNode[];
  };
  capability?: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    chips: string[];
    rows: CapabilityRow[];
    caption?: string;
    valueHeader?: string;
    whyHeader?: string;
  };
  gallery?: {
    eyebrow: string;
    quote: string;
    sourceNote: string;
    items: GalleryItem[];
  };
  roadmap?: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    steps: RoadmapStep[];
  };
  comparison?: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    columns: CompareColumn[];
  };
  faq?: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    mascot: ProductImage;
    items: FaqItem[];
    closingTitle?: string;
    closingText?: string;
  };
  cta?: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    mascot: ProductImage;
    sideTitle?: string;
    sideText?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  sectionOrder: ProductSectionKey[];
};
