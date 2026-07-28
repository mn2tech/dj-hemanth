import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Bollywood DJ for Weddings & Events`,
  description: siteConfig.description,
  keywords: [
    "Bollywood DJ",
    "Wedding DJ",
    "Sangeet DJ",
    "Punjabi DJ",
    "London DJ",
    "UK Bollywood DJ",
    "Indian wedding DJ",
    "Corporate event DJ",
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL("https://dj-hemanth.com"),
  alternates: {
    canonical: "https://dj-hemanth.com",
  },
  openGraph: {
    title: `${siteConfig.name} | Bollywood DJ for Weddings & Events`,
    description: siteConfig.description,
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
    url: "https://dj-hemanth.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Bollywood DJ`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  url: "https://dj-hemanth.com",
  priceRange: "££",
  image: "https://images.unsplash.com/photo-1470225620780-dba8ba9361cd?w=1200&q=80",
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.youtube,
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "450",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans antialiased bg-deep-dark text-light-gray`}
      >
        {children}
      </body>
    </html>
  );
}
