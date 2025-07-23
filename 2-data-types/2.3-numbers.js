// This file provides examples of numbers in JavaScript.

// Number declaration.
const integer = 10;
const float = 10.5;

// Basic arithmetic operations.
const sum = 10 + 5;
console.log(sum); // 15

const difference = 10 - 5;
console.log(difference); // 5

const product = 10 * 5;
console.log(product); // 50

const quotient = 10 / 5;
console.log(quotient); // 2

const remainder = 10 % 3;
console.log(remainder); // 1

// Exponentiation.
const power = 2 ** 3;
console.log(power); // 8

// Increment and decrement operators.
let counter = 0;
counter++;
console.log(counter); // 1
counter--;
console.log(counter); // 0

// Math object methods.
const pi = Math.PI;
console.log(pi);

const rounded = Math.round(10.5);
console.log(rounded);

const absolute = Math.abs(-10);
console.log(absolute);

const random = Math.random();
console.log(random);

// Parsing strings to numbers.
const stringNumber = "123";
const parsedInt = parseInt(stringNumber);
console.log(parsedInt); // 123

const stringFloat = "123.45";
const parsedFloat = parseFloat(stringFloat);
console.log(parsedFloat); // 123.45

// NaN (Not a Number).
const notANumber = "hello" / 2;
console.log(notANumber); // NaN
console.log(isNaN(notANumber)); // true