import express from 'express';
import { createRoom } from '../controller/chatLeechi';

const router = express.Router();

router.post('/room', createRoom);

export default router;