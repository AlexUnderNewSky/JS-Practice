/*



*/
"use strict";

// function fn1() {
//   console.log(`Hello World!`);
// }

// setTimeout(fn1, 1000);

// setTimeout(function () {
//   console.log(`Hi World`);
// }, 2000);

// function fn2(name) {
//   console.log(`Hi, ${name}`);
// }

// const myName = `Alice`;
// setTimeout(fn2, 3000, myName);

// function sayHi() {
//   console.log(`JavaScript`);
// }
// setTimeout(sayHi, 2000);
// setTimeout(sayHi, 3000);

// const time1 = setTimeout(sayHi, 4000);
// clearTimeout(time1);

function s1() {
  console.log(`1`);
}
function s2() {
  console.log(`2`);
}
function s3() {
  console.log(`3`);
}

setTimeout(() => console.log(`4`), 4000);

function s5() {
  console.log(`5`);
}

const s1Function = setTimeout(s1, 1000);
const s2Function = setTimeout(s2, 2000);
const s3Function = setTimeout(s3, 3000);
const s5Function = setTimeout(s5, 5000);

clearTimeout(s3Function);
