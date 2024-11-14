import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import paymentControllers from '../controllers/payment.js';

const router = express.Router();

const { makePayment } = paymentControllers;

// routes
router.post('/payment', verifyToken, makePayment);

export default router;
