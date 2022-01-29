const express = require('express');
const { signupAdmin, signinAdmin } = require('../../controller/admin/auth.js');
const { signup, signin, requireSignIn } = require('../../controller/auth.js');
const router = express.Router('router');
const User = require('../../models/user.js');

router.post('/admin/signin', signinAdmin)

router.post('/admin/signup', signupAdmin);

router.get('/profile', requireSignIn, (req, res) => {
    res.status(200).json({ user: 'profile'})
})

module.exports = router;