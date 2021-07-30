const express = require('express');
const app = express()
const port = 3000;

app.engine('ejs', require('express-ejs-extend'));
app.use(express.static('public'))
var bodyParser = require('body-parser')

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/login', (req, res) => {
    res.render('login.ejs');
});
app.post('/register', (req, res) => {
    console.log(req.body);
});
app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});