const express = require('express');
const user = require('./routes/user.js');
const ejs = require('ejs');
const app = express.Router();

app.use('/user',user);
app.use(express.static('./'));


app.get('/', function (req, res) {
    console.log(req);
    res.send('hello world');

});

app.get('/login',function (req,res) {
    res.render('login.html');    
});
app.get('/signup',function (req,res) {
    res.render('login.html');    
});


module.exports = app;