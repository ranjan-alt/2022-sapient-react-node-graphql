// program to show working with readline

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 20 + 1);
let num2 = Math.floor(Math.random() * 20 + 1);

let answer = num1 + num2;

rl.question(`what do you think sum of ${num1}, ${num2}\n`, (useranswer) => {
  if (parseInt(useranswer) === answer) {
    console.log("correct answer");
    rl.close();
  } else {
    rl.setPrompt(`you are wrong try again \n`);
    rl.prompt();
    rl.on("line", (useranswer) => {
      if (parseInt(useranswer) === answer) {
        console.log("correct answer");
        rl.close();
      } else {
        rl.setPrompt(`you entered the answer wrongly ${useranswer} Try Again`);
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("on close");
});
