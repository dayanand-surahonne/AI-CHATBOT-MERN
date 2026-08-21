// models/Conversation.js

import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  role: { type: String, enum: ['user', 'assistant'], required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const conversationSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, index: true, unique: true },
  messages: [messageSchema],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Conversation', conversationSchema);
