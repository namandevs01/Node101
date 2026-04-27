const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const ejs = require('ejs');
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 0.5*60*1000
    }
}));
// view engine setup
app.set('view engine', 'ejs');

//Login Page
app.get('/', (req, res) => {
    if(req.session.user) {
        return res.redirect("/Home");
    }
    res.render('login');
})
//Home Page
app.get('/Home', (req, res) => {
    if((!req.session.user)){
        return res.redirect('/');
    }
    res.render('Home',{username: req.session.user});
})
//Handle Login
app.post('/login', (req, res) => {
    const { username } = req.body;
    req.session.user = username;
    res.redirect('/');
})
app.get('/Profile', (req, res) => {
    if((!req.session.user)){
        return res.redirect('/');
    }
    res.render('profile')
})

app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log('http://localhost:' + port);
})