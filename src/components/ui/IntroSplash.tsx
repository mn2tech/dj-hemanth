"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

const INTRO_KEY = "hs-intro-seen";

export default function IntroSplash() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem(INTRO_KEY);
    if (!seen) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const dismiss = useCallback(() => {
    sessionStorage.setItem(INTRO_KEY, "1");
    setShow(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(dismiss, 3200);
    return () => clearTimeout(timer);
  }, [show, dismiss]);

  if (!mounted) return null;

  return (
    <AnimatePresence onExitComplete={() => document.body.style.overflow = ""}>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
          onClick={dismiss}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,500px)] h-[min(100vw,500px)] rounded-full border border-gold/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,400px)] h-[min(80vw,400px)] rounded-full border border-brand-purple/30"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            <div className="relative w-[min(72vw,280px)] h-[min(72vw,280px)] mb-2 overflow-hidden">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                fill
                priority
                className="object-cover object-top"
                sizes="280px"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-brand-pink font-semibold tracking-wide text-lg sm:text-xl"
            >
              {siteConfig.djTitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="text-light-gray/60 text-sm mt-2 tracking-wide"
            >
              {siteConfig.tagline}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
