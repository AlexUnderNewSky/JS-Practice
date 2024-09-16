/*



*/
"use strict";

const obj = {
  name: `Serhii`,
  day: 2,
  sayHello: function () {
    console.log(true);
  },
  openModal() {
    return false;
  },
};

let person = {
  name: `Costa`,
  age: 32,
  isAdmin: false,
};

const keys = Object.keys(obj);
const keys1 = Object.keys(person);
const keys2 = Object.values(obj);
const keys3 = Object.entries(person);

// console.log(`keys = `);
// console.log(keys);
// console.log(`keys1`);
// console.log(keys1);
// console.log(`values = `);
// console.log(keys2);
// console.log(`entries = `);
// console.log(keys3);
// console.log(`hasOwnProperty = `);
// console.log(person.hasOwnProperty("isAdmin"));
// console.log(person);

// console.log(`freeze = `);

// person.age = 22;


// for (let key of keys1) {
//   console.log(`${key} - ${person[key]}`);
// }
// console.log(person);
// Object.seal(person);

// person.age = 30;

// Object.preventExtensions(person);

// person.name = `Dada`;
// console.log(person);
// delete person.isAdmin;
// console.log(person);

// Object.freeze(person);
// console.log(person);
// console.log(Object.isFrozen(person));

console.log(Object.isSealed(person));

