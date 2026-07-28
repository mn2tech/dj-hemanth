"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Music2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { musicCategories } from "@/data/music";
import { cn } from "@/lib/utils";

export default function MusicCatalog() {
  const [activeCategory, setActiveCategory] = useState(musicCategories[0].id);
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  const currentCategory = musicCategories.find((c) => c.id === activeCategory)!;

  const togglePlay = (trackTitle: string) => {
    setPlayingTrack(playingTrack === trackTitle ? null : trackTitle);
  };

  return (
    <AnimatedSection id="music" className="section-padding bg-deep-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Music <span className="text-gold">Catalog</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore my extensive library spanning Bollywood classics, Punjabi hits,
            bhangra beats, and regional favorites.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {musicCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-gold text-deep-dark shadow-lg shadow-gold/20"
                  : "bg-white/5 text-light-gray/70 hover:bg-white/10 hover:text-white border border-white/10"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="card-glass p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentCategory.name}
                </h3>
                <p className="text-light-gray/60 text-sm">
                  {currentCategory.description}
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
                <Music2 size={18} className="text-gold" />
                <span className="text-gold font-semibold">
                  {currentCategory.songCount.toLocaleString()} Songs
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {currentCategory.previewTracks.map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl transition-all duration-300",
                    playingTrack === track.title
                      ? "bg-gold/10 border border-gold/30"
                      : "bg-white/5 border border-white/5 hover:bg-white/10"
                  )}
                >
                  <button
                    onClick={() => togglePlay(track.title)}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                      playingTrack === track.title
                        ? "bg-gold text-deep-dark"
                        : "bg-white/10 text-white hover:bg-gold hover:text-deep-dark"
                    )}
                    aria-label={playingTrack === track.title ? "Pause" : "Play"}
                  >
                    {playingTrack === track.title ? (
                      <Pause size={18} />
                    ) : (
                      <Play size={18} className="ml-0.5" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">{track.title}</p>
                    <p className="text-light-gray/50 text-sm">{track.artist}</p>
                  </div>
                  <span className="text-light-gray/40 text-sm">{track.duration}</span>
                </motion.div>
              ))}
            </div>

            {playingTrack && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 p-4 rounded-xl bg-deep-purple/50 border border-gold/20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-gold rounded-full"
                        animate={{ height: [8, 20, 8] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-light-gray/70 text-sm">
                    Now previewing: <span className="text-gold">{playingTrack}</span>
                    — Full tracks available at your event!
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
