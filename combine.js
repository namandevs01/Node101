const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if(req.url === '/favicon.ico'){
        res.end();
    }
    const da = new Date().toLocaleString();
    console.log(da);
    fs.appendFile("servlog.txt", `${da}${req.url}:new request received\n`, (err) => {
        if (err) throw err;
    });
    console.log(req.url);
    res.write("<h1>Welcome to xyz</h1>");
    res.end();
}).listen(3000, '127.0.0.1', (err) => {
    if(err) console.log(err);
    console.log("Server started on port http://localhost:3000");
});