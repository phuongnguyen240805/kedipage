'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    chatwootSettings?: {
      locale: string;
      position?: 'left' | 'right';
      type: 'standard' | 'expanded_bubble';
      [key: string]: unknown;
    };
    chatwootSDK?: {
      run: (options: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

type ChatwootWidgetProps = {
  baseUrl: string;
  websiteToken: string;
  locale?: string;
  position?: 'left' | 'right';
};

const SCRIPT_ID = 'chatwoot-sdk-script';

const ChatwootWidget = ({
  baseUrl,
  websiteToken,
  locale = 'vi',
  position = 'right',
}: ChatwootWidgetProps) => {
  useEffect(() => {
    if (!baseUrl || !websiteToken) return;

    window.chatwootSettings = {
      locale,
      position,
      type: 'standard',
    };

    const runChatwoot = () => {
      if (!window.chatwootSDK?.run) return;
      window.chatwootSDK.run({
        websiteToken,
        baseUrl,
      });
    };

    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      if (window.chatwootSDK?.run) {
        runChatwoot();
      } else {
        existingScript.addEventListener('load', runChatwoot, { once: true });
      }
      return;
    }

    const sdkScript = document.createElement('script');
    sdkScript.id = SCRIPT_ID;
    sdkScript.src = `${baseUrl}/packs/js/sdk.js`;
    sdkScript.defer = true;
    sdkScript.async = true;
    sdkScript.onload = runChatwoot;
    sdkScript.onerror = () => {
      console.error('[Chatwoot] Failed to load SDK from', sdkScript.src);
    };

    document.head.appendChild(sdkScript);
  }, [baseUrl, locale, position, websiteToken]);

  return null;
};

export default ChatwootWidget;