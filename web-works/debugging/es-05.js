// showing to pass function as agument
function welcome() {
  console.log("welcome to react training");
}
// setInterval(welcome, 2000);

// setInterval(() => {
//   console.log("welcome to my training ");
// }, 2000);

// we can also write this in signle line of code

// few es6 function which take function as an argumment
let names = ["ranjan", "radhika", "monga", "kumar"];

let firstCharacters = names.map((val) => {
  return val.charAt(0);
});
// console.log(firstCharacters);

// firstCharacters.forEach((val) => {
//   console.log(val.toUpperCase());
// });

let find = names.findIndex((val) => {
  console.log(val);
  return (val === "kumar") >= 0 ? "Found" : "not found";
});
console.log(find);
