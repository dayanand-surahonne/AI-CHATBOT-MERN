// middleware/errorHandler.js
// Fixes the original bug: every error now gets a real HTTP status code
// instead of silently returning 200 with an error message as if it
// were a normal reply.

export function errorHandler(err, req, res, next) {
  console.error(err.stack);

  const status = err.status || 500;
  // Never leak raw upstream error bodies (e.g. OpenAI's raw error JSON)
  // to the client — send a clean, generic message instead.
  const message = status === 500 ? 'Internal server error' : err.message;

  res.status(status).json({ error: message });
}
