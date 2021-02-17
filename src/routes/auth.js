const express = require("express");
const AuthService = require('../services/auth');
const router = express.Router();

router.post('/signin', async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const authServiceInstance = new AuthService();

        const { user, token } = await authServiceInstance.signIn({ email, password });

        res.status(200).json({ user, token });
    } catch (err) {
        next(err);
    }
});

router.post('/signup', async (req, res, next) => {
    try {

        const { username, email, password } = req.body;

        const authServiceInstance = new AuthService();

        const userDTO = {
            name: username,
            email: email,
            password: password
        };

        const { user, token } = await authServiceInstance.signUp(userDTO);

        res.status(201).json({ user, token });
    } catch (err) {
        return next(err);
    }
});


module.exports = router;