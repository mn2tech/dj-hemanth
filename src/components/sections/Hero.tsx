"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-16 md:pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-6xl mx-auto px-2 sm:px-4"
        >
          <Image
            src={siteConfig.heroImage}
            alt={`${siteConfig.name} — Feel the Beat. Live the Night.`}
            width={1536}
            height={1024}
            priority
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
          />

          {/* Invisible tap target over mockup Book Now button (left side) */}
          <Link
            href="#contact"
            className="absolute left-[8%] bottom-[28%] w-[22%] h-[7%] sm:left-[10%] sm:bottom-[30%] sm:w-[18%] sm:h-[8%] opacity-0"
            aria-label="Book Now"
          />
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold transition-colors z-10"
        aria-label="Scroll to services"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
