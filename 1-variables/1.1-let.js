// This file provides examples of the 'let' keyword.

// 'let' allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.
let x = 10;

if (true) {
  // This is a different 'x' than the one above.
  let x = 20; 
  console.log(x); // logs 20
}

console.log(x); // logs 10

// 'let' variables can be reassigned.
x = 30; 
console.log(x); // logs 30