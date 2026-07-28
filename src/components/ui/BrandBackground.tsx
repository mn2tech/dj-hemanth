"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export default function BrandBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Vinyl groove rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          className="relative w-[min(90vw,720px)] h-[min(90vw,720px)]"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-gold/10"
              style={{ margin: `${i * 14}%` }}
            />
          ))}
          <div className="absolute inset-[22%] rounded-full border-2 border-gold/20" />
          <div className="absolute inset-[30%] rounded-full border border-brand-purple/40 bg-brand-purple/10" />
        </motion.div>
      </div>

      {/* Large watermark logo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
      >
        <Image
          src={siteConfig.logo}
          alt=""
          width={600}
          height={600}
          className="w-[min(85vw,560px)] h-auto object-top"
          aria-hidden
        />
      </motion.div>

      {/* Cardinal pink accents */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-brand-pink/40" />
      <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-brand-pink/40" />
      <div className="absolute top-1/2 left-[12%] -translate-y-1/2 w-2 h-2 rotate-45 bg-brand-pink/40" />
      <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-2 h-2 rotate-45 bg-brand-pink/40" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-pink/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
    </div>
  );
}
