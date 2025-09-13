"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="partner-dashboard-theme"
    >
      {children}
    </ThemeProvider>
  );
}
