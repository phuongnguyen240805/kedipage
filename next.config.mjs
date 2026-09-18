import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: false, // Tắt minify
  productionBrowserSourceMaps: false, // Tắt source maps

  env: {
    siteKey: process.env.SITE_KEY,
    copySecretKey: process.env.COPY_SECRET_KEY,
    resendKey: process.env.RESEND_KEY,
    IPINFO_TOKEN: process.env.IPINFO_TOKEN,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  webpack: (config, options) => {
    // Webpack filesystem cache can fill the disk on small D: volumes (ENOSPC).
    if (!options.dev) {
      config.cache = false;
    }
    if (!options.isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  images: {
    // Default /_next/image optimizer. OpenNext resizes via the IMAGES binding
    // (not /cdn-cgi/image, which does not run on workers.dev).
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      'utfs.io',
      'in8cddcab4.ufs.sh',
      'github.com',
      'res.cloudinary.com',
      'mona.media',
      'picsum.photos',
      'images.unsplash.com',
      'zenlove.me',
      'lh3.googleusercontent.com',
      'play-lh.googleusercontent.com',
      'img.youtube.com',
      'tse3.mm.bing.net',
      'cdn-icons-png.flaticon.com',
      'cdn.prod.website-files.com',
      'toolsngon.com',
      'www.sellthetrend.com',
      'encrypted-tbn0.gstatic.com',
      'logos-world.net',
      'paas-file-pro.igv.com',
      'zorgle.co.uk',
      'foxfio.com',
      'logowik.com',
      'img.icons8.com',
      'images.pexels.com',
      'png.pngtree.com',
      'placehold.co',
      'i.pinimg.com',
    ].map((hostname) => ({
      protocol: 'https',
      hostname,
      pathname: '/**',
    })),
  },
  async rewrites() {
    return [
      {
        source: '/gioi-thieu',
        destination: '/introduction',
      },
      {
        source: '/du-an',
        destination: '/portfolio',
      },
      {
        source: '/khach-hang',
        destination: '/clients-section',
      },
      {
        source: '/hoat-dong',
        destination: '/activities',
      },
      {
        source: '/hop-tac-lam-an-voi-kedi',
        destination: '/partnership',
      },
      {
        source: '/hop-tac-lam-an-voi-mona',
        destination: '/partnership',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
