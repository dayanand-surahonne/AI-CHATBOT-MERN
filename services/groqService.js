// services/groqService.js
// Same shape as openaiService.js — Groq's API is OpenAI-compatible.
// Used as a fallback when OpenAI is rate-limited.

import fetch from 'node-fetch';
import { GROQ_API_KEY } from '../config/env.js';

const TIMEOUT_MS = 15000;
const SYSTEM_PROMPT = 'You are a helpful AI assistant.';

export async function getGroqResponse(history, newMessage) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...history.map((m) => ({ role: m.role, content: m.content })),
          { role: 'user', content: newMessage },
        ],
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const error = new Error(`Groq API error: ${response.status}`);
      error.status = response.status === 429 ? 429 : 502;
      throw error;
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (err) {
    if (err.name === 'AbortError') {
      const timeoutErr = new Error('Groq request timed out');
      timeoutErr.status = 504;
      throw timeoutErr;
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}
