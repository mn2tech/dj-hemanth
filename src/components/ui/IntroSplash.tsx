"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { siteConfig } from "@/data/site";

const INTRO_DURATION_MS = 6000;

interface IntroSplashProps {
  onComplete: () => void;
}

export default function IntroSplash({ onComplete }: IntroSplashProps) {
  const [show, setShow] = useState(true);
  const [audioStarted, setAudioStarted] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const completingRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const complete = useCallback(() => {
    if (completingRef.current) return;
    completingRef.current = true;

    if (timerRef.current) clearTimeout(timerRef.current);

    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setShow(false);
    onComplete();
  }, [onComplete]);

  const startAudio = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || audioStarted) return true;

    audio.volume = 0.8;
    try {
      await audio.play();
      setAudioStarted(true);
      setAutoplayBlocked(false);
      return true;
    } catch {
      setAutoplayBlocked(true);
      return false;
    }
  }, [audioStarted]);

  const scheduleComplete = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(complete, INTRO_DURATION_MS);
  }, [complete]);

  useEffect(() => {
    startAudio().then((played) => {
      if (played) scheduleComplete();
    });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startAudio, scheduleComplete]);

  const handleTap = useCallback(async () => {
    if (completingRef.current) return;

    if (!audioStarted) {
      const played = await startAudio();
      if (played) scheduleComplete();
      return;
    }

    complete();
  }, [audioStarted, startAudio, scheduleComplete, complete]);

  return (
    <>
      <audio
        ref={audioRef}
        src={siteConfig.introMusic}
        preload="auto"
        loop
        playsInline
      />

      <AnimatePresence onExitComplete={() => document.body.style.overflow = ""}>
        {show && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black cursor-pointer"
            onClick={handleTap}
            onTouchStart={(e) => {
              // iOS: start audio on touch without waiting for click
              if (!audioStarted) {
                e.preventDefault();
                handleTap();
              }
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

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="flex items-end justify-center gap-1 h-8 mt-6"
                aria-hidden
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 rounded-full bg-gold"
                    animate={
                      audioStarted
                        ? { height: ["20%", "100%", "35%", "85%", "20%"] }
                        : { height: "20%" }
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 0.55,
                      delay: i * 0.08,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="flex items-center gap-2 mt-10 text-light-gray/50 text-xs tracking-widest uppercase"
              >
                {autoplayBlocked && !audioStarted ? (
                  <>
                    <VolumeX size={14} className="text-brand-pink" />
                    <span className="text-brand-pink">Tap to play tabla beats</span>
                  </>
                ) : audioStarted ? (
                  <>
                    <Volume2 size={14} className="text-gold animate-pulse" />
                    <span>Tap again to enter</span>
                  </>
                ) : (
                  <span>Loading beats…</span>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
