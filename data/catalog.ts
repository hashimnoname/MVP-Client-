
import { Product } from '../types';

export const catalog: Product[] = [
  {
    id: "prod-001",
    name: "Lumina Smart Bulb X1",
    category: "Smart Home",
    price: 24.99,
    description: "Multi-color Wi-Fi smart bulb with voice control compatibility.",
    features: ["16 million colors", "Dimmable", "Voice Control"],
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=400",
    tags: ["lighting", "iot", "smart"]
  },
  {
    id: "prod-002",
    name: "SoundScape Pro Headphones",
    category: "Electronics",
    price: 199.99,
    description: "Industry-leading noise cancelling wireless headphones with 40h battery.",
    features: ["Active Noise Cancelling", "40hr Battery", "Hi-Res Audio"],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    tags: ["audio", "wireless", "music"]
  },
  {
    id: "prod-003",
    name: "Eco-Friendly Yoga Mat",
    category: "Fitness",
    price: 45.00,
    description: "Non-toxic, biodegradable natural rubber mat for premium grip.",
    features: ["Non-slip", "Extra cushion", "Biodegradable"],
    image: "https://images.unsplash.com/photo-1592432676556-26d2d9ad6374?auto=format&fit=crop&q=80&w=400",
    tags: ["wellness", "fitness", "eco"]
  },
  {
    id: "prod-004",
    name: "Titanium Travel Mug",
    category: "Outdoor",
    price: 35.50,
    description: "Ultralight titanium mug for camping and commuting.",
    features: ["BPA Free", "Insulated", "Ultralight"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
    tags: ["camping", "travel", "coffee"]
  },
  {
    id: "prod-005",
    name: "Nebula Projector M2",
    category: "Electronics",
    price: 499.00,
    description: "Compact 4K smart projector with built-in speakers.",
    features: ["4K Resolution", "Smart OS", "Portable"],
    image: "https://images.unsplash.com/photo-1535016120720-40c646bebbdc?auto=format&fit=crop&q=80&w=400",
    tags: ["home-theater", "tech", "entertainment"]
  },
  {
    id: "prod-006",
    name: "Minimalist Desk Lamp",
    category: "Smart Home",
    price: 89.00,
    description: "Sleek aluminum lamp with adjustable color temperature for focused work.",
    features: ["Touch Control", "3000K-6000K", "USB Charging"],
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=400",
    tags: ["office", "lighting", "minimalist"]
  },
  {
    id: "prod-007",
    name: "Hydro-Pulse Smart Bottle",
    category: "Fitness",
    price: 59.99,
    description: "Insulated water bottle that tracks intake and glows to remind you to hydrate.",
    features: ["Bluetooth Sync", "Glow Reminders", "24h Cold"],
    image: "https://images.unsplash.com/photo-1523362628744-0c14a3773251?auto=format&fit=crop&q=80&w=400",
    tags: ["fitness", "tech", "wellness"]
  }
];
