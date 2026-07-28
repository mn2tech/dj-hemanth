"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

const CROP_TOP = 0.11; // hide baked-in mockup nav + social icons

export default function Hero() {
  const imageWidth = 1536;
  const imageHeight = 1024;
  const visibleHeight = imageHeight * (1 - CROP_TOP);

  return (
    <section id="home" className="relative bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${imageWidth} / ${visibleHeight}` }}
      >
        <Image
          src={siteConfig.heroImage}
          alt={`${siteConfig.name} — Feel the Beat. Live the Night.`}
          fill
          priority
          className="object-cover object-[center_55%] sm:object-[center_52%]"
          sizes="100vw"
        />

        <Link
          href="#contact"
          className="absolute left-[6%] bottom-[20%] w-[28%] h-[6%] sm:left-[8%] sm:bottom-[24%] sm:w-[22%] sm:h-[7%] opacity-0"
          aria-label="Book Now"
        />
      </motion.div>
    </section>
  );
}
