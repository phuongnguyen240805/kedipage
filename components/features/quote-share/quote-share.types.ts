export type QuoteShareTheme = {
  label: string;
  bg?: string;
  grad?: string[];
  fg: string;
  logo: "dark" | "white";
  border?: boolean;
};

export type QuoteShareThemeConfig = {
  brand: QuoteShareTheme;
  primary: QuoteShareTheme;
  accent: QuoteShareTheme;
  dark: QuoteShareTheme;
};

export type QuoteShareBrowserConfig = {
  site: string;
  logoDark: string;
  logoWhite: string;
  downloadPrefix: string;
  brandLabel: string;
  themes: QuoteShareThemeConfig;
  minLength: number;
  maxLength: number;
  allow: string;
  deny: string;
};

export type QuoteShareWindow = Window & {
  MONA_QUOTE_CFG?: QuoteShareBrowserConfig;
  __monaQuoteInit?: boolean;
  qrcode?: unknown;
};
