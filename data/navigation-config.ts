import ServicesDropdown from '@/components/services-dropdown/services-dropdown';

export const navigationConfig = [
  {
    type: 'link',
    href: '/introduction',
    labelKey: 'introduction',
    label: 'Giới thiệu',
    hoverColor: 'hover:bg-blue-100 hover:text-blue-900',
  },
  {
    type: 'dropdown',
    dropdownType: 'services',
    labelKey: 'services',
    component: ServicesDropdown,
    hoverColor: 'hover:bg-green-100 hover:text-green-900',
  },
  {
    type: 'link',
    href: '/du-an',
    labelKey: 'projects',
    label: 'Dự án',
    hoverColor: 'hover:bg-purple-100 hover:text-purple-900',
  },
  {
    type: 'link',
    href: '/khach-hang',
    labelKey: 'clients',
    label: 'Khách hàng',
    hoverColor: 'hover:bg-orange-100 hover:text-orange-900',
  },
  {
    type: 'dropdown',
    labelKey: 'blog',
    label: 'Blog',
    href: '/blog',
    dropdownType: 'blog',
    hoverColor: 'hover:bg-pink-100 hover:text-pink-900',
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
    hoverColor: 'hover:bg-yellow-100 hover:text-yellow-900',
  },
];
