const url = require('url');
const adr = "https://ww.xyz.com/";

const parsedUrl = url.parse(adr, true);
console.log(parsedUrl);
