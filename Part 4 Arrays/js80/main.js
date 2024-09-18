/*



*/
"use strict";

const ages = [19, 24, 31, 35, 42];

const index = ages.findIndex((age) => age >= 30 && age <= 40);

console.log(index);

const users = [
  { id: 1, name: `Serhii` },
  { id: 2, name: `Nike` },
  { id: 3, name: `Bob` },
];

const index1 = users.find((user) => user.name === `Serhii`);

console.log(index1);

console.log(`============`);

const numbers = [10, 20, 30, 40, 500];

const index2 = numbers.findIndex((num) => num > 100);

console.log(index2);
