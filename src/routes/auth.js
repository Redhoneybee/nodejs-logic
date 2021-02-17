const express = require("express");
const AuthService = require('../services/auth');
const router = express.Router();

router.post('/signin', (req, res, next) => {
    const { email, password } = req.body;

    console.log(email, password);
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

        console.log(user);
        console.log(token);

        res.status(201).json({ user, token });
    } catch (err) {
        return next(err);
    }
});


module.exports = router;