/*



*/
"use strict";

const arr = [1, 2, 3, 4];

const arrCopy = arr.flat().map((el) => el * 2);

const arrCopyFL = arr.flatMap((el) => el * 2);

console.log(arr);
console.log(arrCopy);
console.log(arrCopyFL);

console.log(`============`);

const arr1 = [1, 2, 3, 4, 5, 10, 22];
const arr1Copy = arr1.flatMap((num) => (num % 2 === 0 ? num : []));

console.log(arr1Copy);
