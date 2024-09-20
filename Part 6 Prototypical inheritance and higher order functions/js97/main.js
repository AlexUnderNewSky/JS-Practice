/*



*/
"use strict";

// const obj1 = {
//   name: `Serhii`,
//   mythod(lastName) {
//     console.log(`Hello ${this.name} ${lastName}`);
//   },
// };

// const obj2 = {
//   name: `Kate`,
// };

// const a1 = obj1.mythod;

// a1.call(obj1, `Sosnytskyi`);
// a1.call(obj2, `Markova`);

// function fn1(a, b) {
//   return a + b;
// }

// console.log(fn1.call(null, 5, 5));

// console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=`);

// const myName = [`Kancev`];
// a1.apply(obj1, myName);
// a1.apply(obj2, myName);

// const arr2 = [`Jamak`, `Eshkere`, "Mamu"];

// const a2 = obj1.mythod.bind(obj1, arr2[2]);
// const a3 = obj1.mythod.bind(obj2, `Kanceva`);

// a2();
// a3();

const obj = {
  language: `C#`,
  arr: [],
  myMethod(par1, par2) {
    console.log(
      `I'm programmer of ${this.language} language, my name is: ${par1}, my age is: ${par2}`
    );
    this.arr.push({
      name: par1,
      lang: `${this.language}`,
    });
  },
};

const obj2 = {
  language: `JavaScript`,
  arr: [],
};

const objCopy = obj.myMethod;

objCopy.call(obj, `Serhii`, 23);
objCopy.call(obj2, `Bob`, 34);

console.log(obj.arr);
console.log(obj2.arr);

console.log(`=-=-=-=-=-=-=-=-=-=-=`);

const arr1 = [`Costa`, 22];

objCopy.apply(obj, arr1);

objCopy.call(obj2, ...arr1);

const a3 = obj.myMethod.bind(obj);
const a4 = obj.myMethod.bind(obj);

a3(`Banana`, 22);
a4(`Kiwi`, 22);
