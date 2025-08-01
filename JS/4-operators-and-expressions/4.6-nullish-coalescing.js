// This file provides examples of the nullish coalescing operator in JavaScript.

// The nullish coalescing operator (??) returns the right-hand side operand if the
// left-hand side operand is null or undefined. Otherwise, it returns the left-hand side operand.

let a = null;
let b = "default";
console.log(a ?? b); // "default"

let c = undefined;
let d = "default";
console.log(c ?? d); // "default"

let e = 0;
let f = "default";
console.log(e ?? f); // 0 (because 0 is not null or undefined)

let g = "";
let h = "default";
console.log(g ?? h); // "" (because "" is not null or undefined)

// Compare with the logical OR (||) operator, which returns the right-hand side
// for any "falsy" value on the left (e.g., null, undefined, 0, "", false).
console.log(0 || "default"); // "default"
console.log("" || "default"); // "default"
