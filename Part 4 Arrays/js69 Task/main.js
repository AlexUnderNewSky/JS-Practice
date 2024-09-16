/*



*/
"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = [];

numbers.forEach((num, index) => {
  res.push(Math.pow(num, 2));
  console.log(`Квадрат числа: ${numbers[index]}: ${res[index]}`);
});
