"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SocialIcon from "@/components/ui/SocialIcon";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: string;
  message: string;
}

const eventTypes = [
  "Wedding",
  "Sangeet",
  "Birthday Party",
  "Corporate Event",
  "Private Party",
  "Other",
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm",
    "placeholder:text-light-gray/40 focus:outline-none focus:border-gold/50 transition-colors"
  );

  return (
    <AnimatedSection id="contact" className="section-padding bg-deep-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Book Your <span className="text-gold">Event</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to make your celebration unforgettable? Fill out the form below
            or reach out directly — I&apos;d love to hear about your event.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="card-glass p-6 space-y-6">
              <h3 className="text-white font-semibold text-lg">Contact Info</h3>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-light-gray/50 text-sm">Phone</p>
                  <p className="text-white group-hover:text-gold transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-light-gray/50 text-sm">Email</p>
                  <p className="text-white group-hover:text-gold transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gold/10">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-light-gray/50 text-sm">Service Area</p>
                  <p className="text-white">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            <div className="card-glass p-6">
              <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-magenta/20 text-light-gray hover:text-magenta transition-all"
                  aria-label="Instagram"
                >
                  <SocialIcon name="instagram" size={22} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-sapphire/20 text-light-gray hover:text-sapphire transition-all"
                  aria-label="Facebook"
                >
                  <SocialIcon name="facebook" size={22} />
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-green-500/20 text-light-gray hover:text-green-400 transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={22} />
                </a>
              </div>
            </div>

            <div className="card-glass overflow-hidden rounded-2xl">
              <iframe
                title="Service area map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.8398159574!2d-0.2416796!3d51.5287718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-48 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="card-glass p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} className="text-gold" />
                <h3 className="text-white font-semibold text-lg">Booking Inquiry</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className={cn(inputClass, errors.name && "border-coral")}
                  />
                  {errors.name && (
                    <p className="text-coral text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Email Address"
                    className={cn(inputClass, errors.email && "border-coral")}
                  />
                  {errors.email && (
                    <p className="text-coral text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("phone", { required: "Phone is required" })}
                    type="tel"
                    placeholder="Phone Number"
                    className={cn(inputClass, errors.phone && "border-coral")}
                  />
                  {errors.phone && (
                    <p className="text-coral text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <select
                    {...register("eventType", { required: "Event type is required" })}
                    className={cn(inputClass, errors.eventType && "border-coral")}
                    defaultValue=""
                  >
                    <option value="" disabled>Event Type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-deep-dark">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <p className="text-coral text-xs mt-1">{errors.eventType.message}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("eventDate", { required: "Event date is required" })}
                    type="date"
                    className={cn(inputClass, errors.eventDate && "border-coral")}
                  />
                  {errors.eventDate && (
                    <p className="text-coral text-xs mt-1">{errors.eventDate.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("guestCount", { required: "Guest count is required" })}
                    type="number"
                    min="1"
                    placeholder="Expected Guest Count"
                    className={cn(inputClass, errors.guestCount && "border-coral")}
                  />
                  {errors.guestCount && (
                    <p className="text-coral text-xs mt-1">{errors.guestCount.message}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  {...register("location", { required: "Location is required" })}
                  placeholder="Event Location"
                  className={cn(inputClass, errors.location && "border-coral")}
                />
                {errors.location && (
                  <p className="text-coral text-xs mt-1">{errors.location.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  placeholder="Special requests, song preferences, or any questions..."
                  rows={4}
                  className={cn(inputClass, "resize-none")}
                />
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                >
                  <CheckCircle size={18} />
                  Thank you! Your inquiry has been received. I&apos;ll get back to you within 24 hours.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-coral/10 border border-coral/30 text-coral text-sm"
                >
                  <AlertCircle size={18} />
                  Something went wrong. Please try again or contact me directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
