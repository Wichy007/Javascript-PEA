// This file provides examples of the differences between let, const, and var.

// 'var' is function-scoped. When a variable is declared using var inside a function, it is only accessible within that function.
function varExample() {
  var x = 1;
  if (true) {
    var x = 2; // 'var' can be re-declared and updated in the same scope.
    console.log(x); // logs 2
  }
  console.log(x); // logs 2
}
varExample();

// 'let' is block-scoped. When a variable is declared using let inside a block of code (e.g., an if statement or a for loop), it is only accessible within that block.
function letExample() {
  let x = 1;
  if (true) {
    let x = 2; // 'let' can be updated but not re-declared in the same scope.
    console.log(x); // logs 2
  }
  console.log(x); // logs 1
}
letExample();

// 'const' is also block-scoped. However, once a variable is assigned a value using const, it cannot be reassigned.
function constExample() {
  const x = 1;
  if (true) {
    const x = 2;
    console.log(x); // logs 2
  }
  console.log(x); // logs 1
}
constExample();