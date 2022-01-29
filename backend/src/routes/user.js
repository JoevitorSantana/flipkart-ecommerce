const express = require('express');
const { signup, signin, requireSignIn } = require('../controller/auth.js');
const router = express.Router('router');
const User = require('../models/user.js');

router.post('/signin', signin)

router.post('/signup', signup);

router.get('/profile', requireSignIn, (req, res) => {
    res.status(200).json({ user: 'profile'})
})

module.exports = router;