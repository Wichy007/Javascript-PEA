// This file provides examples of nested objects and arrays in JavaScript.

const user = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
  hobbies: ["reading", "coding"],
};

// Accessing nested properties.
console.log(user.address.city);
console.log(user.hobbies[0]);