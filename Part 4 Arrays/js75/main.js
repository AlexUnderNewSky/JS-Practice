/*



*/
"use strict";

// const b2 = [1, 2, 5, 3, 4, 43, 123];
// const b3 = b2.toSorted((a, b) => a - b);
// console.log(b2);
// console.log(b3);

const b4 = [1, 2, 21, 19, 3, 10, 4];

const b5 = b4.sort((a, b) => a - b);
console.log(b4);

let str = [`a`, `b`, `A`, `B`, `c`, `C`];

str.sort();
console.log(str);

const losPinguinos = [
  { name: `Kawasaki`, age: 27 },
  { name: `Krico`, age: 31 },
  { name: `Cago`, age: 17 },
  { name: `Estriper`, age: 78 },
];

const newLosPinguinos = losPinguinos.sort(
  (minAge, maxAge) => minAge.age - maxAge.age
);

console.log(newLosPinguinos);

console.log(`===============`);

const num = [1, 10, 3, 5, 7, 21, 6];

const numCopy = num.toSorted((a, b) => {
  return a - b;
});

console.log(num);
console.log(numCopy);

console.log(`Objects losPinguinos and newLosPinguinos a equal? 
Answer: ${Object.is(losPinguinos, newLosPinguinos)}`);
