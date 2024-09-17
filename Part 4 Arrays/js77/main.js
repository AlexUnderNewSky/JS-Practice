/*



*/
"use strict";

let numbers = [5, 2, 8, 1, 4, 6, 7, 13, 14, 19];

let sortElements = numbers.filter((num) => num % 2 === 0).sort((a, b) => a - b);

console.log(sortElements);

console.log(`============`);

let names = [`Vanya`, `Kate`, `Kolya`, `Kate`, `Vanya`];

let uniqNames = names.filter((item, index, arr) => arr.indexOf(item) === index);

console.log(uniqNames);

console.log(`=============`);

const numbers3 = [1, 3, 6, 9, 12, 15];

let sum = numbers3
  .filter((num) => num % 3 === 0)
  .reduce((acc, curr) => acc + curr);

console.log(sum);

console.log(`===========`);

let w1 = [`apple`, `banana`, `grape`, `cherry`];

let str1 = w1.map((word) => word.toUpperCase()).toSorted();

console.log(str1);
