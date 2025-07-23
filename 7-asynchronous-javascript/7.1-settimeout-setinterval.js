// This file provides examples of setTimeout and setInterval in JavaScript.

// setTimeout executes a function, or evaluates an expression, after a specified delay (in milliseconds).
setTimeout(() => {
  console.log("This message is displayed after 2 seconds.");
}, 2000);

// setInterval repeatedly executes a function, or evaluates an expression, after a specified delay (in milliseconds).
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);