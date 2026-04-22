const express = require('express');
const app = express();
const data  = require('./data.json');
app.set('view engine','ejs');
app.get('/', (req, res) => {
    res.send('Hello Welcome from Home Page!' +
        '<a href="/about">About</a>');
});
app.get('/about', (req, res) => {
    res.send('Hello Welcome from Home0 Page!'+
        '<a href="/about">About</a>');
});
app.get('/contact', (req, res) => {
    res.send('Hello Welcome from Home1 Page!'+
        '<a href="/about">About</a>');
});
app.get('/projects', (req, res) => {
    res.send('Hello Welcome from Home2 Page!'+
        '<a href="/about">About</a>');
});
app.get('/search', (req, res) => {
    console.log(req.query);
    console.log(req.query.name);
    res.send('Hello Search Result Served!');
});
app.get('/data', (req, res) => {
    // const user = {
    //     name : 'Alex',
    //     age : 20
    // }
    // res.render('index.ejs', {user : user});
    res.json(data);
});
app.use((req, res) => {
    res.status(404).send('Page Not Found!');
});
const port = process.env.PORT || 8000;
app.listen(port);
console.log('Listening on port http://localhost:' + port);
