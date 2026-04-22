const fs = require("fs");

const fileDescryptor = fs.openSync("fb.txt", "w+");
console.log(fileDescryptor);
fs.writeFileSync(fileDescryptor, "Held!");
fs.appendFileSync(fileDescryptor, "Held!");
console.log(fs.readFileSync("fb.txt", "utf8"));
//fs.renameSync("fb.txt", "Held!");
fs.cpSync("fb.txt", "utf8");
fs.unlinkSync("utf8");