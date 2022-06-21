//program to know about callbacks

// BASIC PROGRAM
// ================================================
// function divide(n1, n2) {
//   if (typeof n1 != "number") {
//     throw "please enter first param as number";
//   }
//   if (typeof n2 != "number") {
//     throw "please enter second param as number";
//   }
//   if (typeof n2 === 0) {
//     throw "sorry cannot divide by zero";
//   }
//   return n1 / n2;
// }
// console.log("start of program");
// const a = 100;
// const b = 0;
// let res = divide(a, b);
// console.log(`result is ${res}`);
// console.log("end of program ");
// ============================================

// connecting with callback
function divide(n1, n2, callback) {
  if (typeof callback != "function") {
    throw "callback is mandatory";
  }

  setTimeout(() => {
    if (typeof n1 != "number") {
      callback("please enter first param as number");
      return;
    }
    if (typeof n2 != "number") {
      callback("please enter second param as number");
      return;
    }
    if (n2 === 0) {
      callback("sorry cannot divide by zero");
      return;
    }
    callback(null, n1 / n2);
  }, 0);
}
console.log("start of program");
const a = 100;
const b = 10;
let res = divide(a, b, (err, res) => {
  if (err) {
    console.log("there is an error:", err);
  } else {
    console.log(` Result is ${res}`);
  }
});

console.log("end of program ");
