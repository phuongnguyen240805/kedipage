'use client';
import "./globals.css";
import "@/components/features/quote-share/styles/quote-share.css";
import "@/components/features/quote-share/styles/quote-share.override.css";
import ElasticCursor from "@/components/ui/ElasticCursor";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import SocketContextProvider from "@/contexts/socketio";
import Header from "@/components/layouts/header";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import ChatwootWidget from "@/components/ChatProvider/ChatwootWidget";
import { QuoteShareProvider } from "@/components/features/quote-share";

import Script from "next/script"; 
import ParticlesBackground from "@/components/Particles";

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang?: string } }) {
  const locale = params?.lang || "vi"; 

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/brand/kedi-app-icon.png" />
        <link rel="apple-touch-icon" href="/brand/kedi-app-icon.png" />
      </head>
      <body>
        <ChatwootWidget
          baseUrl="https://chatwoot.ryon.website"
          websiteToken="mRrYWRN5PpP1GMemgHCuQkbG"
          locale="vi"
          position="right"
        />

        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <Script 
            src="https://app.rybbit.io/api/script.js" 
            data-site-id="1eca01561d7f" 
            strategy="afterInteractive" 
          />

          <ParticlesBackground />
          
          <PreloaderWrapper>
            <SocketContextProvider>
              <TooltipProvider>
                <Header />
                <main className="min-h-screen pt-14 lg:pt-16">
                  {children}
                </main>
              
                  <Footer />
              
              </TooltipProvider>
            </SocketContextProvider>
          </PreloaderWrapper>

          <Toaster />
          <ElasticCursor />
        </ThemeProvider>

        <QuoteShareProvider />
      </body>
    </html>
  );
}