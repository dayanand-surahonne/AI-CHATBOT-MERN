// server.js
// Entry point. Serves the built React app from client/dist and exposes
// the /chat API with session tracking, rate limiting, and MongoDB-backed
// conversation persistence.

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import './config/env.js'; // validates required env vars on boot — fixes original silent-failure bug
import { PORT } from './config/env.js';
import { connectDB } from './config/db.js';
import chatRoutes from './routes/chatRoutes.js';
import { chatLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/errorHandler.js';
import { ensureSession } from './middleware/session.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));

const clientDist = path.join(__dirname, 'client', 'dist');
app.use(express.static(clientDist));

app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));

app.use('/chat', ensureSession, chatLimiter, chatRoutes);

// Client-side routing fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

// Must be registered last — catches every error passed via next(err)
app.use(errorHandler);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

export default app;
