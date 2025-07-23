// This file provides examples of default parameters in ES6.

// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("John"));