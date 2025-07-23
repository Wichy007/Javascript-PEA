// This file provides examples of the 'var' keyword.

// 'var' declarations are globally scoped or function scoped.
var a = 10;

function myFunction() {
  // This 'a' is function-scoped.
  var a = 20; 
  console.log(a); // logs 20
}

myFunction();

console.log(a); // logs 10

// 'var' is not block-scoped.
if (true) {
  var b = 30; 
}

console.log(b); // logs 30

// Re-declaring is allowed with 'var'.
var c = 40;
var c = 50; 
console.log(c); // logs 50