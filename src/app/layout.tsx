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
    "US DJ",
    "US Bollywood DJ",
    "Indian wedding DJ",
    "Corporate event DJ",
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL("https://dj-hemanth.com"),
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: `${siteConfig.name} | Bollywood DJ for Weddings & Events`,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: siteConfig.siteUrl,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1536,
        height: 1024,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Bollywood DJ`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
  telephone: siteConfig.phoneTel,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "United States",
    addressCountry: "US",
  },
  url: siteConfig.siteUrl,
  priceRange: "$$",
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
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
