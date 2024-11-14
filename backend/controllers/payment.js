import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import dotenv from 'dotenv';
import Stripe from 'stripe';

//construct the path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

//load environment variables
dotenv.config({ path: path.join(PATH, '..', '.env') });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const paymentControllers = {
    makePayment: async (req, res) => {
        const { amount } = req.body;

        try {
            const payment = await stripe.paymentIntents.create({
                amount: amount * 100,
                currency: 'eur'
            });

            res.status(200).json({ client_secret: payment.client_secret });
        } catch (err) {
            res.status(500).json({ message: `Server error: ${err.message}` });
        }
    }
};

export default paymentControllers;
