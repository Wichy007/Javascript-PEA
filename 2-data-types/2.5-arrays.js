// This file provides examples of arrays in JavaScript.

// Array declaration.
const emptyArray = [];
const fruits = ["apple", "banana", "orange"];

// Accessing elements.
const firstFruit = fruits[0];
console.log(firstFruit);

const lastFruit = fruits[fruits.length - 1];
console.log(lastFruit);

// Modifying elements.
fruits[1] = "grape";
console.log(fruits);

// Array methods for adding and removing elements.
fruits.push("kiwi");
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);

const removedLast = fruits.pop();
console.log(removedLast);
console.log(fruits);

const removedFirst = fruits.shift();
console.log(removedFirst);
console.log(fruits);

// Slicing and splicing arrays.
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

const splicedFruits = fruits.splice(1, 1, "pear", "cherry");
console.log(splicedFruits);
console.log(fruits);

// Finding elements in an array.
const orangeIndex = fruits.indexOf("orange");
console.log(orangeIndex);

const hasPear = fruits.includes("pear");
console.log(hasPear);

// Iterating over arrays.
fruits.forEach(function(fruit) {
  console.log(fruit);
});

const uppercaseFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log(uppercaseFruits);

const fruitsWithA = fruits.filter(function(fruit) {
  return fruit.includes("a");
});
console.log(fruitsWithA);