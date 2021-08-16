const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// home route
router.get('/', userController.home);

// register route
router.post('/register', userController.register);

// login route
router.post('/login', userController.login);

// logout route
router.post('/logout', userController.logout);
module.exports = router;
