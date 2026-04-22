const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send("Welcome to Cookie Parser");
    res.render();
});
app.get('/setCookie',(req,res)=>{
    res.cookie("name","SecFB",{ maxAge: 24*60*60*1000, httpOnly: true, secure: false });
    res.send("Cookie is Setup");
})
app.get('/getCookie',(req,res)=>{
    const data = req.cookies.name;
    if(data) res.send(data);
    else res.send("Cookie not found");
})
app.get('/deleteCookie',(req,res)=>{
    res.clearCookie("name");
    res.send("Cookie is Deleted");
})
app.listen(5999,(err)=>{
    if(err) console.log(err);
    else console.log("Server is running on: http://localhost:" + 5999);
})