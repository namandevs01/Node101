const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            fs.readFile('./component/h.html', (err, page) => {
                if(err){
                    console.log(err);
                }
                else{
                    res.write(page);
                }
                res.end();
            });
            break;
        case '/about':
            fs.readFile('./component/a.html', (err, page) => {
                if(err) {
                    console.log(err);
                }
                else {
                    res.write(page);
                }
                res.end();
            });
            break;
    }
}).listen(8000, '127.0.0.1', (err) => {
    if(err) console.log(err);
    console.log("Server started on port http://localhost:8000");
});