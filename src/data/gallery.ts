export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  type: "image" | "video";
  videoUrl?: string;
}

export const galleryCategories = [
  "All",
  "Wedding",
  "Sangeet",
  "Corporate",
  "Birthday",
  "Private Party",
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    alt: "Wedding reception dance floor",
    category: "Wedding",
    type: "image",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba9361cd?w=800&q=80",
    alt: "DJ performance at event",
    category: "Corporate",
    type: "image",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    alt: "Sangeet ceremony celebration",
    category: "Sangeet",
    type: "image",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1533175971605-7254ed20b7cc?w=800&q=80",
    alt: "Birthday party lights",
    category: "Birthday",
    type: "image",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1571266028247-b8ef25b8f247?w=800&q=80",
    alt: "Private party DJ setup",
    category: "Private Party",
    type: "image",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1540039155733-5bbdc3cffd63?w=800&q=80",
    alt: "Wedding dance moment",
    category: "Wedding",
    type: "image",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    alt: "Concert stage lighting",
    category: "Corporate",
    type: "image",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1429962710881-3ea00bf8f228?w=800&q=80",
    alt: "Sangeet dance performance",
    category: "Sangeet",
    type: "image",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80",
    alt: "Festival crowd energy",
    category: "Private Party",
    type: "image",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    alt: "Event highlight video",
    category: "Wedding",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
