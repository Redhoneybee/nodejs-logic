const express = require("express");

const router = express.Router();

router.post('/signin', (req, res, next) => {
    const { email, password } = req.body;

    console.log(email, password);
});

router.post('/signup', (req, res, next) => {
    const { username, email, password } = req.body;

    console.log(username, email, password);
});


module.exports = router;