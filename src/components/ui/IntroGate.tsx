"use client";

import { useState, useEffect } from "react";
import IntroSplash from "@/components/ui/IntroSplash";

export default function IntroGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  if (!ready) {
    return (
      <IntroSplash
        onComplete={() => {
          document.body.style.overflow = "";
          setReady(true);
        }}
      />
    );
  }

  return <>{children}</>;
}
