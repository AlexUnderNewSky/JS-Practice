/*



*/
"use strict";

// function fn1(par) {
//   const n = document.querySelector(`.d1`);
//   n.textContent = par;

//   setTimeout(function () {
//     n.remove();
//   }, 3000);
// }
// fn1(`Hello World`);

function fn4() {
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const d1 = document.querySelector(`.d1`);
  d1.textContent = `${hours}:${minutes}:${seconds}`;
  console.log(`${hours}:${minutes}:${seconds}`);
}
// setInterval(fn4, 1);

const num = `9`;

const numUpdate = num.padStart(3, `0`);

console.log(numUpdate);

const card = `3188`;
const cardUpdate = card.padStart(16, `*`);
console.log(cardUpdate);
