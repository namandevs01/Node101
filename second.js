
const data = require("./first.js");

data.firstName();
setTimeout(()=> data.lastName(),2000);
// data.fullName(); ---> this is a type of default export hence runs only when source file exports only this function not with others.

//data.kuchBhi(); --->xxx