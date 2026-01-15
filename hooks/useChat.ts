
import { useState, useCallback } from 'react';
import { Message, GeminiContent, Product } from '../types';
import { catalog } from '../data/catalog';
import { getGeminiResponse } from '../services/gemini';

const INITIAL_GREETING = "Your customized chatbot is online. 💠\n\nI am your conversational bridge to the catalog. I don't just search—I interpret your aesthetic and technical requirements in real-time.\n\nAsk me anything:\n• 'I need a minimalist tech setup for a dark office.'\n• 'Compare the Lumina bulb with the Desk Lamp for reading.'\n• 'Show me wellness gear that matches a cyber-aesthetic.'";

const SYSTEM_PROMPT = `You are "Your customized chatbot", an elite AI curator for a high-end product catalog.

CATALOG DATA:
${JSON.stringify(catalog, null, 2)}

OPERATING PROTOCOLS:
1. SEMANTIC MATCHING: Look beyond keywords. If a user asks for a "vibe" (e.g., "cyberpunk", "minimalist", "cozy"), map it to relevant products.
2. IDENTITY: Always refer to yourself as "Your customized chatbot" if asked.
3. SYNTHESIS: When recommending multiple items, explain WHY they fit together.
4. OUTPUT FORMAT: 
   - Use clean Markdown for text.
   - ALWAYS include product IDs for any items mentioned using this exact syntax at the end: [[PRODUCT_IDS: prod-001, prod-002]]
5. CONSTRAINTS:
   - Stay within the catalog boundaries.
   - Be professional, sharp, slightly futuristic, and highly helpful.`;

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: INITIAL_GREETING,
      timestamp: new Date(),
    },
  ]);
  const [history, setHistory] = useState<GeminiContent[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const parseResponse = (text: string): { content: string; products?: Product[] } => {
    const productTagRegex = /\[\[PRODUCT_IDS:\s*(.*?)\]\]/i;
    const match = text.match(productTagRegex);
    
    let cleanContent = text.replace(productTagRegex, '').trim();
    let foundProducts: Product[] = [];

    if (match && match[1]) {
      const ids = match[1]
        .split(/[,\s]+/)
        .map(id => id.trim())
        .filter(id => id.length > 0);
      foundProducts = catalog.filter(p => ids.includes(p.id));
    }

    return { content: cleanContent, products: foundProducts.length > 0 ? foundProducts : undefined };
  };

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const rawResponse = await getGeminiResponse(text, history, SYSTEM_PROMPT);
      const { content, products } = parseResponse(rawResponse);

      const botMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content,
        products,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMsg]);
      setHistory(prev => [
        ...prev,
        { role: 'user', parts: [{ text }] },
        { role: 'model', parts: [{ text: rawResponse }] },
      ]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: "I encountered a synchronization error in the customized chatbot logic. Please re-initiate.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  }, [history]);

  return { messages, isLoading, sendMessage };
}
