
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  tags: string[];
}

export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  role: Role;
  content: string;
  products?: Product[];
  timestamp: Date;
}

export interface ChatMessagePart {
  text: string;
}

export interface GeminiContent {
  role: 'user' | 'model';
  parts: ChatMessagePart[];
}
