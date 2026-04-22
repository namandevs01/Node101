const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    res.end("Server Started Successfully");
});
server.listen(8000, '127.0.0.1', (err) => {
    if (err) {
        console.error(err);
    }
    console.log("Server started on port http://localhost:8000");
});