// This file provides examples of the switch statement in JavaScript.

// The switch statement is used to perform different actions based on different conditions.
const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's the end of the week.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}