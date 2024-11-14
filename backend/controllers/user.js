import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/user.js';

import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import matchPasswords from '../utils/matchPasswords.js';
import hashPassword from '../utils/hashPassword.js';
import validateUsername from '../utils/validateUsername.js';

const userControllers = {
    register: async (req, res) => {
        const { username, email, password, rePassword } = req.body;
        try {
            const userExist = await User.findOne({ email: email });
            if (userExist) {
                return res.status(400).json({
                    message: 'User already exists, please login!'
                });
            }

            const isValidEmail = validateEmail(email);
            const isValidPassword = validatePassword(password);
            const passwordsMatch = matchPasswords(password, rePassword);
            const isValidUsername = validateUsername(username);

            if (
                isValidEmail &&
                isValidPassword &&
                passwordsMatch &&
                isValidUsername
            ) {
                const hashedPassword = hashPassword(password);

                const newUser = new User({
                    username,
                    email,
                    password: hashedPassword
                });
                await newUser.save();
                res.status(201).json({
                    message: 'User created',
                    user: newUser
                });
            } else {
                return res
                    .status(400)
                    .json({
                        message:
                            'Invalid email, username or password, rePassword.'
                    });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: err.message });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const userExist = await User.findOne({ email: email });
            if (!userExist) {
                return res.status(400).json({ message: 'User does not exist' });
            }

            // compare passwords
            bcrypt.compare(password, userExist.password, (err, isValid) => {
                if (err) {
                    console.error(err);
                    return res
                        .status(500)
                        .json({ message: 'Invalid email or password.' });
                }

                if (isValid) {
                    const token = jwt.sign(
                        { user: userExist },
                        process.env.TOKEN_SECRET
                    );

                    // create cookie
                    res.cookie('token', token, { httpOnly: true });

                    res.status(200).json({
                        id: userExist._id,
                        username: userExist.username,
                        message: 'User logged in successfully!'
                    });
                } else {
                    return res
                        .status(400)
                        .json({ message: 'Invalid email or password.' });
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: err.message });
        }
    },
    checkAdmin: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findOne({ _id: id });
            if (!user) {
                return res.status(400).json({ message: 'User not found!' });
            }

            if (user.role === 'admin') {
                res.status(200).json({
                    message: 'User is admin!',
                    isAdmin: true
                });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    },
    getUser: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findOne({ _id: id });
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found!' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    },
    logout: async (req, res) => {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successfully' });
    }
};

export default userControllers;
