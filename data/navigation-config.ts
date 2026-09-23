import ServicesDropdown from '@/components/services-dropdown/services-dropdown';
import { serviceCategories } from '@/components/services-dropdown/datas/services-data';

const serviceHrefs = Object.values(serviceCategories).flatMap((category) =>
  category.services
    .map((service) => service.href)
    .filter((href): href is string => Boolean(href))
);

export function isNavItemActive(
  item: (typeof navigationConfig)[number],
  pathname: string
) {
  if (item.dropdownType === 'blog') {
    return pathname === '/blog' || pathname.startsWith('/blog/');
  }

  if (item.dropdownType === 'services') {
    return serviceHrefs.some(
      (href) => pathname === href || pathname.startsWith(`${href}/`)
    );
  }

  if (!item.href) return false;
  if (pathname === item.href) return true;
  return item.href !== '/' && pathname.startsWith(`${item.href}/`);
}

export const navigationConfig = [
  {
    type: 'link',
    href: '/introduction',
    labelKey: 'introduction',
    label: 'Giới thiệu',
    hoverColor: 'hover:bg-kedi-yellow/10 hover:text-kedi-yellow',
  },
  {
    type: 'dropdown',
    dropdownType: 'services',
    labelKey: 'services',
    component: ServicesDropdown,
    hoverColor: 'hover:bg-kedi-yellow/10 hover:text-kedi-yellow',
  },
  {
    type: 'link',
    href: '/bo-ai-agent',
    labelKey: 'ai',
    label: 'AI',
    hoverColor: 'hover:bg-kedi-yellow/10 hover:text-kedi-yellow',
  },
  {
    type: 'link',
    href: '/du-an',
    labelKey: 'projects',
    label: 'Dự án',
    hoverColor: 'hover:bg-kedi-yellow/10 hover:text-kedi-yellow',
  },
  {
    type: 'link',
    href: '/khach-hang',
    labelKey: 'clients',
    label: 'Khách hàng',
    hoverColor: 'hover:bg-kedi-yellow/10 hover:text-kedi-yellow',
  },
  {
    type: 'dropdown',
    labelKey: 'blog',
    label: 'Blog',
    href: '/blog',
    dropdownType: 'blog',
    hoverColor: 'hover:bg-kedi-yellow/10 hover:text-kedi-yellow',
    items: [
      { href: '/blog/seo-guide', labelKey: 'seoGuide', label: 'Cẩm nang SEO' },
      {
        href: '/blog/digital-marketing',
        labelKey: 'digitalMarketing',
        label: 'Digital Marketing',
      },
      {
        href: '/blog/web-design-experience',
        labelKey: 'webDesignExperience',
        label: 'Kinh nghiệm thiết kế website',
      },
      {
        href: '/blog/hosting-knowledge',
        labelKey: 'hostingKnowledge',
        label: 'Kiến thức Hosting',
      },
      { href: '/blog/education', labelKey: 'education', label: 'Giáo dục' },
    ],
  },
  {
    type: 'link',
    href: '/hoat-dong',
    labelKey: 'activities',
    label: 'Hoạt động',
    hoverColor: 'hover:bg-kedi-yellow/10 hover:text-kedi-yellow',
  },
];
