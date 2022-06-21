// working with rest and spread operators

// let nums = [12, 23, 34, 5, 66, 88, 99];
// console.log(nums);

// let anotherNums = [100, 10, nums];
// console.log(anotherNums);

// nums.push(444);
// console.log(anotherNums);
//it got mutated
// ========================================================

// but if we add three dots like this

let nums = [12, 23, 34, 5, 66, 88, 99];
console.log(nums);

let anotherNums = [100, 10, ...nums]; // this will not effect the nums which we have created
console.log(anotherNums);

nums.push(444);
console.log(anotherNums);

// ============================================================

// another example

let p1 = { name: "aman", email: "aman@gmail.com" };
let p1Details = { city: "bengaluru", state: "karnataka", ...p1 };

let p2 = { ...p1 };
console.log(p1 === p2);
console.log(p1Details);

console.log(p2);
console.log(p1);
