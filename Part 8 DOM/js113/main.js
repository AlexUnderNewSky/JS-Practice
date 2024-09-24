/*



*/
"use strict";

// const titleH1 = document.getElementById("title");
// console.log(titleH1);

console.log(document.getElementById(`title`));

// console.log(document.querySelector(`p`));

const p = document.querySelectorAll(`p`);

// Array.from(p).forEach((el) => {
//   el.textContent = `Hello`;
// });

// for (let val of p) {
//   console.log(val);
//   val.textContent = `Hello World`;
// }

// for (let val of p) {
//     console.log(val);
//     val.innerHTML = `<b>Hello World</b>`;
//   }

// for (let val of p) {
//   console.log(val);
//   val.innerText = `<b>Hello World</b>`;
// }

console.log(document.getElementsByClassName(`d1`));
console.log(document.getElementsByTagName(`p`));
console.log(document.querySelectorAll(`p`));

console.log(document.querySelector(`.d1`));