const express = require('express');
const { signup, signin, requireSignIn } = require('../controller/auth.js');
const router = express.Router('router');
const User = require('../models/user.js');
const { validateSignInRequest, isRequestValidated, validateSignUpRequest } = require('../validators/auth.js');

router.post('/signin', validateSignInRequest, isRequestValidated, signin);

router.post('/signup', validateSignUpRequest, isRequestValidated, signup);

router.get('/profile', requireSignIn, (req, res) => {
    res.status(200).json({ user: 'profile'})
})

module.exports = router;