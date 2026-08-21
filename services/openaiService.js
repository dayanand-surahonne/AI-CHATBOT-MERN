// services/openaiService.js
// Two fixes from the original code review:
// 1. AbortController timeout — a hung OpenAI request no longer hangs forever.
// 2. Accepts conversation history — the model now actually sees prior
//    turns, instead of only ever seeing the latest message.

import fetch from 'node-fetch';
import { OPENAI_API_KEY } from '../config/env.js';

const TIMEOUT_MS = 15000;
const SYSTEM_PROMPT = 'You are a helpful AI assistant.';

/**
 * @param {Array<{role: string, content: string}>} history - prior turns, oldest first
 * @param {string} newMessage - the latest user message
 */
export async function getOpenAIResponse(history, newMessage) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...history.map((m) => ({ role: m.role, content: m.content })),
          { role: 'user', content: newMessage },
        ],
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const error = new Error(`OpenAI API error: ${response.status}`);
      error.status = response.status === 429 ? 429 : 502;
      throw error;
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (err) {
    if (err.name === 'AbortError') {
      const timeoutErr = new Error('OpenAI request timed out');
      timeoutErr.status = 504;
      throw timeoutErr;
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}
