"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Headphones,
  Music2,
  Users,
  Activity,
} from "lucide-react";
import { siteConfig } from "@/data/site";

const featureIcons = {
  headphones: Headphones,
  music: Music2,
  users: Users,
  activity: Activity,
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* Full hero mockup — visible on large screens */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={siteConfig.heroImage}
          alt={`${siteConfig.name} — ${siteConfig.heroSubheadline}`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Mobile/tablet: mockup as upper visual + content below */}
      <div className="lg:hidden">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
          <Image
            src={siteConfig.heroImage}
            alt={`${siteConfig.name}`}
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>
      </div>

      {/* Overlay content — aligns with mockup left column on desktop */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 lg:pt-28 pb-8">
            <div className="max-w-xl lg:max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-4"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink text-xs font-semibold tracking-widest uppercase">
                  DJing since {siteConfig.djSince}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-3"
              >
                <span className="text-white block">{siteConfig.heroHeadline[0]}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-brand-pink to-purple-500 block">
                  {siteConfig.heroHeadline[1]}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-light-gray/70 text-sm tracking-[0.2em] uppercase mb-4"
              >
                {siteConfig.heroSubheadline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-light-gray/60 text-sm mb-6 max-w-sm"
              >
                {siteConfig.heroDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mb-8"
              >
                <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                  <span className="text-brand-pink font-display italic">DJ</span>{" "}
                  <span className="text-white">HEMANTH</span>
                </p>
                <p className="text-brand-pink text-xs tracking-[0.25em] uppercase mt-1 font-semibold">
                  {siteConfig.tagline}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-cyan-400/50 bg-black/40 backdrop-blur-sm text-white font-semibold hover:border-brand-pink hover:shadow-[0_0_20px_rgba(248,48,109,0.3)] transition-all group"
                >
                  Book Now
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="border-t border-white/10 bg-black/60 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {siteConfig.heroFeatures.map((feature) => {
                const Icon = featureIcons[feature.icon as keyof typeof featureIcons];
                return (
                  <div
                    key={feature.label}
                    className="flex items-center gap-3 text-light-gray/70"
                  >
                    <Icon size={20} className="text-brand-pink shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 lg:bottom-24 right-6 lg:right-10 text-white/40 hover:text-gold transition-colors z-10"
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
