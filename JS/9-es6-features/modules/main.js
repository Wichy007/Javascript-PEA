// This file provides an example of importing a module in ES6.

// The import statement is used to import read-only live bindings which are exported by another module.
import { name, greet } from "./module.js";

console.log(name);
greet();