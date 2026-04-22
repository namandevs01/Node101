const fs = require("fs");

fs.writeFile("example.txt", "Hello World!" , (err) => {
    if(err) throw err;
    console.log('File Saved Successfully.');
})

fs.appendFile("example.txt", "How are you?", (err) => {
    if(err) throw err;
    console.log("File Appended Successfully.");
})

fs.readFile("example.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log("File Content: ", data);
})
