// This file provides examples of array methods in ES6.

const numbers = [1, 2, 3, 4, 5];

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// The forEach() method executes a provided function once for each array element.
numbers.forEach(num => console.log(num));