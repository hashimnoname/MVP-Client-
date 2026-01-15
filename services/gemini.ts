
import { GoogleGenAI } from "@google/genai";
import { GeminiContent } from "../types";

export const getGeminiResponse = async (
  message: string,
  history: GeminiContent[],
  systemInstruction: string
) => {
  // Always use the named parameter for API Key as per coding guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 2048,
      }
    });

    // Extract text output using the .text property (not a method)
    return response.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
