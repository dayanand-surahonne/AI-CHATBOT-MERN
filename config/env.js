// config/env.js
// Fails fast on boot if required environment variables are missing.
// GEMINI_API_KEY is the primary provider (free tier). OPENAI_API_KEY and
// GROQ_API_KEY are optional — configure either to enable automatic
// fallback if Gemini fails or hits its rate limit.

const required = ['GEMINI_API_KEY', 'MONGODB_URI'];

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

if (!process.env.OPENAI_API_KEY && !process.env.GROQ_API_KEY) {
  console.warn('No fallback AI provider configured — if Gemini fails, requests will error out.');
}

export const PORT = process.env.PORT || 3000;
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || null;
export const GROQ_API_KEY = process.env.GROQ_API_KEY || null;
export const MONGODB_URI = process.env.MONGODB_URI;
