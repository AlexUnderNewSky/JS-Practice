/*



*/
"use strict";

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => {
  return `Квадрат числа: ${number}: ${Math.pow(number, 2)}`;
});

console.log(squares);