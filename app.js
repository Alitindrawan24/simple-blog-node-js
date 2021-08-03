const express = require('express');
const app = express()
const port = 3000;
const router = require('./routes/web')

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