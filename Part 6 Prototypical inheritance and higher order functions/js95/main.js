/*



*/
"use strict";

const obj = { age: 23 };
console.log(obj);

const arr = [1, 2, 3];
console.log(arr);

const obj2 = new Object({ car: true });
obj2.name = `Costa`;
obj2.age = 15;
console.log(obj2);

const arr1 = new Array(0, 1, 2, 3, 4, 5, 6);
for (let i = 7; i < 201; i++) {
  arr1.push(i);
}
console.log(arr1);
