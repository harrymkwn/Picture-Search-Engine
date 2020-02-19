const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.js');
const app = express.Router();

app.use(bodyParser.json({ type: 'application/json' }));
app.use('/user',user);


app.get('/login',function (req,res) {
    res.render('login.ejs');    
});
app.get('/signup',function (req,res) {
    res.render('login.ejs');    
});


module.exports = app;