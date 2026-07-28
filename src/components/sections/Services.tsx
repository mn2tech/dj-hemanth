"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  magenta: "group-hover:border-magenta/50 group-hover:shadow-magenta/10",
  coral: "group-hover:border-coral/50 group-hover:shadow-coral/10",
  sapphire: "group-hover:border-sapphire/50 group-hover:shadow-sapphire/10",
  gold: "group-hover:border-gold/50 group-hover:shadow-gold/10",
};

const iconColorMap: Record<string, string> = {
  magenta: "text-magenta bg-magenta/10",
  coral: "text-coral bg-coral/10",
  sapphire: "text-sapphire bg-sapphire/10",
  gold: "text-gold bg-gold/10",
};

export default function Services() {
  return (
    <AnimatedSection id="services" className="section-padding bg-deep-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Services <span className="text-gold">We Offer</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tailored DJ experiences for every type of celebration, backed by
            years of Bollywood expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group card-glass p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                  colorMap[service.color]
                )}
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                    iconColorMap[service.color]
                  )}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-light-gray/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
