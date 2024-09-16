/*



*/
"use strict";

// const arr1 = [1, 2, 3, false];

// const arr2 = [...arr1, 2, 3];

// console.log(arr1);
// console.log(arr2);

// const arr3 = [10, 20, undefined, function () {}, {}, { age: 45 }];

// const [a1, s2, ...lastItems] = arr3;

// console.log(a1);

// console.log(lastItems);

// const obj1 = { name: `Serhii`, age: 23 };

// const obj2 = { ...obj1, country: `Bulgaria` };

// console.log(obj1);
// console.log(obj2);

// const objA = { open: 10, close: 21 };

// const objAcopy = { ...objA };

// console.log(objA === objAcopy);

// const objB = { open: true };

// const a1 = objB;
// console.log(objB === a1);

// const { name, ...rest } = { ...{ name: `Serhii`, age: 23 }, city: `Plovdiv` };

// console.log(name);
// console.log(rest);

const objTest = { time: 1200, color: `blue`, fz: `232px` };

const { time: t, ...rest } = { ...objTest, phone: false };

console.log(t);
console.log(rest);
