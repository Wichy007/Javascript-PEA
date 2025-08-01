// This file provides examples of cloning and merging arrays and objects in JavaScript.

// Cloning an array using the spread operator.
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];
console.log(clonedArray);

// Cloning an object using the spread operator.
const originalObject = { a: 1, b: 2 };
const clonedObject = { ...originalObject };
console.log(clonedObject);

// Merging arrays using the spread operator.
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// Merging objects using the spread operator.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);