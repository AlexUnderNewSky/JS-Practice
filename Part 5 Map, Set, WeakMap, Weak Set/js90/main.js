/*



*/
"use strict";

const set1 = new Set();
set1.add(true).add(false);
set1.add([1, 2, 3, 4, 5]);
set1.add(`Hello World!`);
console.log(set1);

console.log(`===============`);

const set2 = new Set([1, 2, 3, 4, 5]);
console.log(set2);
console.log(set2.has(5));

console.log(`===========`);

const arr = [1, 2, 1, 2, `red`, `blue`, `red`];
const set3 = new Set(arr);
console.log(set3);

console.log(`==============`);

const set4 = new Set([1, 2, 3]);
console.log(set4);

set4.forEach(function (item) {
  console.log(item);
});

console.log(`===========`);

const set5 = new Set([1, 2, 3, false]);
const arraySet5 = Array.from(set5);
console.log(arraySet5);

const set5Spread = [...set5];
console.log(set5Spread);

console.log(`=============`);

const arr1 = [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, `a`, `a`];

const arr2 = new Set(arr1);
arr2.clear();
console.log(arr2);

const arr3 = [...arr2];
console.log(arr3);

console.log(`||||||||||||||||||||||||||||||`);

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([4, 3, 2, 1, 0]);

let n1 = new Set([...setA, ...setB]);
console.log(n1);

console.log(`===============`);

let setC1 = new Set([1, 2, 3, 4]);
let setD1 = new Set([5, 1, 3, 4]);

// let test = new Set([...setC].filter((a) => setD.has(a)));
// console.log(test);

let diff = new Set([...setC1].filter((x) => !setD1.has(x)));

console.log(diff);