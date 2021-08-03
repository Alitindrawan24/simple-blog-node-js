const express = require('express');
const {
    body,
    validationResult
} = require('express-validator');
const app = express()
const port = 3000;
const router = require('./routes/web')

const model = require('./models/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.engine('ejs', require('express-ejs-extend'));
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use('/', router)

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});