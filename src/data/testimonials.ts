export interface Testimonial {
  id: string;
  name: string;
  event: string;
  rating: number;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya & Raj",
    event: "Wedding Reception",
    rating: 5,
    quote:
      "DJ Hemanth made our wedding absolutely magical! The music selection was perfect — from romantic slow songs to high-energy dance tracks. Our guests danced until 2 AM!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    id: "2",
    name: "Amit Sharma",
    event: "Corporate Gala",
    rating: 5,
    quote:
      "Professional, punctual, and incredibly talented. Hemanth understood our corporate event vibe perfectly and kept the energy high without being overwhelming.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    id: "3",
    name: "Sneha Patel",
    event: "Sangeet Night",
    rating: 5,
    quote:
      "The sangeet was the highlight of our wedding week! DJ Hemanth's dhol mixes and Bollywood bangers had three generations dancing together. Absolutely unforgettable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
  {
    id: "4",
    name: "Vikram Singh",
    event: "Birthday Party",
    rating: 5,
    quote:
      "Booked DJ Hemanth for my 30th birthday and it was epic! Great sound system, amazing lighting, and he took requests all night. Highly recommend!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
  },
  {
    id: "5",
    name: "Ananya & Karthik",
    event: "Wedding",
    rating: 5,
    quote:
      "From our first meeting, Hemanth understood exactly what we wanted. The ceremony music was beautiful and the reception was a full-blown Bollywood dance party!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
  },
];
