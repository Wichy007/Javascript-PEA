// This file provides examples of common object methods in JavaScript.

// Object.keys() - Returns an array of a given object's own enumerable property names.
const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};

console.log(Object.keys(person)); // ["name", "age", "city"]

// Object.values() - Returns an array of a given object's own enumerable property values.
console.log(Object.values(person)); // ["John Doe", 30, "New York"]

// Object.entries() - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
console.log(Object.entries(person)); // [["name", "John Doe"], ["age", 30], ["city", "New York"]]

// Object.assign() - Copies all enumerable own properties from one or more source objects to a target object.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const mergedObject = Object.assign({}, obj1, obj2, obj3);
console.log(mergedObject); // { a: 1, b: 2, c: 3 }

// Object.freeze() - Freezes an object. Other code cannot delete or change its properties.
const frozenObject = { id: 1, value: "initial" };
Object.freeze(frozenObject);

// frozenObject.value = "new"; // This will not work in strict mode and will be ignored otherwise.
// delete frozenObject.id; // This will not work in strict mode and will be ignored otherwise.

console.log(frozenObject); // { id: 1, value: "initial" }

// Object.seal() - Seals an object. Other code can change existing properties, but cannot add new properties or delete existing properties.
const sealedObject = { id: 1, value: "initial" };
Object.seal(sealedObject);

sealedObject.value = "new"; // This works
// sealedObject.newProp = "test"; // This will not work

console.log(sealedObject); // { id: 1, value: "new" }
