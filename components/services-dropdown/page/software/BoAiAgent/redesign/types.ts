export type AiAgentStatus = 'ban' | 'chay' | 'trienkhai' | 'xay' | 'noibo';

export type AiAgentCategory =
  | 'sales'
  | 'care'
  | 'web'
  | 'legal'
  | 'operations'
  | 'hr'
  | 'education';

export type AiAgent = {
  id: number;
  name: string;
  role: string;
  description: string;
  image?: string;
  mono?: string;
  status: AiAgentStatus;
  system?: string;
  systemLabel?: string;
  categories: AiAgentCategory[];
  featured?: boolean;
};

export type AgentFilter = {
  id: 'all' | AiAgentCategory;
  label: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type SystemLayer = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type ConnectedProduct = {
  id: 'crm' | 'automate' | 'analytics' | 'commerce';
  label: string;
  detail: string;
  href: string;
};

export type WorkflowStep = {
  step: string;
  title: string;
  description: string;
};

export type ComparisonRow = {
  key: string;
  before: string;
  after: string;
};

export type ActivityItem = {
  agent: string;
  action: string;
  image: string;
  state: string;
};

export type EvidenceBlock = {
  title: string;
  body: string;
};

export type DepartmentUseCase = {
  index: string;
  name: string;
  title: string;
  description: string;
  agent: string;
  image: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type AiAgentPageData = {
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    quoteLabel: string;
    quote: string;
    description: string;
    stats: HeroStat[];
  };
  filters: AgentFilter[];
  agents: AiAgent[];
  system: {
    eyebrow: string;
    title: string;
    description: string;
    layers: SystemLayer[];
    products: ConnectedProduct[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    warningTitle: string;
    warnings: string[];
    steps: WorkflowStep[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    definition: {
      term: string;
      pos: string;
      note: string;
      items: string[];
    };
    headers: {
      beforeLabel: string;
      beforeTitle: string;
      afterLabel: string;
      afterTitle: string;
    };
    rows: ComparisonRow[];
    conclusion: {
      before: string;
      after: string;
    };
  };
  activity: {
    eyebrow: string;
    title: string;
    description: string;
    items: ActivityItem[];
  };
  evidence: {
    eyebrow: string;
    title: string;
    tags: string[];
    blocks: EvidenceBlock[];
  };
  departments: {
    eyebrow: string;
    title: string;
    description: string;
    items: DepartmentUseCase[];
  };
  metrics: Metric[];
  faqs: FaqItem[];
  cta: {
    eyebrow: string;
    title: string;
    description: string;
  };
};
