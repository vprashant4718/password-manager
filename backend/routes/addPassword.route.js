import express from 'express';
import { addPass, fetchAllPass } from '../controllers/addPassword.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/addpass/:userId', verifyToken, addPass);
router.get('/fetchAllPassword/:userId', verifyToken, fetchAllPass);

export default router;