"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ZoomIn } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Lightbox from "@/components/ui/Lightbox";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { cn } from "@/lib/utils";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const imageItems = filteredItems.filter((item) => item.type === "image");
  const videoItems = filteredItems.filter((item) => item.type === "video");

  return (
    <AnimatedSection id="gallery" className="section-padding bg-deep-purple/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Portfolio <span className="text-gold">Gallery</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Moments from weddings, sangeets, corporate events, and private parties.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === category
                  ? "bg-magenta text-white shadow-lg shadow-magenta/20"
                  : "bg-white/5 text-light-gray/70 hover:bg-white/10 hover:text-white border border-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {videoItems.length > 0 && (
          <div className="mb-10">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Play size={18} className="text-gold" />
              Event Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videoItems.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-video rounded-2xl overflow-hidden card-glass group cursor-pointer"
                  onClick={() => setActiveVideo(item.videoUrl || null)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={28} className="text-deep-dark ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <ZoomIn
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full bg-black/60 text-white text-xs">
                {item.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={imageItems.map((item) => ({ src: item.src, alt: item.alt }))}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={activeVideo}
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
