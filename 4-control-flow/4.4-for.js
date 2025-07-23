// This file provides examples of for loops in JavaScript.

// The for loop is used to execute a block of code a specified number of times.
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Looping through an array using a for loop.
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// The for...of loop is used to iterate over iterable objects like arrays and strings.
for (const fruit of fruits) {
  console.log(fruit);
}

const message = "hello";
for (const char of message) {
  console.log(char);
}