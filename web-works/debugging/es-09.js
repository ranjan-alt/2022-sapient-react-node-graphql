// a function is treated as class in javascript

function employee(name, id) {
  this.name = name;
  this.id = id;
}

employee.prototype.display = function () {
  console.log("Name : ", this.name);
  console.log("Id :", this.id);
};

let harsh = new employee("harsh", 123);
harsh.display();
// thats why js is object based language but not an object oriented language

//CLASSES - now we will see the same thing with the help of class
class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  display() {
    console.log("Name : ", this.name);
    console.log("Id :", this.id);
  }
}

let ram = new Employee("Ram", 123);
console.log(ram);
console.log(typeof ram.display());

class TeamLeader extends Employee {
  constructor(name, id, project) {
    super(name, id);
    this.project = project;
  }
  display() {
    super.display();
    console.log("Porject Name: ", this.project);
  }
}

let preet = new TeamLeader("preet", 100, "Finance");
preet.display();
console.log(preet);
