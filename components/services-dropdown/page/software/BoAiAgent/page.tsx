import BoAiAgentRedesign from './redesign/BoAiAgentRedesign';
import { getAiAgentPageData } from './redesign/data-source';

export default async function BoAiAgentPage() {
  const data = await getAiAgentPageData();
  return <BoAiAgentRedesign data={data} />;
}
