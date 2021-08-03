const express = require('express')
const router = express.Router()

const RegisterController = require('../controllers/RegisterController');
const LoginController = require('../controllers/LoginController');
const IndexController = require('../controllers/IndexController');

router.get('/', IndexController.index);
router.get('/login', LoginController.index);
router.post('/register', RegisterController.store);
router.get('/register', RegisterController.index);

module.exports = router