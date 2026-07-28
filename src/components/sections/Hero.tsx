"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative min-h-screen flex flex-col items-center justify-center py-2">
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

          <Link
            href="#contact"
            className="absolute left-[8%] bottom-[28%] w-[22%] h-[7%] sm:left-[10%] sm:bottom-[30%] sm:w-[18%] sm:h-[8%] opacity-0"
            aria-label="Book Now"
          />
        </motion.div>
      </div>
    </section>
  );
}
