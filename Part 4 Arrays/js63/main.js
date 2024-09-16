/*



*/
"use strict";

const arr = [];

console.log(arr);

const arr1 = [
  1,
  `two`,
  true,
  { key: `value` },
  () => {
    console.log(`Hi!`);
  },
];

console.log(arr1);

const arr3 = [1, 2, 100, 200, 500];

console.log(arr3[4]);

const fruits = [`apple`, false, { city: `London` }];

console.log(fruits[1]);
fruits[1] = `banana`;
fruits[2] = `kiwi`;
console.log(fruits);

const cars = [`Toyota`, `Honda`, `Mini`];

console.log(cars);
console.log(cars.length);

const arr5 = [1, 2, `hello`];
arr5.push(10, undefined, { key: `h1` });

console.log(arr5);
arr5.pop();
console.log(arr5);

const f1 = [`apple`, false, 1, 2];

console.log(f1.indexOf(10));

const index = f1.indexOf(1);

console.log(index);

const newArr = [1, 2, 3];

const a1 = newArr[0]

newArr[0] = true;

console.log(newArr);
console.log(a1);
