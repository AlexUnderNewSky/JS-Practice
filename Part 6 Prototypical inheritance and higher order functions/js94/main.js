/*



*/
"use strict";

// const a = {};
// console.log(a.__proto__);

// console.log(`=-=-=-=-=-=-=-=-=-=`);

// const obj = {};
// const proto = Object.getPrototypeOf(obj);
// console.log(proto);

// proto.city = `London`;
// proto.myFn = function () {
//   console.log(`hello world!`);
// };
// console.log(obj.city);
// console.log(proto);
// obj.myFn();

// console.log(`=-=-=-=-=-=-=-=-=-=`);

const obj = {};
const proto = {
  greet: function () {
    console.log(`hello`);
  },
};

Object.setPrototypeOf(obj, proto);

proto.city = `London`;

console.log(obj);

obj.age = 25;
console.log(proto);

console.log(`=-=-=-=-=-=-=-=-=-=`);

const arr = [1, 2, 3];

const arr2 = arr.map((el) => el + 20);
console.log(arr2);
