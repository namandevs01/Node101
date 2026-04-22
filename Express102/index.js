const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const add = path.join(__dirname,'Components');
const port = process.env.PORT || 3000;

app.use(express.static(add));
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'Components/about.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'Components/about.html'));
});
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'Components/about.html'));
});
app.get('/form', (req, res) => {
    // If no query parameters, show the form
    if (!req.query.name && !req.query.email) {
        res.sendFile(path.join(__dirname, 'Components/form.html'));
        return;
    }

    // If query parameters exist, save the data
    const data = `${req.query.name},${req.query.email}: new request received\n`;

    fs.appendFile("./Components/data.json", data, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving data');
        }

        // After saving, send back the file
        res.sendFile(path.join(__dirname, 'Components/data.json'));
    });
});
app.get('/search', (req, res) => {
    console.log(req.query);
    console.log(req.query.name);
    res.send('Hello Search Result Served!');
});
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});

// const server = app.listen(port, () => {
//     console.log(`Listening on port http://localhost:${port}`);
// });
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });