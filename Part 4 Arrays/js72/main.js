/*



*/
"use strict";

const numbers5 = [1, 2, 3, 4, 5];

const f4 = numbers5.find((num) => num === 3);

console.log(f4);
console.log(numbers5);

console.log(`================`);

const products = [
  { id: 1, name: `Apple` },
  { id: 2, name: `Banana` },
  { id: 3, name: `Kiwi` },
  { id: 4, name: `Cherry` },
];

const f5 = products.find((product) => product.id === 2);

console.log(f5);

console.log(`================`);

const products2 = [
  { price: 1, name: `Apple` },
  { price: 2, name: `Banana` },
  { price: 3, name: `Kiwi` },
  { price: 4, name: `Kiwi` },
  { price: 5, name: `Cherry` },
];

const f6 = products2.find(
  (product) => product.price > 2 && product.name.includes(`wi`)
);

console.log(f6);

console.log(`===============`);

const b4 = [`hello`, `archer`, `huntsman`, 1, 2];

console.log(b4.includes(``));

console.log(`===============`);

const num1 = [1, 2, 3, 4, 5];

const g1 = num1.includes(2, 1);
const g2 = num1.includes(2, 2);

console.log(g1);
console.log(g2);
