'use client';

import type { AiAgentPageData } from './types';
import AgentExplorerSection from './sections/AgentExplorerSection';
import ConnectedSystemSection from './sections/ConnectedSystemSection';
import DepartmentSection from './sections/DepartmentSection';
import HeroSection from './sections/HeroSection';
import MetricsSection from './sections/MetricsSection';
import { WorkflowSection } from './sections/ProcessSections';
import { ActivitySection, EvidenceSection } from './sections/ProofSections';
import LegacyComparisonSection from './legacy/LegacyComparisonSection';
import LegacyFaqSection from './legacy/LegacyFaqSection';
import LegacyTrustSection from './legacy/LegacyTrustSection';
import LegacyCtaSection from './legacy/LegacyCtaSection';

export default function BoAiAgentRedesign({ data }: { data: AiAgentPageData }) {
  return (
    <div className="overflow-x-clip bg-white antialiased">
      <HeroSection data={data} />
      <AgentExplorerSection data={data} />
      <ConnectedSystemSection data={data} />
      <LegacyTrustSection data={data} />
      <LegacyComparisonSection data={data} />
      <WorkflowSection data={data} />
      <ActivitySection data={data} />
      <EvidenceSection data={data} />
      <DepartmentSection data={data} />
      <MetricsSection data={data} />
      <LegacyFaqSection data={data} />
      <LegacyCtaSection data={data} />
    </div>
  );
}
