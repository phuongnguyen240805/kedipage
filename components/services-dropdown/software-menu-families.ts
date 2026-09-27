import type { Service } from "./datas/services-data";

export type SoftwareMenuFamily = {
  key: string;
  title: string;
  description: string;
  hrefs: string[];
};

/** Navigation IA only; product page content is not changed here. */
export const SOFTWARE_MENU_FAMILIES: SoftwareMenuFamily[] = [
  {
    key: "business-platform",
    title: "Business Platform",
    description: "Vận hành, khách hàng, thương mại và dữ liệu.",
    hrefs: ["/kedi-os", "/kedi-crm", "/kedi-commerce", "/kedi-analytics", "/kedi-automate"],
  },
  {
    key: "ai-automation",
    title: "AI & Automation",
    description: "Agent, AI workflow và môi trường vận hành đa tài khoản.",
    hrefs: ["/kedi-agents", "/kedi-ai-flow", "/kedi-profiles"],
  },
  {
    key: "growth-content",
    title: "Growth & Content",
    description: "Outreach, video, funnel, SEO và quảng cáo.",
    hrefs: ["/kedi-outreach", "/kedi-video", "/kedi-funnel", "/kedi-seo", "/kedi-ads"],
  },
  {
    key: "commerce-production",
    title: "Commerce Production",
    description: "Quy trình sản xuất và vận hành sản phẩm theo đơn.",
    hrefs: ["/kedi-pod"],
  },
  {
    key: "industry-solutions",
    title: "Giải pháp theo ngành",
    description: "Các hệ thống đóng gói theo nghiệp vụ chuyên biệt.",
    hrefs: [
      "/nhtq/",
      "/phan-mem-dao-tao-noi-bo/",
      "/phan-mem-quan-ly-tiem-vang/",
      "/select-trial",
      "/edutech/",
    ],
  },
  {
    key: "utility-platform",
    title: "Utility Platform",
    description: "Bộ công cụ dùng chung cho nhiều nhu cầu triển khai.",
    hrefs: ["/tools-ngon"],
  },
];

export function getSoftwareFamilyGroups(services: Service[]) {
  const byHref = new Map(services.filter((item) => item.href).map((item) => [item.href as string, item]));
  const grouped = SOFTWARE_MENU_FAMILIES.map((family) => ({
    ...family,
    services: family.hrefs.map((href) => byHref.get(href)).filter((item): item is Service => Boolean(item)),
  })).filter((family) => family.services.length > 0);

  const knownHrefs = new Set(SOFTWARE_MENU_FAMILIES.flatMap((family) => family.hrefs));
  const ungrouped = services.filter((item) => item.href && !knownHrefs.has(item.href));

  return { grouped, ungrouped };
}
