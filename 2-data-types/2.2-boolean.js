// This file provides examples of boolean data type in JavaScript.

// Boolean values represent true or false.
const isTrue = true;
const isFalse = false;

console.log(isTrue);  // true
console.log(isFalse); // false

// Boolean conversion.
// Any non-empty string is true.
console.log(Boolean("hello")); // true

// An empty string is false.
console.log(Boolean(""));     // false

// Any non-zero number is true.
console.log(Boolean(100));    // true

// Zero is false.
console.log(Boolean(0));      // false

// null, undefined, and NaN are false.
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));      // false