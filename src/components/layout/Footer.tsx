"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import SocialIcon from "@/components/ui/SocialIcon";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Cookie Policy" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-deep-purple/30 border-t border-white/10">
      <div className="max-w-7xl mx-auto section-padding !pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <div className="mb-4">
              <p className="text-2xl font-bold tracking-tight">
                <span className="text-brand-pink font-display italic">DJ</span>{" "}
                <span className="text-white">HEMANTH</span>
              </p>
              <span className="text-brand-pink text-xs font-medium tracking-widest uppercase">
                {siteConfig.djTitle}
              </span>
            </div>
            <p className="text-light-gray/60 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-gold/20 text-light-gray hover:text-gold transition-all"
                aria-label="Instagram"
              >
                <SocialIcon name="instagram" size={20} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-gold/20 text-light-gray hover:text-gold transition-all"
                aria-label="Facebook"
              >
                <SocialIcon name="facebook" size={20} />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-gold/20 text-light-gray hover:text-gold transition-all"
                aria-label="YouTube"
              >
                <SocialIcon name="youtube" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-light-gray/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-light-gray/60 text-sm">
                <Phone size={16} className="text-gold shrink-0" />
                <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-gold transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-light-gray/60 text-sm">
                <Mail size={16} className="text-gold shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-light-gray/60 text-sm">
                <MapPin size={16} className="text-gold shrink-0" />
                {siteConfig.address}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-light-gray/60 text-sm mb-4">
              Get event tips, new mixes, and exclusive offers.
            </p>
            {subscribed ? (
              <p className="text-gold text-sm">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder:text-light-gray/40 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-full bg-gold text-deep-dark hover:bg-gold/90 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <a
            href="https://nm2tech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto flex w-fit flex-col items-center gap-2"
            aria-label="Designed by NM2TECH — visit nm2tech.com"
          >
            <Image
              src="/nm2tech-logo.png"
              alt="NM2TECH logo"
              width={160}
              height={100}
              className="h-16 w-auto opacity-85 transition-opacity group-hover:opacity-100"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-light-gray/50 transition-colors group-hover:text-[#81C043]">
              Designed by NM2TECH
            </span>
            <span className="text-[11px] text-light-gray/40 tracking-[0.18em] uppercase">
              Next Move
            </span>
          </a>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light-gray/40 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-light-gray/40 hover:text-gold text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
