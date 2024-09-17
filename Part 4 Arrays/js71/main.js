/*



*/
"use strict";

const numbers3 = [1, 2, 3, 4, 5];

const f = numbers3.filter((num) => num < 3);

console.log(f);

console.log(`======================`);

const names = [`Vasiliy`, `Alexander`, `Ivan`, `Renat`, `kate`, `Sanya`];

const f1 = names.filter((names) => names.length < 5);
console.log(f1);

console.log(`======================`);

const products = [
  { price: 1, name: `Apple` },
  { price: 2, name: `Banana` },
  { price: 3, name: `Kiwi` },
  { price: 4, name: `Cherry` },
];

const f3 = products.filter(function (product) {
  return product.price > 2;
});

console.log(f3);

console.log(`=================`);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const even = numbers.filter((num) => num % 2 === 0);

console.log(even);
