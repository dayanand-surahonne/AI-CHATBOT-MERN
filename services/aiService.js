// services/aiService.js
// Gemini is the primary provider (free tier). OpenAI and Groq are both
// optional fallbacks, used only if their keys are configured AND Gemini
// fails or is rate-limited.

import { getGeminiResponse } from './geminiService.js';
import { getOpenAIResponse } from './openaiService.js';
import { getGroqResponse } from './groqService.js';
import { OPENAI_API_KEY, GROQ_API_KEY } from '../config/env.js';

export async function getAIResponse(history, newMessage) {
  try {
    const reply = await getGeminiResponse(history, newMessage);
    return { reply, provider: 'gemini' };
  } catch (err) {
    console.warn(`Gemini failed (${err.status || 'unknown'}) — trying fallback`);

    if (OPENAI_API_KEY) {
      try {
        const reply = await getOpenAIResponse(history, newMessage);
        return { reply, provider: 'openai' };
      } catch (openaiErr) {
        console.warn(`OpenAI fallback also failed (${openaiErr.status || 'unknown'})`);
      }
    }

    if (GROQ_API_KEY) {
      try {
        const reply = await getGroqResponse(history, newMessage);
        return { reply, provider: 'groq' };
      } catch (groqErr) {
        console.warn(`Groq fallback also failed (${groqErr.status || 'unknown'})`);
      }
    }

    throw err;
  }
}
