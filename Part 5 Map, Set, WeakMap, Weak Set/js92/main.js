/*



*/
"use strict";

// const myWeakSet = new WeakSet();

// const obj1 = {};
// const obj2 = {};

// myWeakSet.add(obj1);
// myWeakSet.add(obj2);

// console.log(myWeakSet.has(obj1));
// myWeakSet.delete(obj1);

// console.log(myWeakSet);

const users = new WeakSet();

const obj1 = { name: `Costa` };
const obj2 = { name: `Bob` };

users.add(obj1);
users.add(obj2);

console.log(users.has(obj1));
console.log(users.has(obj2));

users.delete(obj1);
console.log(users.has(obj1));

console.log(users);
