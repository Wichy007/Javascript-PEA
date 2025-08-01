// This file provides examples of logical operators in JavaScript.

let a = true;
let b = false;

// The AND operator (&&) returns true if both operands are true.
console.log(a && a); // true
console.log(a && b); // false
console.log(b && b); // false

// The OR operator (||) returns true if at least one of the operands is true.
console.log(a || a); // true
console.log(a || b); // true
console.log(b || b); // false

// The NOT operator (!) returns the opposite boolean value.
console.log(!a); // false
console.log(!b); // true