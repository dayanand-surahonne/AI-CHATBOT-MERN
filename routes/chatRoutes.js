// routes/chatRoutes.js

import express from 'express';
import { handleChat, getHistory } from '../controllers/chatController.js';
import { validateChat } from '../validators/chatValidator.js';

const router = express.Router();

router.post('/', validateChat, handleChat);
router.get('/history', getHistory);

export default router;
