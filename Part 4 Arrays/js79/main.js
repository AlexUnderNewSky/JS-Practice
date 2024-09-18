/*



*/
"use strict";

const arr = [1, 2, 3, 1, 2, 3, 2];

console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(2));

let number = [1, 2, 3, 4, 5];
let n1 = number.some((num) => num % 2 === 0);

console.log(n1);

let number1 = [2, 21, 3, 41, 5];

let n2 = number1.every((num) => num % 2 === 0);

console.log(n2);

console.log(`==============`);

let numA = [1, 3, 5, 7, 9];

let a1 = numA.every((num) => num > 0);

console.log(a1);

console.log(`============`);

let words = [`apple`, `banana`, `orange`];

let wordsEvery = words.every((word) => word.includes(`a`));

console.log(wordsEvery);

console.log(`==============`);

const a2 = [`hello`, `text`, `html`];

console.log(a2.includes(`html`));

console.log(`=============`);

let mixArr = [1, `hello`, 3, `word`];

let allNum = mixArr.every((item) => typeof item === `number`);
console.log(allNum);
