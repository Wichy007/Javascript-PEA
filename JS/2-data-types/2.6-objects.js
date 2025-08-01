// This file provides examples of objects in JavaScript.

// Object declaration.
const emptyObject = {};
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
  hobbies: ["reading", "coding", "hiking"],
};

// Accessing properties using dot notation.
const firstName = person.firstName;
console.log(firstName); // "John"

// Accessing nested properties.
const city = person.address.city;
console.log(city); // "Anytown"

// Accessing array elements within an object.
const firstHobby = person.hobbies[0];
console.log(firstHobby); // "reading"

// Accessing properties using bracket notation.
const lastName = person["lastName"];
console.log(lastName); // "Doe"

// Modifying properties.
person.age = 31;
console.log(person.age); // 31

// Adding new properties.
person.address.zipCode = "12345";
console.log(person.address.zipCode); // "12345"

person.email = "john.doe@example.com";
console.log(person.email); // "john.doe@example.com"

// Deleting properties.
delete person.isStudent;
console.log(person.isStudent); // undefined

// Object methods.
const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);

// Checking for properties.
const hasAge = person.hasOwnProperty("age");
console.log(hasAge); // true