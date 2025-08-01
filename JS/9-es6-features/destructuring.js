// This file provides examples of destructuring in ES6.

// Destructuring allows you to unpack values from arrays, or properties from objects, into distinct variables.
const user = {
  name: "John Doe",
  age: 30,
  city: "Anytown",
};

const { name, age } = user;
console.log(name);
console.log(age);

const fruits = ["apple", "banana", "orange"];

const [first, second] = fruits;
console.log(first);
console.log(second);