const express = require('express');
const { signup, signin } = require('../controller/auth.js');
const router = express.Router('router');
const { validateSignInRequest, isRequestValidated, validateSignUpRequest } = require('../validators/auth.js');

router.post('/signin', validateSignInRequest, isRequestValidated, signin);

router.post('/signup', validateSignUpRequest, isRequestValidated, signup);


module.exports = router;