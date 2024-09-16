/*



*/
"use strict";

const arr = [1, `hello`, true, `world`];

for (const element of arr) {
  console.log(element);
}

console.log(`===========`);

const number = [1, 2, 3, 4, 5];

let sum = 0;

for (const num of number) {
  sum += num;
  console.log(sum);
}
console.log(sum);
