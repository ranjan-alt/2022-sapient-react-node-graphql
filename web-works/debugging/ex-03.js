let name = " radhika";
let age = 10;
let someString = `hey do you know ${name} age is ${age}`;

function myFunction(name, age) {
  console.log(`Name ${name}`);
  console.log(`Age ${age}`);
}

myFunction(name, age); // this is actual argument

// this is tagged function
function myFunction1(tempString, name, age) {
  console.log(tempString);
  console.log(`NAME ${name}`);
  console.log(`AGE ${age}`);
}

// with variable Args...

function myFunction2(tempString, ...values) {
  console.log(values);
}

myFunction1`hey you know what ${name} is ${age} years old`;
myFunction2` hey you know what ${name} is ${age} years old`;
