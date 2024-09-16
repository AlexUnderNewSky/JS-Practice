/*



*/
"use strict";

const arr1 = [`Hi`, `banana`, `apple`, false, `car`];

// const sliceArr1 = arr1.slice(1, 4);
const sliceArr1 = arr1.slice(0, -1);
console.log(sliceArr1);
console.log(arr1);

const persons = [
  { name: `Serhii`, age: 23 },
  { name: `Bob`, age: 13 },
  { name: `Alex`, age: 53 },
];

const slicePersons = persons.slice(1, 3);
console.log(slicePersons);