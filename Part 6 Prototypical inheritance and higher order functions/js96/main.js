/*



*/
"use strict";

// const a1 = (a, b) => a + b;

// console.log(a1(20, 30));

// const strHandler = (names) => `hello ${names}`;
// console.log(strHandler(`Costa`));

// function fn1(a, b) {
//   return b(a);
// }

// function fn2(c) {
//   return c * 5;
// }
// console.log(fn1(10, fn2));

// console.log(`=-=-=-=-=-=-=-=-=`);

// const fn3 = (a, b) => b(a);
// const fn4 = (c) => c * 4;
// console.log(fn3(4, fn4));

// console.log(`=-=-=-=-=-=-=-=-=`);

// function m1(f) {
//   return function (a) {
//     return a * f;
//   };
// }

// const m2 = (f) => (a) => a * f;

// const t1 = m1(3);
// const t2 = m2(10);

// console.log(t1(6) + ` ` + t2(6));

// let numbers = [1, 2, 3, 4, 5];

// let d = numbers.map((num) => num * 2);
// console.log(d);

// let event = numbers.filter((num) => num % 2 === 0);
// console.log(event);

// let sum = numbers.reduce((acc, item) => acc + item, 0);
// console.log(sum);

const numbers = [1, 3, 7, 12, 14, 22, 58];

const numberNum = prompt();
const numbersFilter = numbers.filter((num) => num > numberNum);
console.log(numbersFilter);

console.log(`=-=-=-=-=-=-=-=-=-=`);

function filterNum(arr, num) {
  return arr.filter((number) => number > num);
}
const num = 10;
const result = filterNum(numbers, 10);


console.log(result);
