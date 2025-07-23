// This file provides examples of if, else if, and else statements in JavaScript.

// The if statement executes a block of code if a specified condition is true.
const age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}

// The if-else statement executes one block of code if a condition is true and another block if the condition is false.
const temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day.");
} else {
  console.log("It's a pleasant day.");
}

// The if-else if-else statement allows you to test multiple conditions.
const score = 85;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 80) {
  console.log("Good job!");
} else if (score >= 70) {
  console.log("Keep it up!");
} else {
  console.log("You can do better.");
}