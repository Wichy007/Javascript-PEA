// This file provides examples of the 'const' keyword.

// 'const' is a signal that the identifier won't be reassigned.
const PI = 3.14159;

// The value of a 'const' is not immutable, but the variable identifier cannot be reassigned.
const person = {
  name: "John"
};

// This is allowed because we are changing a property of the object, not reassigning the object itself.
person.name = "Jane"; 
console.log(person.name); // logs "Jane"