import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateMusicInfo(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Suggest a song title, genre, and detailed mood for a track matching this prompt: "${prompt}". Return as JSON with properties: title, genre, mood_description, bpm_suggestion.`,
    config: {
      responseMimeType: "application/json"
    }
  });

  return JSON.parse(response.text);
}

// In a real app, we'd use Lyria for actual audio. 
// For this MVP, we will simulate the audio generation with metadata and 
// use placeholder audio but the prompt experience will be real.
// If the user wants real Lyria audio, I'll need them to provide their own key in a specific flow.
// For now, I'll build the UI to show how it WOULD work.
