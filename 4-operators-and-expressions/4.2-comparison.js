// This file provides examples of comparison operators in JavaScript.

let num1 = 10;
let num2 = 5;
let str1 = "10";

// The loose equality operator (==) compares values after type coercion.
console.log(num1 == str1);  // true

// The strict equality operator (===) compares values without type coercion.
console.log(num1 === str1); // false

// The loose inequality operator (!=) compares values after type coercion.
console.log(num1 != str1);  // false

// The strict inequality operator (!==) compares values without type coercion.
console.log(num1 !== str1); // true

// Greater than operator.
console.log(num1 > num2);   // true

// Less than operator.
console.log(num1 < num2);   // false

// Greater than or equal to operator.
console.log(num1 >= num2);  // true

// Less than or equal to operator.
console.log(num1 <= num2);  // false