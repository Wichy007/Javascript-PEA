// This file provides examples of strings in JavaScript.

// String declaration using single and double quotes.
const singleQuotes = 'Hello, world!';
const doubleQuotes = "Hello, world!";

// String concatenation.
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

// String interpolation using template literals.
const name = "Jane";
const greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Jane!"

// String length property.
const text = "This is a string.";
console.log(text.length); // 17

// Accessing characters in a string.
const firstChar = text[0];
console.log(firstChar); // "T"

// String methods.
const uppercaseText = text.toUpperCase();
console.log(uppercaseText); // "THIS IS A STRING."

const lowercaseText = text.toLowerCase();
console.log(lowercaseText); // "this is a string."

const substring = text.substring(0, 4);
console.log(substring); // "This"

const sliced = text.slice(5, 7);
console.log(sliced); // "is"

const replaced = text.replace("string", "sentence");
console.log(replaced); // "This is a sentence."

const includes = text.includes("is");
console.log(includes); // true

const startsWith = text.startsWith("This");
console.log(startsWith); // true

const endsWith = text.endsWith(".");
console.log(endsWith); // true