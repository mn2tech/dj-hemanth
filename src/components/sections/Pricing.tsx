"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { pricingPackages } from "@/data/pricing";
import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  sapphire: "border-sapphire/30",
  gold: "border-gold/50 shadow-gold/10",
  magenta: "border-magenta/30",
};

export default function Pricing() {
  return (
    <AnimatedSection id="pricing" className="section-padding bg-deep-purple/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Packages & <span className="text-gold">Pricing</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Transparent pricing with packages designed for every celebration size.
            All packages include a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative card-glass p-6 flex flex-col",
                pkg.popular && "ring-2 ring-gold shadow-xl shadow-gold/10 scale-[1.02]",
                colorMap[pkg.color]
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-deep-dark text-xs font-bold flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{pkg.name}</h3>
                <p className="text-light-gray/50 text-sm mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-gold">
                    {pkg.price}
                  </span>
                  <span className="text-light-gray/50 text-sm">/ event</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className="text-gold shrink-0 mt-0.5"
                    />
                    <span className="text-light-gray/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "w-full text-center py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105",
                  pkg.popular
                    ? "bg-gold text-deep-dark hover:bg-gold/90 shadow-lg shadow-gold/20"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-gold/30"
                )}
              >
                Get Quote
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-light-gray/50 text-sm mt-8">
          All prices are starting rates. Final pricing depends on event duration,
          location, and specific requirements. Contact for a custom quote.
        </p>
      </div>
    </AnimatedSection>
  );
}
