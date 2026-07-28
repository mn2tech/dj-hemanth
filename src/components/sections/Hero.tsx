"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Calendar, Images } from "lucide-react";
import { siteConfig } from "@/data/site";
import BrandBackground from "@/components/ui/BrandBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-deep-dark/90 to-deep-dark" />
      <BrandBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="relative w-[min(70vw,320px)] h-[min(70vw,320px)] mx-auto overflow-hidden">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} — ${siteConfig.djTitle}`}
              fill
              priority
              className="object-cover object-top"
              sizes="320px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-4">
            DJing since {siteConfig.djSince} — Premier Bollywood DJ in the US
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-brand-pink font-semibold text-xl md:text-2xl mb-2"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg md:text-xl text-light-gray/80 max-w-2xl mx-auto mb-10"
        >
          From romantic wedding moments to electrifying sangeet nights — bringing
          the beats that make your celebration unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contact" className="btn-primary text-lg">
            <Calendar size={20} />
            Book Now
          </a>
          <a href="#gallery" className="btn-secondary text-lg">
            <Images size={20} />
            View Portfolio
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold transition-colors z-10"
        aria-label="Scroll to services"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
}
