"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="relative bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full"
      >
        <Image
          src={siteConfig.heroImage}
          alt={`${siteConfig.name} — Feel the Beat. Live the Night.`}
          width={1536}
          height={1024}
          priority
          className="w-full h-auto block"
          sizes="100vw"
        />

        <Link
          href="#contact"
          className="absolute left-[6%] bottom-[22%] w-[28%] h-[6%] sm:left-[8%] sm:bottom-[28%] sm:w-[22%] sm:h-[7%] opacity-0"
          aria-label="Book Now"
        />
      </motion.div>
    </section>
  );
}
