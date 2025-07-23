// This file provides examples of type conversion to boolean in JavaScript.

// 1. Using Boolean() constructor
let num = 0;
let boolNum = Boolean(num);
console.log(boolNum, typeof boolNum); // false "boolean"

let num2 = 10;
let boolNum2 = Boolean(num2);
console.log(boolNum2, typeof boolNum2); // true "boolean"

let str = "";
let boolStr = Boolean(str);
console.log(boolStr, typeof boolStr); // false "boolean"

let str2 = "hello";
let boolStr2 = Boolean(str2);
console.log(boolStr2, typeof boolStr2); // true "boolean"

let nullVal = null;
let boolNull = Boolean(nullVal);
console.log(boolNull, typeof boolNull); // false "boolean"

let undefinedVal = undefined;
let boolUndefined = Boolean(undefinedVal);
console.log(boolUndefined, typeof boolUndefined); // false "boolean"

let obj = {};
let boolObj = Boolean(obj);
console.log(boolObj, typeof boolObj); // true "boolean"

let arr = [];
let boolArr = Boolean(arr);
console.log(boolArr, typeof boolArr); // true "boolean"

// 2. Using logical NOT operator (!!) - double negation
let num3 = 0;
let boolNum3 = !!num3;
console.log(boolNum3, typeof boolNum3); // false "boolean"

let str3 = "world";
let boolStr3 = !!str3;
console.log(boolStr3, typeof boolStr3); // true "boolean"
