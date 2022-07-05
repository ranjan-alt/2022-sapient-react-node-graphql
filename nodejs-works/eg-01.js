// this will invoke the services folder and files thats why we created eg-01

// to show working basics with nodejs
const mbl = require("./services/first");
// console.log(mbl);

const result = mbl.sum(10, 20);
console.log(`Result${result}`);
console.log(`constant value ${mbl.Pi}`);
let someLogic = new mbl.MyBusinessLogic("Laptop");
