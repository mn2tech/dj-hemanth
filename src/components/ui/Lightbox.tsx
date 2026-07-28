"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({
  images,
  initialIndex,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length, onClose]);

  const goPrev = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-gold transition-colors"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        className="absolute left-4 z-10 p-2 text-white/80 hover:text-gold transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={40} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl h-[70vh] mx-16"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        className="absolute right-4 z-10 p-2 text-white/80 hover:text-gold transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={40} />
      </button>

      <div className="absolute bottom-6 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}
