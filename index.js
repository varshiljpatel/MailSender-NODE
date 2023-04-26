require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nodemailer = require('nodemailer');
const ms = require('./controllers/ms')

const app = express();
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    try {
        res.render('index.html')
    } catch (err) {
        console.log(err.message);
        next()
    }
})

app.get('/mail', ms.getMail);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Server listening on port :", PORT);
})