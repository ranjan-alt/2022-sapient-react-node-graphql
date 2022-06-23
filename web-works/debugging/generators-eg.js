function* generator(val) {
  yield val;
  yield val + 1;
}

const gen = generator(100);
console.log(gen);

console.log(gen.next().value);
console.log(gen.next().value);

let arry = [32, 2, 4, 67, 8, 01, 45];
for (let i = 0; i < arry.length; i++) {
  console.log(i);
}
