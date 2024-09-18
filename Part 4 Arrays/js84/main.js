/*



*/
"use strict";

const arr = [1, 2, 3, 4, 5];
const arrR = arr.reduce((acc, curr) => acc + curr, 0);

console.log(arrR);

console.log(`=============`);

const arr1 = [10, 5, 20, 8, 15, 27];

console.log(Math.max(...arr1));

console.log(`=============`);

const newArr = arr.concat(arr1).sort((a, b) => a - b);

console.log(newArr);

// жесть!!!!!!!!!!!!!!!!!
// const newArr2 = arr.reduce((acc, curr, index) => {
//   acc.push(curr);
//   if (index < arr1.length) {
//     acc.push(arr1[index]);
//   }

//   return acc;
// }, []);

// if (arr1.length > arr.length) {
//   newArr2.push(...arr1.slice(arr.length));
// }

// console.log(newArr2);

function mergeFn(...arrays) {
  return arrays.reduce((acc, val) => acc.concat(val));
}

const g1 = [1, 2, 3, [24]];
const g2 = [1, 2, 3];
const g3 = [1, 2, 3, [24, [44]]];

console.log(mergeFn(g1,g2,g3));









// const arr = [1, 2, 3, 4, 5];

// const arrReduce = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(arrReduce);

// const arr1 = [10, 5, 20, 89, 8, 15, 27];
// console.log(Math.max(...arr1));

// const arrCommon = arr.concat(arr1).sort((a, b) => a - b);

// console.log(arrCommon);
