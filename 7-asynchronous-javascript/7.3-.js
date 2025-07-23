// This file provides examples of Promises in JavaScript.

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then(message => console.log(message))
  .catch(error => console.error(error));