/*



*/
"use strict";

// const array = ["one", "two", "three"];
// const [a, b, c] = array;
// console.log(a);
// console.log(b);
// console.log(c);

// const array1 = ["one", "two", "three", true, false];
// const [a1, b1, c1, d, e] = array1;
// console.log(a1, b1, c1, d, e);

// console.log(`=============`);
// const arr = [1, 2, 3, 4, 5, 6, `hi`];

// const [c2, c3, ...c4] = arr;

// console.log(c2);
// console.log(c3);
// console.log(c4);

const arr2 = [`one`, `two`];
const [first, second, admin = true] = arr2;
console.log(first, second, admin);

let a = true;
let b = false;

[a, b] = [b, a];
console.log(a);
console.log(b);

const arr = [10, 20, 500, 343, -434];
const sum1 = (...arr) => arr.reduce((acc, val) => acc + val, 0);
console.log(sum1(...arr));
console.log(sum1(10, 20, -30, 23));

const arrNum = [11, 22, 33];

const sum = (a1, b1, c1) => a1 + b1 + c1;

console.log(sum(...arrNum));
