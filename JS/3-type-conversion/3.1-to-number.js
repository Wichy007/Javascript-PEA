// This file provides examples of type conversion to number in JavaScript.

// 1. Using Number() constructor
let str = "123";
let numStr = Number(str);
console.log(numStr, typeof numStr); // 123 "number"

let strFloat = "123.45";
let numStrFloat = Number(strFloat);
console.log(numStrFloat, typeof numStrFloat); // 123.45 "number"

let boolTrue = true;
let numBoolTrue = Number(boolTrue);
console.log(numBoolTrue, typeof numBoolTrue); // 1 "number"

let boolFalse = false;
let numBoolFalse = Number(boolFalse);
console.log(numBoolFalse, typeof numBoolFalse); // 0 "number"

let strInvalid = "hello";
let numStrInvalid = Number(strInvalid);
console.log(numStrInvalid, typeof numStrInvalid); // NaN "number"

let emptyStr = "";
let numEmptyStr = Number(emptyStr);
console.log(numEmptyStr, typeof numEmptyStr); // 0 "number"

let nullVal = null;
let numNull = Number(nullVal);
console.log(numNull, typeof numNull); // 0 "number"

let undefinedVal = undefined;
let numUndefined = Number(undefinedVal);
console.log(numUndefined, typeof numUndefined); // NaN "number"

// 2. Using unary plus operator
let str2 = "456";
let numStr2 = +str2;
console.log(numStr2, typeof numStr2); // 456 "number"

let boolTrue2 = true;
let numBoolTrue2 = +boolTrue2;
console.log(numBoolTrue2, typeof numBoolTrue2); // 1 "number"

let strInvalid2 = "world";
let numStrInvalid2 = +strInvalid2;
console.log(numStrInvalid2, typeof numStrInvalid2); // NaN "number"
