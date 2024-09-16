/*



*/
"use strict";

const a1 = [`a`, `b`, `c`];

const a2 = [`d`, `e`, `f`];

const newArr = a1.concat(a2);
console.log(newArr);

console.log(`==================`);

const arr5 = [1, 2, 3];

const arr6 = arr5.concat(4, 5, 6, 7, [undefined, 2, 3, 4]);

console.log(arr6);

const person1 = [{ name: `Serhii`, age: 23 }];
const person2 = [{ name: `Bob`, age: 15 }];

const combinedPersons = person1.concat(person2);
console.log(combinedPersons);

console.log(`============`);

let a7 = [10, 20];
let a8 = [`a`, `c`];

let b1 = a7.concat(a8, 30, 40);

console.log(b1);

const b3 = [10, 20];
const b4 = [];

const b5 = b3.concat(b4);
console.log(b5);