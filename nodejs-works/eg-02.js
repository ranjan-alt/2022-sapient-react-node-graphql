// to show working of event emitter

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();
eventEmitter.on("my job", () => {
  console.log("my job is called .... ");
});

eventEmitter.on("add", (num1, num2) => {
  console.log(`result of two numbers is ${num1 + num2}`);
});

eventEmitter.emit("my job");
eventEmitter.emit("add", 10, 20);
// -------------------------------------------------

class Person extends EventEmitter {
  constructor(name, salary) {
    super();
    this.name = name;
    this.salary = salary;
  }
  get name() {
    return this._name;
  }
  get salary() {
    return this._salary;
  }
  set name(name) {
    return (this._name = name);
  }
  set salary(salary) {
    return (this._salary = salary);
  }
}

let per1 = new Person("Brahamanand", 1234);
let per2 = new Person("ayush", 123);

per1.on("person", () => {
  console.log(`name : ${per1.name}, Salary: ${per1.salary}`);
});
per2.on("person", () => {
  console.log(`name : ${per2.name}, Salary: ${per2.salary}`);
});

per1.emit("person");
console.log("---------");
per2.emit("person");

//
