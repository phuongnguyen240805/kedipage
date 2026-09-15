import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}", // Đã thêm các thư mục animation/container của bạn
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    // 1. Cấu hình Breakpoints (Screens) đồng bộ với globals.css
    screens: {
      'xm': '320px',   // Mobile cực nhỏ
      'sm': '401px',   // Mobile/Tablet nhỏ
      'md': '769px',   // Tablet lớn
      'lg': '1025px',  // Laptop
      'xl': '1491px',  // Desktop lớn (Ochi style)
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 2. Cấu hình Font chữ Ochi
      fontFamily: {
        FoundersGrotesk: ["FoundersGrotesk", "sans-serif"],
        NeueMontreal: ["NeueMontreal", "sans-serif"],
      },
      transitionDuration: {
        '9000': '9000ms',
      },
      colors: {
        // Màu sắc đặc trưng Ochi bạn đã dùng
        kedi: {
          navy: "#0B2D5B",
          yellow: "#FFC629",
          white: "#FFFFFF",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        marquee: "#161B25", // Màu xanh Marquee
        about: "#cdea68",   // Màu xanh Neon của About
        secondry: "#0B2D5B",
        
        // Cấu hình màu hệ thống (Shadcn UI)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        brand: {
          DEFAULT: "#FFC629",
          navy: "#0B2D5B",
          yellow: "#FFC629",
          white: "#FFFFFF",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

export default config;

// Plugin xuất màu Tailwind ra biến CSS (dùng được cho các animation phức tạp)
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}