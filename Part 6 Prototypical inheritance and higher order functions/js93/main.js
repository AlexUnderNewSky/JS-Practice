/*



*/
"use strict";

// const a = { age: 25 };
// console.log(a);
// console.log(a.age);

const a = {
  age: 22,
  fn1: function () {
    console.log(`Hello`);
  },
};

const a1 = Object.create(a);

a1.fn1();
console.log(a1);

console.log(`=-=-=-=-=-=-=-=-=`);

const obj1 = {
  name: `Costa`,
  myMethod() {
    console.log(`Hello World`);
  },
};

const obj2 = Object.create(obj1);
obj2.myMethod();
obj2.city = `London`;
console.log(obj2);

console.log(obj1.city);

console.log(obj2.city);

obj1.bol = true;

console.log(obj2.bol);

console.log(`=-=-=-=-=-=-=-=-=`);

const cat = {
  speak() {
    console.log(`Mew`);
  },
  paws() {
    console.log(`fluffy`);
  },
};

const businka = Object.create(cat);
businka.breed = `Siamese`;
businka.skeleton = function () {
  console.log("flexible");
};
businka.speak();

console.log(businka);
console.log(cat);
businka.skeleton();
cat.skeleton();
