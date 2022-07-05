const sum = (num1, num2) => num1 + num2;

const Pi = 3.14;

class MyBusinessLogic {
  constructor(name) {
    this.name = name;
    console.log("object created");
  }
}
// =====================
// use of export function and we will see how to write
// version 1
// module.exports.sum = sum;
// module.exports.Pi = Pi;
// module.exports.MyBusinessLogic = MyBusinessLogic;

//version 2
// module.exports = { sum: sum, Pi: Pi, MyBusinessLogic: MyBusinessLogic };

//version 3
module.exports = { sum, Pi, MyBusinessLogic };
