const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.post('/register', async (req, res) => {

    const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);
    
    // create user model
    const user = {
        fullName: req.body.full_name,
        email: req.body.email,
        password:hashPassword
    };
    // validate user model
    const validationResult = body(user);
    if (validationResult.error) {
        res.render('register.ejs', {
            error: validationResult.error
        });
    } else {
        // create user
        try {
            const users = await model.User.create(user);
            if (users) {
                res.status(201).json({
                    'status': 'OK',
                    'messages': 'User berhasil ditambahkan',
                    'data': users,
                })
            }
        } catch (err) {
            res.status(400).json({
                'status': 'ERROR',
                'messages': err.message,
                'data': {},
            })
        }
    }
});
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

module.exports = router