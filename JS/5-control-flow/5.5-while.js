// // This file provides examples of while and do-while loops in JavaScript.

// // The while loop executes a block of code as long as a specified condition is true.
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// // The do-while loop is similar to the while loop, but it will execute the code block at least once, even if the condition is false.
// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j < 5);

let a = 2;

if (a % 3 === 0 && a % 5 === 0) {
  console.log("fizzbuzz");
} else if (a % 3 === 0) {
  console.log("fizz");
} else if (a % 5 === 0) {
  console.log("buzz");
} else {
  console.log(a);
}
