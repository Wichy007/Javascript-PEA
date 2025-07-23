// This file provides examples of async/await in JavaScript.

// The async keyword makes a function asynchronous, meaning it returns a Promise.
// The await keyword can only be used inside an async function, and it makes the function pause its execution and wait for a Promise to resolve.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function myAsyncFunction() {
  console.log("Start");
  await delay(2000);
  console.log("End");
}

myAsyncFunction();