// services/geminiService.js
// Google's Gemini API — primary AI provider. Free tier, no billing setup
// required to start. Get a key at https://aistudio.google.com/app/apikey
//
// Note: Gemini's request format differs from OpenAI's — messages are
// "contents", roles are "user"/"model" (not "assistant"), and text is
// nested in a { parts: [{ text }] } structure.

import fetch from 'node-fetch';
import { GEMINI_API_KEY } from '../config/env.js';

const TIMEOUT_MS = 60000;
const SYSTEM_PROMPT = 'You are a helpful AI assistant.';
const MODEL = 'gemini-3.6-flash';

export async function getGeminiResponse(history, newMessage) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  const contents = [
    ...history.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    })),
    { role: 'user', parts: [{ text: newMessage }] },
  ];

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        }),
        signal: controller.signal,
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();

      console.error("Gemini API response:", errorBody);

      const error = new Error(`Gemini API error: ${response.status}`);
      error.status = response.status === 429 ? 429 : 502;
      throw error;
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (err) {
    if (err.name === 'AbortError') {
      const timeoutErr = new Error('Gemini request timed out');
      timeoutErr.status = 504;
      throw timeoutErr;
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}
