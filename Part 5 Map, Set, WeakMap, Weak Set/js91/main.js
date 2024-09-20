/*



*/
"use strict";

// let obj = { name: `Costa` };

// obj = null;

// console.log(obj);

// let obj2 = {};
// let obj3 = {};
// obj2.car = `mini`;

// obj3 = obj2;

// console.log(obj2);
// console.log(obj3);

const weak1 = new WeakMap();
console.log(weak1);

console.log(`=-=-=-=-=-=-=-=`);

const weak2 = new WeakMap();
const obj = {};
weak2.set(obj, `Hello`);
console.log(weak2);
console.log(weak2.get(obj));
console.log(weak2.has(obj));
console.log(weak2.delete(obj));
console.log(weak2);

console.log(`=-=-=-=-=-=-=-=`);

const persons = new WeakMap();

const city = {};
const myName = {};

persons.set(city, `London`).set(myName, `Costa`);

console.log(persons.get(myName));

console.log(persons.has(myName));

persons.delete(myName);
console.log(persons);
