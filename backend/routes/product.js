import express from 'express';
import checkUser from '../middleware/checkUser.js';
import productControllers from '../controllers/product.js';

const {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = productControllers;

const router = express.Router();

// routes
router.get('/products', getAllProducts);
router.get('/products/:id', getProduct);
router.post('/products', checkUser, createProduct);
router.put('/products/:id', checkUser, updateProduct);
router.delete('/products/:id', checkUser, deleteProduct);

export default router;
