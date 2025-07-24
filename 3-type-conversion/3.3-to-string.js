// This file provides examples of type conversion to string in JavaScript.

// 1. Using String() constructor
let num = 123;
let strNum = String(num);
console.log(strNum, typeof strNum); // "123" "string"

let bool = true;
let strBool = String(bool);
console.log(strBool, typeof strBool); // "true" "string"

let arr = [1, 2, 3];
let strArr = String(arr);
console.log(strArr, typeof strArr); // "1,2,3" "string"

let obj = { a: 1 };
let strObj = String(obj);
console.log(strObj, typeof strObj); // "[object Object]" "string"

// 2. Using .toString() method
let num2 = 456;
let strNum2 = num2.toString();
console.log(strNum2, typeof strNum2); // "456" "string"

let bool2 = false;
let strBool2 = bool2.toString();
console.log(strBool2, typeof strBool2); // "false" "string"

let arr2 = [4, 5, 6];
let strArr2 = arr2.toString();
console.log(strArr2, typeof strArr2); // "4,5,6" "string"

// Note: .toString() on null or undefined will throw an error.
// console.log(null.toString()); // TypeError
// console.log(undefined.toString()); // TypeError

// 3. Using template literals
let num3 = 789;
let strNum3 = `${num3}`;
console.log(strNum3, typeof strNum3); // "789" "string"

let bool3 = true;
let strBool3 = `${bool3}`;
console.log(strBool3, typeof strBool3); // "true" "string"
