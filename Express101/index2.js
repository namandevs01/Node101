const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');

    fs.readFile(filePath, 'utf8', (err, jsonString) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send('Error reading data file');
        }
        try {
            const data = JSON.parse(jsonString); // Parse the JSON string into a JavaScript object
            res.json(data); // Send the object
        } catch (err) {
            console.error('Error parsing JSON string:', err);
            res.status(500).send('Error parsing data');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});