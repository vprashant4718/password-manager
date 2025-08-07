import express from 'express';
import { addPass } from '../controllers/addPassword.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/addpass/:userId', verifyToken, addPass);

export default router;