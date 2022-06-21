// spread/rest operators with function

function myFun(name1, name2, name3) {
  console.log(`hello ${name1} ${name2} ${name3}`);
}

myFun("ranjan", "verma", "monga");
myFun("tomar", "sashi"); //in this one since we have only three arguments so it will give undefined

function myFunc2(...names) {
  console.log(`hello ${names}`);
}
myFunc2("ranjan", "kumar", "sah");

// but here we cannot use like this (...names, name) it should be like this only (name, ...name)
// since rest operator has the cabaility to take any number of values
