//Works perfectly fine even when variables in modules have datatype let because of Module Wrapper Function.
require("./m1");
require("./m2");

//every module is executed like these anonymous functions.
//parametes for every anonymous functions are - (function(execute,path,__filename,__dirname
(function(){
    let name = "garry";
    console.log(name);
})();
(function(){
    let name = "harry";
    console.log(name);
})();
