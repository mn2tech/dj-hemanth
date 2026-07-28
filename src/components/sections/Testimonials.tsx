"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext]);

  const testimonial = testimonials[current];

  return (
    <AnimatedSection id="testimonials" className="section-padding bg-deep-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Hear from couples and clients who trusted me with their special moments.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.4 }}
              className="card-glass p-8 md:p-12 text-center"
            >
              <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-light-gray/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-light-gray/50 text-sm">{testimonial.event}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="p-2 rounded-full bg-white/5 hover:bg-gold/20 text-white hover:text-gold transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-gold w-8"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="p-2 rounded-full bg-white/5 hover:bg-gold/20 text-white hover:text-gold transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
