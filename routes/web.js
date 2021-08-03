const express = require('express')
const router = express.Router()
const RegisterController = require('../controllers/RegisterController');

router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.post('/register', RegisterController.store);
router.get('/register', RegisterController.index);

module.exports = router