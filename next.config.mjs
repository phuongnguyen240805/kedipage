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
    if (!options.isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  images: {
    loader: 'custom',
    loaderFile: './lib/cloudflare-image-loader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: 'in8cddcab4.ufs.sh',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mona.media',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
       {
      protocol: 'https',
      hostname: 'zenlove.me',
      port: '',
      pathname: '/**',
    },
    ],
    domains: [
      'zenlove.me',
      'res.cloudinary.com',
      'cdn-icons-png.flaticon.com',
      'mona.media',
      'cdn.prod.website-files.com',
      'toolsngon.com',
      'www.sellthetrend.com',
      'encrypted-tbn0.gstatic.com',
      'logos-world.net',
      'paas-file-pro.igv.com',
      'zorgle.co.uk',
      'foxfio.com',
      'play-lh.googleusercontent.com',
      'logowik.com',
      'img.icons8.com',
      'images.pexels.com',
      'png.pngtree.com',
      'placehold.co',
      'i.pinimg.com'
    ],
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
        source: '/hop-tac-lam-an-voi-mona',
        destination: '/partnership',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
