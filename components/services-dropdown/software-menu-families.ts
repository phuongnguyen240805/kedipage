import type { Service } from "./datas/services-data";

export type SoftwareMenuFamily = {
  key: string;
  title: string;
  description: string;
  previewImage: string;
  accent: string;
  hrefs: string[];
};

/** Navigation IA only; product page content is not changed here. */
export const SOFTWARE_MENU_FAMILIES: SoftwareMenuFamily[] = [
  {
    key: "business-platform",
    title: "Business Platform",
    description: "OS, CRM, commerce, analytics và automation cho vận hành cốt lõi.",
    previewImage: "/service-menu/families/business-platform.webp",
    accent: "#3b82f6",
    hrefs: ["/kedi-os", "/kedi-crm", "/kedi-commerce", "/kedi-analytics", "/kedi-automate"],
  },
  {
    key: "ai-automation",
    title: "AI & Automation",
    description: "AI workforce, workflow canvas và môi trường profile làm việc.",
    previewImage: "/service-menu/families/ai-automation.webp",
    accent: "#7c3aed",
    hrefs: ["/kedi-agents", "/kedi-ai-flow", "/kedi-profiles"],
  },
  {
    key: "growth-content",
    title: "Growth & Content",
    description: "Outreach, video, funnel, SEO và quảng cáo cho tăng trưởng.",
    previewImage: "/service-menu/families/growth-content.webp",
    accent: "#db2777",
    hrefs: ["/kedi-outreach", "/kedi-video", "/kedi-funnel", "/kedi-seo", "/kedi-ads"],
  },
  {
    key: "commerce-production",
    title: "Commerce Production",
    description: "Thiết kế, sản xuất và fulfillment theo mô hình POD.",
    previewImage: "/service-menu/families/commerce-production.webp",
    accent: "#ea580c",
    hrefs: ["/kedi-pod"],
  },
  {
    key: "industry-solutions",
    title: "Giải pháp theo ngành",
    description: "Logistics, đào tạo, retail, hospitality và hệ sinh thái giáo dục.",
    previewImage: "/service-menu/families/industry-solutions.webp",
    accent: "#0f766e",
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
    description: "Bộ công cụ tiện ích dùng nhanh cho nhiều workflow triển khai.",
    previewImage: "/service-menu/families/utility-platform.webp",
    accent: "#d97706",
    hrefs: ["/tools-ngon"],
  },
];

export function getSoftwareFamilyByKey(key: string): SoftwareMenuFamily {
  return SOFTWARE_MENU_FAMILIES.find((family) => family.key === key) ?? SOFTWARE_MENU_FAMILIES[0]!;
}

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
