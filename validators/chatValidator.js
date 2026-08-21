// validators/chatValidator.js
// Fixes the original weak check (`if (!userMessage)`), which let through
// whitespace-only strings, oversized messages, and non-string types.

import { z } from 'zod';

export const chatSchema = z.object({
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(1, 'Message cannot be empty')
    .max(1000, 'Message must be under 1000 characters'),
});

export function validateChat(req, res, next) {
  const result = chatSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: 'Invalid request',
      details: result.error.issues.map((i) => i.message),
    });
  }

  req.body = result.data;
  next();
}
