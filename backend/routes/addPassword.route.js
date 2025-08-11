import express from 'express';
import { addPass, fetchAllPass, deleteSavedPass } from '../controllers/addPassword.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/addpass/:userId', verifyToken, addPass);
router.get('/fetchAllPassword/:userId', verifyToken, fetchAllPass);
router.delete('/delete/:userId/:passId', verifyToken, deleteSavedPass);

export default router;