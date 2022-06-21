// to show working with promise
function divide(n1, n2) {
  return new Promise((resolve, reject) => {
    if (typeof n1 != "number") {
      reject("please enter first param as number");
      return;
    }
    if (typeof n2 != "number") {
      reject("please enter second param as number");
      return;
    }
    if (n2 === 0) {
      reject("sorry cannot divide by zero");
      return;
    }
    resolve(n1 / n2);
  });
}
console.log("start of program");
const a = 100;
const b = 10;

// version 1
// let result = divide(a, b);
// result.then((res) => console.log("res", res));
// result.catch((err) => console.log("error", err));

// the output was a promise but we didnt get the result

//version 2

// use of ASYN AND AWAIT KEYWORD
// with the use of asyn and await function we got the result, Earlier we were getting only promise

// setTimeout(async () => {
//   let result = await divide(a, b);
//   console.log(result);
// }, 0);

//version 3
let myFun = async function () {
  let result = await divide(a, b);
  console.log(result);
};
myFun();

console.log("end of program ");
