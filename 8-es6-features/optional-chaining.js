// This file provides examples of optional chaining in ES6.

// The optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.
const user = {
  profile: {
    name: "John Doe",
  },
};

console.log(user?.profile?.name);
console.log(user?.address?.street);