'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type AIMegaMenuProps = {
  isOpen: boolean;
  onNavigate?: () => void;
};

type MenuItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  tag?: string;
};

const PRODUCT_GRID: MenuItem[] = [
  {
    title: 'Kedi Agents',
    description: 'AI workforce cho các tác vụ vận hành.',
    href: '/kedi-agents',
    image: '/service-menu/software-thumbnails/06-ai-agent-orchestration-hub.png',
  },
  {
    title: 'Kedi AI Flow',
    description: 'Workflow AI trực quan theo node và luồng.',
    href: '/kedi-ai-flow',
    image: '/service-menu/software-thumbnails/07-ai-workflow-pipeline.png',
  },
  {
    title: 'Kedi Profiles',
    description: 'Profile/browser đa tài khoản cho đội vận hành.',
    href: '/kedi-profiles',
    image: '/service-menu/software-thumbnails/08-identity-dashboard.png',
  },
  {
    title: 'AI chăm sóc khách hàng',
    description: 'Giữ lead và chăm sóc khách hàng tự động.',
    href: '/kedi-agents',
    image: '/service-menu/software-thumbnails/02-crm-pipeline-dashboard.png',
  },
  {
    title: 'Kedi Automate',
    description: 'Kết nối trigger, action và workflow tự động.',
    href: '/kedi-automate',
    image: '/service-menu/software-thumbnails/05-automation-hub-network.png',
  },
  {
    title: 'Kedi Analytics',
    description: 'Theo dõi dữ liệu, KPI và hiệu suất vận hành.',
    href: '/kedi-analytics',
    image: '/service-menu/software-thumbnails/04-analytics-dashboard.png',
  },
];

const SOLUTIONS: MenuItem[] = [
  {
    title: 'Chuyển đổi AI toàn phần',
    description: 'Lộ trình AI cho doanh nghiệp từ tác vụ đến vận hành.',
    href: '/bo-ai-agent',
    image: '/service-menu/software-thumbnails/01-os-ecosystem-dashboard.png',
  },
  {
    title: 'Viết AI Agent theo yêu cầu',
    description: 'Thiết kế AI Agent đúng nghiệp vụ doanh nghiệp.',
    href: '/kedi-agents',
    image: '/service-menu/software-thumbnails/06-ai-agent-orchestration-hub.png',
  },
  {
    title: 'Phần mềm theo yêu cầu',
    description: 'CRM, workflow và phần mềm tích hợp AI.',
    href: '/blog/viet-phan-mem-thoi-dai-ai',
    image: '/service-menu/software-thumbnails/07-ai-workflow-pipeline.png',
  },
  {
    title: 'SEO & AEO thời đại AI',
    description: 'Tối ưu tìm kiếm và khả năng được AI trích dẫn.',
    href: '/kedi-seo',
    image: '/service-menu/software-thumbnails/12-kedi-seo.png',
  },
  {
    title: 'Kiến thức AI cho doanh nghiệp',
    description: 'Phân tích và hướng dẫn ứng dụng AI vào vận hành.',
    href: '/blog/tu-dong-hoa-doanh-nghiep',
    image: '/service-menu/software-thumbnails/04-analytics-dashboard.png',
  },
];

const RESOURCE_LINKS = [
  { title: 'Viết phần mềm thời đại AI', href: '/blog/viet-phan-mem-thoi-dai-ai', fresh: true },
  { title: 'Tự động hoá doanh nghiệp', href: '/blog/tu-dong-hoa-doanh-nghiep', fresh: true },
  { title: 'Kedi AI Flow cho công việc', href: '/kedi-ai-flow' },
  { title: 'Kedi Agents cho doanh nghiệp', href: '/kedi-agents' },
  { title: 'Kedi Profiles cho đội vận hành', href: '/kedi-profiles' },
  { title: 'Kedi Automate đa ứng dụng', href: '/kedi-automate' },
];

const ROLE_LINKS = [
  { title: 'Vận hành & tự động hoá', href: '/kedi-automate' },
  { title: 'Bán hàng & CRM', href: '/kedi-crm' },
  { title: 'Marketing & SEO/AEO bằng AI', href: '/kedi-seo' },
  { title: 'AI Agent & Chatbot', href: '/kedi-agents' },
  { title: 'Outreach & chăm sóc lead', href: '/kedi-outreach' },
  { title: 'Dữ liệu & chiến lược AI', href: '/kedi-analytics' },
];

const TOOL_LINKS = [
  'ChatGPT',
  'Gemini',
  'Claude',
  'Grok',
  'DeepSeek',
  'Perplexity',
  'NotebookLM',
  'Gamma',
  'Canva AI',
  'Nano Banana',
  'Leonardo',
  'Midjourney',
  'HeyGen',
  'Veo',
  'Runway',
  'ElevenLabs',
  'Notion AI',
];

function Chip({
  item,
  onNavigate,
  className,
}: {
  item: MenuItem;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link data-glass="item" href={item.href} onClick={onNavigate} className={cn('mai-chip', className)}>
      <span className="mai-ic">
        <Image src={item.image} alt="" width={100} height={76} />
      </span>
      <span className="mai-tx">
        <b>
          {item.title}
          {item.tag ? <i className="mai-tag">{item.tag}</i> : null}
        </b>
        <small>{item.description}</small>
      </span>
    </Link>
  );
}

function Heading({
  title,
  href,
  linkLabel = 'Tất cả →',
  icon,
  onNavigate,
}: {
  title: string;
  href?: string;
  linkLabel?: string;
  icon?: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="mai-head">
      <div className="mai-t">
        {icon ? <Image className="mai-hic" src={icon} alt="" width={18} height={18} /> : null}
        {title}
      </div>
      {href ? (
        <Link className="mai-all" href={href} onClick={onNavigate}>
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}

export default function AIMegaMenu({ isOpen, onNavigate }: AIMegaMenuProps) {
  return (
    <>
      <style jsx global>{`
        .kedi-ai-mega{font-family:inherit;color:#0b2d5b;opacity:0;visibility:hidden;pointer-events:none;transform:translate(-50%,-10px) scale(.988);transform-origin:50% 0;transition:opacity .18s ease,transform .22s cubic-bezier(.22,1,.36,1),visibility 0s linear .22s;will-change:opacity,transform}
        .kedi-ai-mega[data-open='true']{opacity:1;visibility:visible;pointer-events:auto;transform:translate(-50%,0) scale(1);transition:opacity .18s ease,transform .22s cubic-bezier(.22,1,.36,1),visibility 0s}
        .kedi-ai-mega[data-open='false']{opacity:0;visibility:hidden;pointer-events:none;transform:translate(-50%,-10px) scale(.988)}
        .kedi-ai-mega-panel{overflow:visible;border-radius:18px;background:#fff;padding:22px 24px 24px;text-align:left;box-shadow:0 10px 34px rgba(70,40,120,.18)}
        .kedi-ai-mega .mai-grid{display:grid;grid-template-columns:1.25fr 1fr 1fr;gap:24px}
        .kedi-ai-mega .mai-col{list-style:none;margin:0;padding:0;min-width:0}
        .kedi-ai-mega .mai-head{display:flex;align-items:baseline;gap:8px;margin:0 0 10px}
        .kedi-ai-mega .mai-head .mai-t{display:flex;align-items:center;margin:0;font-size:11.5px;font-weight:900;letter-spacing:.09em;text-transform:uppercase;color:#92700b;line-height:1.3}
        .kedi-ai-mega .mai-hic{width:24px;height:18px;border-radius:4px;object-fit:cover;margin-right:6px;box-shadow:0 1px 4px rgba(70,40,120,.12)}
        .kedi-ai-mega .mai-all{margin-left:auto;font-size:12px;font-weight:800;color:#b57e00;text-decoration:none;white-space:nowrap}
        .kedi-ai-mega .mai-all:hover{text-decoration:underline}

        .kedi-ai-mega .mai-chip{display:flex;gap:11px;align-items:flex-start;padding:9px 10px;border-radius:12px;text-decoration:none;color:#0b2d5b;border:1px solid transparent;transition:.14s;margin-bottom:2px;min-width:0}
        .kedi-ai-mega .mai-chip:hover{background:#faf7ff;border-color:#eee3fb;transform:translateY(-1px)}
        .kedi-ai-mega .mai-ic{width:50px;height:38px;border-radius:8px;flex:none;overflow:hidden;background:#fff;box-shadow:0 2px 8px rgba(70,40,120,.14)}
        .kedi-ai-mega .mai-ic img{width:100%;height:100%;object-fit:cover;display:block}
        .kedi-ai-mega .mai-tx{min-width:0;display:block}
        .kedi-ai-mega .mai-tx b{display:block;font-size:13.5px;font-weight:800;line-height:1.3;color:inherit}
        .kedi-ai-mega .mai-tx small{display:-webkit-box;font-size:11.8px;color:#52647f;line-height:1.38;margin-top:2px;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}
        .kedi-ai-mega .mai-tag{display:inline-block;font-style:normal;font-size:9.5px;font-weight:900;letter-spacing:.04em;background:#ffc629;color:#0b2d5b;border-radius:999px;padding:1px 7px;margin-left:5px;vertical-align:2px}

        .kedi-ai-mega .mai-hero{background:linear-gradient(120deg,#6b10c4 0%,#9b1fe0 55%,#c5379a 100%);color:#fff;border:0;box-shadow:0 12px 26px -14px rgba(124,15,209,.65);margin-bottom:8px}
        .kedi-ai-mega .mai-hero small{color:rgba(255,255,255,.9)}
        .kedi-ai-mega .mai-hero:hover{background:linear-gradient(120deg,#5c0aad 0%,#8b17cf 55%,#b12d8a 100%);transform:translateY(-2px)}
        .kedi-ai-mega .mai-hero .mai-ic{background:rgba(255,255,255,.16);box-shadow:none}
        .kedi-ai-mega .mai-hero-o{background:linear-gradient(120deg,#b1370f 0%,#f5851e 60%,#ffb547 100%);box-shadow:0 12px 26px -14px rgba(245,133,30,.7)}
        .kedi-ai-mega .mai-hero-o:hover{background:linear-gradient(120deg,#9c2f0a 0%,#e0760f 60%,#f0a637 100%)}

        .kedi-ai-mega .mai-grid2{display:grid;grid-template-columns:1fr 1fr;gap:2px}
        .kedi-ai-mega .mai-more{margin-top:8px;padding-top:9px;border-top:1px solid #f0e9fb;display:flex;flex-direction:column;gap:1px}
        .kedi-ai-mega .mai-more a{font-size:12.5px;color:#52647f;text-decoration:none;padding:4px 10px;border-radius:7px}
        .kedi-ai-mega .mai-more a:hover{background:#f3e8ff;color:#b57e00}

        .kedi-ai-mega .mai-links{display:flex;flex-direction:column;gap:1px}
        .kedi-ai-mega .mai-links a{display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:9px;font-size:13px;font-weight:600;color:#0b2d5b;text-decoration:none;min-width:0}
        .kedi-ai-mega .mai-links a:hover{background:#f3e8ff;color:#b57e00}
        .kedi-ai-mega .mai-links2{display:grid;grid-template-columns:1fr 1fr;gap:1px}
        .kedi-ai-mega .mai-new{font-style:normal;font-size:10.5px;font-weight:800;color:#b57e00;margin-left:auto}
        .kedi-ai-mega .mai-sep{height:1px;background:#eee3fb;margin:13px 0}

        @media(max-width:1200px){
          .kedi-ai-mega .mai-grid{grid-template-columns:1fr}
          .kedi-ai-mega .mai-col{padding:6px 0 10px}
          .kedi-ai-mega .mai-col + .mai-col{border-top:1px solid #f0e9fb}
          .kedi-ai-mega .mai-grid2,.kedi-ai-mega .mai-links2{grid-template-columns:1fr}
        }
        @media(prefers-reduced-motion:reduce){.kedi-ai-mega,.kedi-ai-mega *{transition:none!important}.kedi-ai-mega{transform:translate(-50%,0)!important}}
      `}</style>

      <div
        id="kedi-ai-mega-menu"
        role="menu"
        aria-label="AI"
        aria-hidden={!isOpen}
        data-open={isOpen ? 'true' : 'false'}
        className="kedi-ai-mega fixed left-1/2 top-16 z-[9999] w-[min(1180px,94vw)]"
      >
        <div data-glass="menu" data-glass-tone="light" className="kedi-ai-mega-panel">
          <div className="mai-grid">
            <section className="mai-col" aria-labelledby="kedi-ai-products-title">
              <Heading title="AI Agent đang bán" href="/bo-ai-agent" linkLabel="Xem tất cả →" onNavigate={onNavigate} />

              <Chip
                item={{
                  title: 'Bộ AI Agent KEDI',
                  description: 'AI workforce cho bán hàng, chăm khách và vận hành doanh nghiệp.',
                  href: '/bo-ai-agent',
                  image: '/service-menu/software-thumbnails/06-ai-agent-orchestration-hub.png',
                  tag: 'KEDI ĐANG TỰ XÀI',
                }}
                onNavigate={onNavigate}
                className="mai-hero"
              />
              <Chip
                item={{
                  title: 'Kedi Outreach',
                  description: 'Prospecting, messaging và engagement đa kênh.',
                  href: '/kedi-outreach',
                  image: '/service-menu/software-thumbnails/09-multichannel-outreach-network.png',
                }}
                onNavigate={onNavigate}
                className="mai-hero mai-hero-o"
              />

              <div className="mai-grid2">
                {PRODUCT_GRID.map((item) => (
                  <Chip key={`${item.href}-${item.title}`} item={item} onNavigate={onNavigate} />
                ))}
              </div>

              <div className="mai-more">
                <Link href="/kedi-agents" onClick={onNavigate}>AI Agent tuyển dụng &amp; HRM</Link>
                <Link href="/kedi-outreach" onClick={onNavigate}>Email remarketing &amp; outreach</Link>
                <Link href="/kedi-automate" onClick={onNavigate}>AI điều hành &amp; automation</Link>
              </div>
            </section>

            <section className="mai-col" aria-labelledby="kedi-ai-solutions-title">
              <Heading title="Giải pháp & tự động hoá" />
              {SOLUTIONS.map((item) => (
                <Chip key={`${item.href}-${item.title}`} item={item} onNavigate={onNavigate} />
              ))}

              <div className="mai-sep" />
              <Heading
                title="Tài nguyên AI"
                href="/blog"
                icon="/service-menu/software-thumbnails/07-ai-workflow-pipeline.png"
                onNavigate={onNavigate}
              />
              <div className="mai-links">
                {RESOURCE_LINKS.map((item) => (
                  <Link key={`${item.href}-${item.title}`} href={item.href} onClick={onNavigate}>
                    {item.title}
                    {item.fresh ? <em className="mai-new">mới</em> : null}
                  </Link>
                ))}
              </div>
            </section>

            <section className="mai-col" aria-labelledby="kedi-ai-role-title">
              <Heading title="AI theo nghiệp vụ" href="/bo-ai-agent" onNavigate={onNavigate} />
              <div className="mai-links mai-links2">
                {ROLE_LINKS.map((item) => (
                  <Link key={`${item.href}-${item.title}`} href={item.href} onClick={onNavigate}>
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="mai-sep" />

              <Heading
                title="Công cụ AI trong công việc"
                href="/tools-ngon"
                icon="/service-menu/software-thumbnails/19-tools-ngon.png"
                onNavigate={onNavigate}
              />
              <div className="mai-links mai-links2">
                {TOOL_LINKS.map((tool) => (
                  <Link key={tool} href="/tools-ngon" onClick={onNavigate}>
                    {tool}
                  </Link>
                ))}
                <Link href="/tools-ngon" onClick={onNavigate}>Xem cả bộ →</Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
