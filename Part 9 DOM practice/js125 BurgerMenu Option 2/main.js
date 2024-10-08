/*



*/
"use strict";

const hamburger = document.querySelector(`.hamburger`);
const navMenu = document.querySelector(`.nav-menu`);

hamburger.addEventListener(`click`, () => {
  hamburger.classList.toggle(`active`);
  navMenu.classList.toggle(`active`);
});

// document.querySelectorAll(`.nav-link`).forEach((el) => {
//   el.addEventListener(`click`, () => {
//     hamburger.classList.remove(`active`);
//     navMenu.classList.remove(`active`);
//   });
// });

navMenu.addEventListener(`click`, function (event) {
  if (event.target.classList.contains(`nav-link`)) {
    hamburger.classList.remove(`active`);
    navMenu.classList.remove(`active`);
  }
});
