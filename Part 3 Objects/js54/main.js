/*



*/
"use strict";

// const obj1 = {
//   color: `cyan`,
//   age: 15,
//   border: `2px`,
// };

// const obj2 = obj1;

// obj2.age = 40;
// obj2.outline = `none`;

// console.log(obj1);
// console.log(obj2);

// const obj1 = {
//   color: `cyan`,
//   age: 15,
//   border: `2px`,
// };

// const obj2 = Object.assign({}, obj1);

// obj2.age = 40;
// obj2.outline = `none`;

// console.log(obj1);
// console.log(obj2);

// let obj1 = { name: `Serhii` };
// let obj2 = {};

// Object.assign(obj2, obj1);

// console.log(obj1);
// console.log(obj2);

// let obj1 = { name: `Serhii` };

// const obj3 = { name: `Anna`, age: 18 };

// const obj2 = Object.assign({}, obj1, obj3)

// console.log(obj2);

const fz = `size`;

const obj1 = {
  age: 29,
  city: `London`,
  colors: {
    red: `#ff0000`,
    black: `#000`,
  },
};

const obj2 = Object.assign({}, obj1);

obj1[fz] = `100px`;
obj2.colors.white = `#fff`;

console.log(obj1);

console.log(obj2);
