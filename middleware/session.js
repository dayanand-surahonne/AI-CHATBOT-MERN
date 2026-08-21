// middleware/session.js
// Assigns each visitor a persistent sessionId via an httpOnly cookie.

import { v4 as uuidv4 } from 'uuid';

export function ensureSession(req, res, next) {
  if (!req.cookies?.sessionId) {
    const sessionId = uuidv4();
    res.cookie('sessionId', sessionId, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      sameSite: 'lax',
    });
    req.sessionId = sessionId;
  } else {
    req.sessionId = req.cookies.sessionId;
  }
  next();
}
