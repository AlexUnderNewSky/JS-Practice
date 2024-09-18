/*



*/
"use strict";

// const arr = [`hello`, `world`];
// console.log(arr[0].toUpperCase());

const str = `Hello World`;
const strUpper = str.toUpperCase();

const strLow = str.toLowerCase();
console.log(strUpper);
console.log(strLow);

console.log(str.toUpperCase());

console.log(`===============`);

const str1 = `Hello World`;

console.log(str1.slice(6, 12));

console.log(`=============`);

const strM = `How do you do? I'm fine, thx you you`;
console.log(strM.replaceAll(`you`, `___`));

console.log(`===============`);

const strA = `How do you do? I'm fine, thx you you`;

console.log(strA);
console.log(typeof strA);

const arr = [1, 2, 3, 4, `hello`, 4, 5, `hello`];


console.log(arr);
console.log(typeof arr);
console.log(arr[0]);