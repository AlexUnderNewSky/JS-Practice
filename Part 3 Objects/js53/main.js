/*



*/

// const user = {
//   age: 1995,
//   calcAge() {
//     return 2024 - this.age;
//   },
// };

// console.log(user.calcAge());

// console.log(`=============`);

// function fn1() {
//   console.log(this);
//   return this;
// }

// fn1();

// console.log(fn1() === window);
"use strict";

// let obj = {
//   myMethod() {
//     return this;
//   },
// };

// console.log(obj.myMethod() === obj);

// document.querySelector("h1").addEventListener("click", function(){
//     this.style.backgroundColor = 'purple';
// });

// document.querySelector("h1").addEventListener("click", () => {
//     document.querySelector('h1').style.backgroundColor = 'purple';
// });

// const user = {
//   age: 1997,
//   myMethod() {
//     return () => {
//         return this;
//     }
//   },
// };

// console.log(user.myMethod()() === user);

const person = {
  age: 1899,
  myAge() {
    const a1 = () => {
      console.log(2024 - this.age);
    };
    a1();
  },
};

person.myAge();

console.log(`============`);

let person2 = {
  firstName: `Serhii`,
  lastName: `Sosnytskyi`,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person2.fullName());
