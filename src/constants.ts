import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'monstera-deliciosa-signature',
    name: 'Monstera Deliciosa – Signature Edition',
    category: 'Indoor Signature Plants',
    price: 120,
    description: 'A timeless statement plant, chosen for its sculptural beauty and effortless elegance. Its iconic split leaves bring a lush, tropical feel to any luxury interior.',
    careInstructions: {
      light: 'Bright, indirect sunlight.',
      water: 'Water when the top inch of soil feels dry.',
      humidity: 'Thrives in moderate to high humidity.'
    },
    image: 'https://picsum.photos/seed/monstera/800/1000'
  },
  {
    id: 'fiddle-leaf-fig-premium',
    name: 'Fiddle Leaf Fig – Premium Select',
    category: 'Statement Pieces',
    price: 185,
    description: 'With its majestic, violin-shaped leaves and tall structure, this Fiddle Leaf Fig is the ultimate interior centerpiece.',
    careInstructions: {
      light: 'Filtered bright light.',
      water: 'Consistent watering schedule.',
      humidity: 'Mist regularly for optimal health.'
    },
    image: 'https://picsum.photos/seed/fig/800/1000'
  },
  {
    id: 'thai-constellation-rare',
    name: 'Thai Constellation Monstera',
    category: 'Rare Finds',
    price: 450,
    description: 'A botanical masterpiece. Each leaf is a unique canvas of creamy variegation, resembling a starry night sky.',
    careInstructions: {
      light: 'Strong indirect light to maintain variegation.',
      water: 'Do not overwater.',
      humidity: 'High humidity preferred.'
    },
    image: 'https://picsum.photos/seed/thai/800/1000',
    isRare: true
  },
  {
    id: 'luxury-orchids-arrangement',
    name: 'Imperial White Orchid Arrangement',
    category: 'Gifts & Arrangements',
    price: 140,
    description: 'Pure white blooms presented in a handcrafted ceramic vessel. The epitome of refined beauty and poise.',
    careInstructions: {
      light: 'Medium indirect light.',
      water: 'Ice cube method or light soaking.',
      humidity: 'Average room humidity.'
    },
    image: 'https://picsum.photos/seed/orchid/800/1000'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah M.',
    text: 'Extremely friendly, attentive and professional. You can feel they truly love what they do.'
  },
  {
    id: '2',
    author: 'James L.',
    text: 'The best plant shop in the city. Always attentive and full of new surprises.'
  },
  {
    id: '3',
    author: 'Elena R.',
    text: 'Gardénia transformed my home. The plants are pieces of art, and the service is unparalleled.'
  }
];
