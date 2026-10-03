import { aiAgentPageData } from './data';
import type { AiAgentPageData } from './types';

const REVALIDATE_SECONDS = 300;

function isAiAgentPageData(value: unknown): value is AiAgentPageData {
  if (!value || typeof value !== 'object') return false;
  const data = value as Partial<AiAgentPageData>;

  return (
    Array.isArray(data.agents) &&
    Array.isArray(data.faqs) &&
    Boolean(data.hero?.title) &&
    Boolean(data.comparison?.title) &&
    Boolean(data.comparison?.definition?.term) &&
    Array.isArray(data.comparison?.definition?.items) &&
    Boolean(data.comparison?.headers?.beforeTitle) &&
    Boolean(data.comparison?.headers?.afterTitle) &&
    Boolean(data.comparison?.conclusion?.before) &&
    Boolean(data.comparison?.conclusion?.after)
  );
}

/**
 * Server-side data gateway for /bo-ai-agent.
 *
 * Today the page ships with local content so it is fast and deterministic.
 * When an API/CMS is ready, set KEDI_AI_AGENT_API_URL to an endpoint that
 * returns the AiAgentPageData contract. If the API is unavailable or returns
 * an invalid payload, the page safely falls back to the local snapshot.
 */
export async function getAiAgentPageData(): Promise<AiAgentPageData> {
  const endpoint = process.env.KEDI_AI_AGENT_API_URL;
  if (!endpoint) return aiAgentPageData;

  try {
    const response = await fetch(endpoint, {
      next: {
        revalidate: REVALIDATE_SECONDS,
        tags: ['bo-ai-agent'],
      },
    });

    if (!response.ok) return aiAgentPageData;

    const payload: unknown = await response.json();
    return isAiAgentPageData(payload) ? payload : aiAgentPageData;
  } catch {
    return aiAgentPageData;
  }
}
