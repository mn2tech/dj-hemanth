"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";

const INTRO_DURATION_MS = 5500;

interface IntroSplashProps {
  onComplete: () => void;
}

export default function IntroSplash({ onComplete }: IntroSplashProps) {
  const [show, setShow] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const completingRef = useRef(false);

  const complete = useCallback(() => {
    if (completingRef.current) return;
    completingRef.current = true;

    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setShow(false);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.65;
    const playPromise = audio.play();

    if (playPromise) {
      playPromise.catch(() => {});
    }

    const timer = setTimeout(complete, INTRO_DURATION_MS);
    return () => clearTimeout(timer);
  }, [complete]);

  return (
    <>
      <audio ref={audioRef} src={siteConfig.introMusic} preload="auto" />

      <AnimatePresence onExitComplete={() => document.body.style.overflow = ""}>
        {show && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black cursor-pointer"
            onClick={() => {
              const audio = audioRef.current;
              if (audio && audio.paused) {
                audio.play().catch(() => {});
              }
              complete();
            }}
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
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center text-center px-6"
            >
              <p className="text-5xl sm:text-6xl font-bold tracking-tight mb-2">
                <span className="text-brand-pink font-display italic">DJ</span>{" "}
                <span className="text-white">HEMANTH</span>
              </p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-brand-pink font-semibold tracking-[0.25em] uppercase text-sm"
              >
                {siteConfig.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="text-light-gray/50 text-sm mt-4 tracking-wide"
              >
                {siteConfig.heroSubheadline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="text-light-gray/30 text-xs mt-10 tracking-widest uppercase"
              >
                Tap to enter
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
