"use client";

import { useState, useCallback } from "react";
import { Share2, Check } from "lucide-react";
import { siteConfig } from "@/data/site";

interface ShareButtonProps {
  variant?: "floating" | "inline";
  className?: string;
}

export default function ShareButton({
  variant = "floating",
  className = "",
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const share = useCallback(async () => {
    const url = siteConfig.siteUrl;
    const title = `${siteConfig.name} — ${siteConfig.djTitle}`;
    const text = `${siteConfig.tagline}. Book Bollywood DJ for weddings & events!`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }, []);

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={share}
        className={`p-2 rounded-full bg-white/5 hover:bg-gold/20 text-light-gray hover:text-gold transition-all ${className}`}
        aria-label="Share this site"
      >
        {copied ? <Check size={20} className="text-gold" /> : <Share2 size={20} />}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={share}
      className={`fixed bottom-24 right-6 z-50 p-4 rounded-full bg-brand-pink text-white shadow-lg shadow-brand-pink/30 hover:bg-brand-pink/90 hover:scale-110 transition-all duration-300 ${className}`}
      aria-label={copied ? "Link copied" : "Share this site"}
    >
      {copied ? <Check size={28} /> : <Share2 size={28} />}
    </button>
  );
}
