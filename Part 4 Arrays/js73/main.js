/*



*/
"use strict";

const arr = [10, 20, 35, 40];

const arr2 = arr.reduce((acc, item) => acc + item);

console.log(arr2);

console.log(`=============`);

function myFn(...sum) {
  let sum1 = 0;
  for (let val of sum) {
    sum1 += val;
  }
  return sum1;
}

console.log(myFn(20, 30, 50));

console.log(`===============`);

const words = [`hi`, `my`, `students`];

const c1 = words.reduce((acc, curr) => acc + ` ` + curr);

console.log(c1);

console.log(`============`);

const num2 = [10, 20, 40, 80, 21, 43];

const maxNumber = num2.reduce((acc, val) => Math.max(acc, val, 0));

console.log(maxNumber);

console.log(`====================`);

const arr10 = [1, 2, 3, 220];

console.log(Math.max(...arr10));

console.log(`================`);

const arrA = [`Serhii`, `Alex`, `Bob`, `John`];

const fg1 = arrA.reduce((acc, item, index) => {
  acc[index] = item;
  return acc;
}, {});

console.log(fg1);

const arr4 = Object.assign({}, arrA);
console.log(arr4);
