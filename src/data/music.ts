export interface MusicCategory {
  id: string;
  name: string;
  songCount: number;
  description: string;
  previewTracks: {
    title: string;
    artist: string;
    duration: string;
  }[];
}

export const musicCategories: MusicCategory[] = [
  {
    id: "classics",
    name: "Bollywood Classics",
    songCount: 850,
    description: "Timeless hits from the golden era of Bollywood cinema.",
    previewTracks: [
      { title: "Tum Hi Ho", artist: "Arijit Singh", duration: "4:22" },
      { title: "Kal Ho Naa Ho", artist: "Sonu Nigam", duration: "5:21" },
      { title: "Tujhe Dekha To", artist: "Lata Mangeshkar", duration: "4:45" },
    ],
  },
  {
    id: "latest",
    name: "Bollywood Latest",
    songCount: 620,
    description: "Chart-topping tracks and fresh releases from today's Bollywood.",
    previewTracks: [
      { title: "Kesariya", artist: "Arijit Singh", duration: "4:28" },
      { title: "Shayad", artist: "Arijit Singh", duration: "4:07" },
      { title: "Apna Bana Le", artist: "Arijit Singh", duration: "4:22" },
    ],
  },
  {
    id: "punjabi",
    name: "Punjabi",
    songCount: 480,
    description: "High-energy Punjabi bangers for the dance floor.",
    previewTracks: [
      { title: "Mundian To Bach Ke", artist: "Panjabi MC", duration: "3:45" },
      { title: "Lamberghini", artist: "The Doorbeen", duration: "3:12" },
      { title: "Proper Patola", artist: "Badshah", duration: "3:28" },
    ],
  },
  {
    id: "bhangra",
    name: "Bhangra",
    songCount: 340,
    description: "Traditional and modern bhangra beats with dhol energy.",
    previewTracks: [
      { title: "Balle Balle", artist: "Daler Mehndi", duration: "4:15" },
      { title: "Tunak Tunak", artist: "Daler Mehndi", duration: "4:32" },
      { title: "Bhangra Paao", artist: "Malkit Singh", duration: "3:58" },
    ],
  },
  {
    id: "fusion",
    name: "Fusion",
    songCount: 280,
    description: "Bollywood-Western fusion and remixes for unique vibes.",
    previewTracks: [
      { title: "Jai Ho", artist: "A.R. Rahman", duration: "5:09" },
      { title: "Chaiyya Chaiyya Remix", artist: "Sukhbir", duration: "4:18" },
      { title: "Jugni Ji", artist: "Kanika Kapoor", duration: "3:42" },
    ],
  },
  {
    id: "regional",
    name: "Regional",
    songCount: 420,
    description: "Tamil, Telugu, Gujarati, and other regional favorites.",
    previewTracks: [
      { title: "Vaathi Coming", artist: "Anirudh", duration: "3:35" },
      { title: "Naatu Naatu", artist: "Kaala Bhairava", duration: "3:36" },
      { title: "Ghoomar", artist: "Shreya Ghoshal", duration: "4:12" },
    ],
  },
];
