export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "bronze",
    name: "Bronze",
    price: "£499",
    description: "Perfect for intimate gatherings and small celebrations.",
    color: "sapphire",
    features: [
      "Up to 4 hours of DJ service",
      "Professional sound system",
      "Basic lighting setup",
      "Bollywood & Punjabi playlist",
      "Wireless microphone",
      "Pre-event consultation",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    price: "£799",
    description: "Ideal for medium-sized events and birthday parties.",
    color: "sapphire",
    features: [
      "Up to 6 hours of DJ service",
      "Premium sound system",
      "LED dance floor lighting",
      "Custom playlist curation",
      "2 wireless microphones",
      "Song request management",
      "Setup & breakdown included",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: "£1,299",
    description: "Our most popular package for weddings and sangeets.",
    color: "gold",
    popular: true,
    features: [
      "Up to 8 hours of DJ service",
      "Premium PA system with subwoofers",
      "Full LED lighting & effects",
      "Dhol player coordination",
      "Custom ceremony & reception music",
      "Unlimited song requests",
      "Dedicated event coordinator",
      "Backup equipment on-site",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "£2,499",
    description: "The ultimate Bollywood experience for grand celebrations.",
    color: "magenta",
    features: [
      "Full day coverage (12+ hours)",
      "Concert-grade sound system",
      "Intelligent lighting & fog effects",
      "Dhol player & live percussion",
      "Photo booth coordination",
      "Multi-zone audio setup",
      "VIP green room setup",
      "Post-event highlight video edit",
      "Priority booking & 24/7 support",
    ],
  },
];
