const model = require('../models/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
    body,
    validationResult
} = require('express-validator');

const RegisterController = {
    index(req, res) {
        res.render('register.ejs');
    },
    store(req, res) {
        const hashPassword = bcrypt.hashSync(req.body.password, saltRounds);

        // create user model
        const user = {
            fullName: req.body.full_name,
            email: req.body.email,
            password: hashPassword
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
                const users = model.User.create(user);
                if (users) {
                    res.status(201).json({
                        'status': 'OK',
                        'messages': 'User berhasil ditambahkan',
                    })
                }
            } catch (err) {
                res.status(400).json({
                    'status': 'ERROR',
                    'messages': err.message,
                })
            }
        }
    }
}

module.exports = RegisterController;