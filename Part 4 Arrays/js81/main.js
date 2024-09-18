/*



*/
"use strict";

const arr = [1, 2, 3, [52, 5]];

const arrCopy = arr.flat();

console.log(arr);
console.log(arrCopy);

console.log(`=============`);

const arr1 = [1, [2, [3]]];

const arr1Copy = arr1.flat(24);

console.log(arr1);
console.log(arr1Copy);

console.log(`==============`);

const arr3 = [1, 2, 3, [4, 5]];

const arr3Copy = arr3.flat().map((num) => num * 2);

console.log(arr3);
console.log(arr3Copy);

console.log(`============`);

const arr4 = [1, , , , , , , [20, 44, [2, 7]]];
const arr4Copy = arr4.flat();
console.log(arr4);
console.log(arr4Copy);
