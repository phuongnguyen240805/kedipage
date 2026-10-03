import ClientBoAiAgentKedi10 from "../BoAiAgent/client-kedi-1";

/**
 * Snapshot route for Kedi Quản Trị.
 *
 * Keep this page on the current /bo-ai-agent legacy experience while
 * /bo-ai-agent is redesigned. The redesign should use a new component
 * instead of modifying client-kedi-1.tsx, so this route remains stable.
 */
export default function KediQuanTriPage() {
  return <ClientBoAiAgentKedi10 />;
}
