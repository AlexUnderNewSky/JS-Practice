/*



*/
"use strict";

// const arr1 = [1, 2, 3, false];

// const arr2 = [...arr1, 4, 5, 6, 7];

// console.log(arr1);
// console.log(arr2);
// console.log(`==================`);
// const arr3 = [10, 20, undefined, function () {}, {}, { age: 45 }];

// const [a1, s2, ...lastItems] = arr3;

// console.log(a1);
// console.log(lastItems);

// const obj1 = { name: `John`, age: 44 };

// const obj2 = { ...obj1, country: `USA` };
// console.log(obj2);

// console.log(`==========`);

// const objA = { open: 10, closed: 21 };

// const objAcopy = { ...objA };

// console.log(objA === objAcopy);

// const objB = { open: true };

// const a1 = objB;

// console.log(objB === a1);

// const { name, ...rest } = { ...{ name: `Grisha`, age: 22 }, city: `London` };

// console.log(name, rest);

// console.log(rest);

const objTest = { time: 1200, color: `blue`, fz: `232px` };

const { time, ...rest } = { ...objTest, phone: false };

console.log(time);
console.log(rest);
