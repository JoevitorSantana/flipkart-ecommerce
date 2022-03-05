const express = require('express');
const router = express.Router('router');
const { addCategory, getCategory } = require("../../controller/category");
const { adminMiddleware, requireSignIn } = require("../../middlewares");


router.post('/categories/create', requireSignIn, adminMiddleware, addCategory);
router.get('/categories', getCategory);

module.exports = router;