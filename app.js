const express = require('express');
const {
    body,
    validationResult
} = require('express-validator');
const app = express()
const port = 3000;

const model = require('./models/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.engine('ejs', require('express-ejs-extend'));
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/login', (req, res) => {
    res.render('login.ejs');
});
app.post('/register', async (req, res) => {

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
app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});