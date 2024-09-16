/*



*/
"use strict";

// const number = [1, 2, 3, 4, 5];

// number.forEach((item, index, arr) => {

// })

// const arr3 = [1, 2, 3, 4];

// arr3.forEach((item, index, arr) => {
//   console.log(`item: ${item}, index: ${index}, array: ${arr}`);
// });

const arr4 = [`C#`, `JavaScript`, `Python`, `C++`];

arr4.forEach((item, index) => {
  console.log(`index: ${index}, item: ${item}`);
});

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];

const s1 = [];

numbers1.forEach((num) => {
  s1.push(num * num);
});

console.log(numbers1);
console.log(s1);