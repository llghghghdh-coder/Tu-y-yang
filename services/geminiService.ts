
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available in the environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey });

export async function getAdvice(prompt: string): Promise<string> {
  try {
    const fullPrompt = `As an expert app development consultant, provide clear, concise, and actionable advice on the following topic for someone building their first educational app. Use markdown for formatting, including lists and bold text, to make the advice easy to digest. Topic: ${prompt}`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate advice. Please check your API key and network connection.");
  }
}
