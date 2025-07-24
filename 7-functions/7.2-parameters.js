// This file provides examples of function parameters in JavaScript.

// Default parameters allow you to initialize a parameter with a default value if no value is passed in.
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // "Hello, Guest!"
console.log(greet("John")); // "Hello, John!"

// Rest parameters allow you to represent an indefinite number of arguments as an array.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22