/*



*/
"use strict";

// const lang = `JavaScript`;

// const fn1 = () => {
//   console.log(`Hello ${lang}`);
// };

// // setInterval(fn1, 1000);

// setInterval(() => {
//   console.log(`One second pass`);
// }, 1000);

// const f1 = (name) => console.log(`Hello ${name}`);
// const userName = `John`;
// setInterval(f1, 1500, userName);

function printMessage() {
  console.log(`Hello World`);
}

const p = setInterval(printMessage, 1000);

setTimeout(() => {
  clearInterval(p);
  console.log(`6 seconds passed`);
}, 6000);
