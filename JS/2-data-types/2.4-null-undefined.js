// This file provides examples of null and undefined data types in JavaScript.

// Undefined means a variable has been declared but has not yet been assigned a value.
let a;
console.log(a); // undefined

// Null is an assignment value. It can be assigned to a variable as a representation of no value.
const b = null;
console.log(b); // null

// Typeof null is object (a known quirk in JavaScript).
console.log(typeof null); // "object"

// Typeof undefined is undefined.
console.log(typeof undefined); // "undefined"