/*



*/
"use strict";

// const input = document.querySelector(`.input`);
// const list = document.querySelector(`.d6`);

// input.addEventListener(`keypress`, function (event) {
//   if (event.key === `Enter` && input.value.trim() !== ``) {
//     const taskText = input.value.trim();
//     input.value = ``;

//     const div = document.createElement(`div`);
//     div.textContent = taskText;

//     const deleteBtn = document.createElement(`button`);
//     deleteBtn.textContent = `Delete`;
//     deleteBtn.classList.add(`delete`);

//     div.append(deleteBtn);
//     list.append(div);
//   }
// });

// list.addEventListener(`click`, function (event) {
//   if (event.target.classList.contains(`delete`)) {
//     event.target.parentElement.remove();
//   }
// });

// const parentElement = document.querySelector(`.wrapper`);

// parentElement.addEventListener(`click`, function (event) {
//   if (event.target.classList.contains(`h1`)) {
//     console.log(`Element with class h1 is pressed`);
//   }
// });
// window.addEventListener(`keypress`, function (event) {
//   console.log(event.key);
// });

// const d1 = document.querySelector(`.d1`);
// const d2 = document.querySelector(`.d2`);
// const d3 = document.querySelector(`.d3`);

// function randomColor(content) {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   content.style.backgroundColor = `rgb(${red},${green},${blue})`;
//   return content;
// }

// d1.addEventListener(`click`, function () {
//   randomColor(d1);
//   console.log(`Event triggered on parent DIV 1 element`);
// });
// d2.addEventListener(`click`, function () {
//   randomColor(d2);
//   console.log(`Event triggered on daughter DIV 2 element`);
// });
// d3.addEventListener(`click`, function () {
//   randomColor(d3);
//   console.log(`Event triggered on daughter DIV 3 element`);
// });

const links = document.querySelectorAll(`.link`);

// console.log(links);

// links.forEach((el) => {
//   el.addEventListener(`click`, function (event) {
//     event.preventDefault();
//     el.classList.toggle(`k1`);
//   });
// });

console.log(`=-=-=-=-=-=-=-=-=-=`);

document.querySelector(`.nav`).addEventListener(`click`, function (e) {
  e.preventDefault();
  if (e.target.classList.contains(`link`)) {
    e.target.classList.toggle(`k1`);
    console.log(`Link clicked`);
  }
});
