// This file provides examples of other operators in JavaScript.

// The ternary operator is a shorthand for an if-else statement.
const age = 20;
const isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // "Yes"

// The typeof operator returns the data type of a variable.
console.log(typeof 10);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"
console.log(typeof []);        // "object"
console.log(typeof null);      // "object" (this is a known quirk in JavaScript)
console.log(typeof undefined); // "undefined"
console.log(typeof function() {}); // "function"