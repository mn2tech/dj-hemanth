"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Music, Headphones, Mic2, Radio } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Counter from "@/components/ui/Counter";
import { siteConfig } from "@/data/site";

const specializations = [
  { icon: Music, label: "Bollywood Classics & Latest" },
  { icon: Headphones, label: "Punjabi & Bhangra" },
  { icon: Mic2, label: "Live Dhol Coordination" },
  { icon: Radio, label: "Regional & Fusion Mixes" },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="section-padding bg-deep-purple/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571266028247-b8ef25b8f247?w=800&q=80"
                alt={siteConfig.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 lg:right-8 bg-gold text-deep-dark px-6 py-4 rounded-2xl font-bold shadow-lg shadow-gold/20">
              <span className="text-3xl">
                <Counter value={siteConfig.stats.years} suffix="+" />
              </span>
              <span className="text-sm block">Years Experience</span>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/30 rounded-2xl" />
          </motion.div>

          <div>
            <h2 className="section-title">
              Meet <span className="text-gold">{siteConfig.name}</span>
            </h2>
            <p className="text-light-gray/70 leading-relaxed mb-6">
              DJing since {siteConfig.djSince} — over {siteConfig.stats.years} years in the
              Bollywood DJ scene. I&apos;ve performed at {siteConfig.stats.events}+ events across
              the US and internationally. My passion is creating the perfect musical journey for
              every celebration — whether it&apos;s the emotional walk down the aisle or the
              high-energy sangeet dance floor.
            </p>
            <p className="text-light-gray/70 leading-relaxed mb-8">
              I specialize in blending classic Bollywood hits with the latest chart-toppers,
              Punjabi bangers, and regional favorites. Every event is customized with a
              personal consultation to ensure your music reflects your story.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="card-glass p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold">
                  <Counter value={siteConfig.stats.events} suffix="+" />
                </div>
                <div className="text-light-gray/60 text-xs md:text-sm mt-1">
                  Events Performed
                </div>
              </div>
              <div className="card-glass p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold">
                  <Counter value={siteConfig.stats.clients} suffix="+" />
                </div>
                <div className="text-light-gray/60 text-xs md:text-sm mt-1">
                  Happy Clients
                </div>
              </div>
              <div className="card-glass p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-gold">
                  <Counter value={siteConfig.stats.songs} suffix="+" />
                </div>
                <div className="text-light-gray/60 text-xs md:text-sm mt-1">
                  Songs in Library
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {specializations.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <Icon size={20} className="text-gold shrink-0" />
                    <span className="text-light-gray/80 text-sm">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
