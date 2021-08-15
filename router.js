const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// home route
router.get('/', userController.home);

// register route
router.post('/register', userController.register);

module.exports = router;
