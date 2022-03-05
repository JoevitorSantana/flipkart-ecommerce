const express = require('express');
const { signupAdmin, signinAdmin } = require('../../controller/admin/auth.js');
const { signup, signin, requireSignIn } = require('../../controller/auth.js');
const router = express.Router('router');
const User = require('../../models/user.js');
const { validateSignInRequest, isRequestValidated, validateSignUpRequest } = require('../../validators/auth.js');

router.post('/admin/signin', validateSignInRequest, isRequestValidated, signinAdmin)

router.post('/admin/signup', validateSignUpRequest, isRequestValidated, signupAdmin);


module.exports = router;