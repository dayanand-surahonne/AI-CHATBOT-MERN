// controllers/chatController.js
// Fixes from the original code review:
// - Loads real conversation history from MongoDB and passes it to the AI
//   (this is the actual "multi-turn memory" fix — not just storage)
// - Only sends the last 10 messages as context, to keep token usage and
//   cost bounded as conversations grow long
// - Errors are forwarded via next(err) to the centralized handler,
//   fixing the original "errors return HTTP 200" bug

import Conversation from '../models/Conversation.js';
import { getAIResponse } from '../services/aiService.js';

const MAX_HISTORY_MESSAGES = 10;

export async function handleChat(req, res, next) {
  try {
    const { message } = req.body;
    const { sessionId } = req;

    let convo = await Conversation.findOne({ sessionId });
    if (!convo) {
      convo = new Conversation({ sessionId, messages: [] });
    }

    // Trim to the most recent N messages before sending as context —
    // keeps every reply grounded without the token cost growing unbounded.
    const recentHistory = convo.messages.slice(-MAX_HISTORY_MESSAGES);

    const { reply, provider } = await getAIResponse(recentHistory, message);

    convo.messages.push({ role: 'user', content: message });
    convo.messages.push({ role: 'assistant', content: reply });
    await convo.save();

    res.json({ reply, provider, history: convo.messages });
  } catch (err) {
    next(err);
  }
}

export async function getHistory(req, res, next) {
  try {
    const convo = await Conversation.findOne({ sessionId: req.sessionId });
    res.json({ messages: convo?.messages || [] });
  } catch (err) {
    next(err);
  }
}
