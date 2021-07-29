const express = require('express');
const app = express()
const port = 3000;

app.engine('ejs', require('express-ejs-extend'));
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/login', (req, res) => {
    res.render('login.ejs');
});
app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});