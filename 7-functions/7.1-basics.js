// This file provides basic examples of functions and arrow functions in JavaScript.

// A function declaration defines a named function.
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("John"));

// A function expression defines a function as part of an expression, typically assigned to a variable.
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3));

// An arrow function is a more concise way to write a function expression.
const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(10, 4));

// Arrow functions with an implicit return.
const multiply = (a, b) => a * b;

console.log(multiply(3, 4));

// Arrow functions with a single parameter.
const square = x => x * x;

console.log(square(5));