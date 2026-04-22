const express = require('express');
const router  = require('./Routes/urlRoute');
const { connection } = require('./Config/db');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    // res.send('Hello World!');
    res.render('index');
})
connection("mongodb://127.0.0.1:27017/urlDb")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Failure: " + err));
app.use('/url', router );

app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log('http://localhost:' + port);
});
