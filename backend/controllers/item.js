import mongoose from 'mongoose';
import Item from '../models/item.js';

const itemControllers = {
    getAllItems: async (req, res) => {
        try {
            const items = await Item.find();
            res.status(200).json(items);
        } catch (err) {
            res.status(500).json({ message: `Server error: ${err.message}` });
        }
    },
    getItem: async (req, res) => {
        const { id } = req.params;
        try {
            const item = await Item.findOne({ _id: id });
            if (item) {
                res.status(200).json(item);
            } else {
                res.status(404).json({ message: 'Item not found!' });
            }
        } catch (err) {
            res.status(500).json({ message: `Server error: ${err.message}` });
        }
    },
    getUserItems: async (req, res) => {
        const { id } = req.params;
        try {
            const userItems = await Item.find({ user_id: id });
            res.status(200).json(userItems);
        } catch (err) {
            res.status(500).json({ message: `Server error: ${err.message}` });
        }
    },
    createItem: async (req, res) => {
        const {
            title,
            description,
            category,
            quantity,
            image,
            price,
            user_id
        } = req.body;
        try {
            if (
                title &&
                description &&
                category &&             
                quantity &&
                image &&
                price &&
                user_id
            ) {
                const newItem = new Item({
                    title,
                    description,
                    category,         
                    quantity,
                    image,
                    price,
                    user_id
                });
                await newItem.save();
                res.status(201).json(newItem);
            } else {
                res.status(400).json({ message: 'All fields are required' });
            }
        } catch (err) {
            res.status(500).json({ message: `Server error: ${err.message}` });
        }
    },
    updateItem: async (req, res) => {
        const { title, description, category, price, quantity, image } =
            req.body;
        const { id } = req.params;
        try {
            if (
                title &&
                description &&
                category &&
                price &&
                quantity &&
                image
            ) {
                const updatedItem = await Item.updateOne(
                    { _id: id },
                    { title, description, category, price, quantity, image }
                );
                if (updatedItem.modifiedCount > 0) {
                    res.status(200).json({
                        message: 'Item updated successfully'
                    });
                } else {
                    res.status(400).json({ message: 'Item not found' });
                }
            } else {
                res.status(400).json({ message: 'All fields are required' });
            }
        } catch (err) {
            res.status(500).json({ message: `Server error: ${err.message}` });
        }
    },
    deleteItem: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedItem = await Item.deleteOne({ _id: id });

            if (deletedItem.deletedCount > 0) {
                res.status(200).json({ message: 'Item deleted successfully' });
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        } catch (err) {
            res.status(500).json({ message: `Server error: ${err.message}` });
        }
    }
};

export default itemControllers;
