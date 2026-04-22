const crypto = require("crypto");
const event = require("events");

// const BeforeExe = Date.now();
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2("password","salt",100000,512,"sha512", (err) => {
//     if(err) throw err;
//     console.log(Date.now()-BeforeExe);
// });
const EventEmitter = new event.EventEmitter;
const eventhandler = (extra_cheese, olive) => {
    console.log("Extra_cheese: " + extra_cheese,"\nOlives: " + olive);
    console.log('Start Preparing Pizza');
}
EventEmitter.onkeydown(eventhandler);

EventEmitter.emit('Order_Pizza', 'double', 'No');