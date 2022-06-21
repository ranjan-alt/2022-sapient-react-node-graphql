// array destructuring

let person = {
  firstName: "ranjan",
  lastName: "kumar",
  email: "ranjan@gmail.com",
  city: "bengalurur",
};

// version1:

// let firstName = person.firstName;
// let lastName = person.lastName;

//version 2:
let { firstName, lastName, email, city: myCity } = person;
console.log(`First name : ${firstName}, Last Name : ${lastName}`);
console.log(myCity);

// let num = [1, 2, 3, 4, 5, 6, 7];
// let [n1, n2, ...restoftheNumber] = num;
// console.log(n1);
// console.log(n2);
// console.log(restoftheNumber);

function display({ firstName, lastName, city, email }) {
  console.log(`hi ${firstName} how are you in ${city}`);
}

// display(person.firstName, null, person.city);
display(person);
