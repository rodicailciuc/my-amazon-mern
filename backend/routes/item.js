import express from 'express';

import itemControllers from '../controllers/item.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

const {
    getAllItems,
    getItem,
    getUserItems,
    createItem,
    updateItem,
    deleteItem
} = itemControllers;

// routes
router.get('/items/:id', verifyToken, getAllItems);
router.get('/items/:id', verifyToken, getItem);
router.get('/items/user/:id', verifyToken, getUserItems);
router.post('/items', verifyToken, createItem);
router.put('/items/:id', verifyToken, updateItem);
router.delete('/items/:id', verifyToken, deleteItem);

export default router;
