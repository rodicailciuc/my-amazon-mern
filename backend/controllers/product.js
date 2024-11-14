import Product from '../models/product.js';

const productControllers = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    },
    getProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const product = await Product.findOne({ _id: id });
            if (product) {
                res.status(200).json(product);
            } else {
                return res.status(404).json({ message: 'Product not found' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    },
    createProduct: async (req, res) => {
        const { title, description, category, price, image } = req.body;
        try {
            if (title && description && category && price && image) {
                const newProduct = await Product({
                    title,
                    description,
                    category,
                    price,
                    image
                });

                await newProduct.save();
                res.status(201).json(newProduct);
            } else {
                res.status(400).json({ message: 'All fields are required!' });
            }
        } catch (err) {
            console.error(err);
            res.status(400).json({ message: err.message });
        }
    },
    updateProduct: async (req, res) => {
        const { id } = req.params;
        const { title, description, category, price, image } = req.body;
        try {
            if (title && description && category && price && image) {
                const updatedProduct = await Product.updateOne(
                    { _id: id },
                    { title, description, category, price, image }
                );
                if (updatedProduct.modifiedCount === 0) {
                    res.status(404).json({
                        message: 'Product not found'
                    });
                } else {
                    res.status(200).json({
                        message: 'Product updated successfully',
                        updatedProduct
                    });
                }
            } else {
                res.status(400).json({ message: 'All fields are required!' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    },
    deleteProduct: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedProduct = await Product.deleteOne({ _id: id });

            if (deletedProduct.deletedCount === 0) {
                res.status(404).json({ message: 'Product not found' });
            } else {
                res.status(200).json({
                    message: 'Product deleted successfully'
                });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    }
};

export default productControllers;
