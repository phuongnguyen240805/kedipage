import * as React from "react";

export function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      setValue(false);
      return;
    }

    const mediaQuery = window.matchMedia(query);

    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches);
    };

    setValue(mediaQuery.matches);

    // Modern browsers / WebView.
    if (
      typeof mediaQuery.addEventListener === "function" &&
      typeof mediaQuery.removeEventListener === "function"
    ) {
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    }

    // Safari / Android WebView cũ.
    if (
      typeof mediaQuery.addListener === "function" &&
      typeof mediaQuery.removeListener === "function"
    ) {
      mediaQuery.addListener(onChange);
      return () => mediaQuery.removeListener(onChange);
    }
  }, [query]);

  return value;
}
