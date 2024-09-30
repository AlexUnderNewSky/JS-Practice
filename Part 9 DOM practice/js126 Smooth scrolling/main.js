/*



*/
"use strict";

// const hamburger = document.querySelector(`.hamburger`);
// const navMenu = document.querySelector(`.nav-menu`);

// hamburger.addEventListener(`click`, () => {
//   hamburger.classList.toggle(`active`);
//   navMenu.classList.toggle(`active`);
// });

// document.querySelectorAll(`.nav-link`).forEach((el) => {
//   el.addEventListener(`click`, () => {
//     hamburger.classList.remove(`active`);
//     navMenu.classList.remove(`active`);
//   });
// });

// navMenu.addEventListener(`click`, function (event) {
//   if (event.target.classList.contains(`nav-link`)) {
//     hamburger.classList.remove(`active`);
//     navMenu.classList.remove(`active`);
//   }
// });

const navLinksHeader = document.querySelectorAll(`.nav__link`);

// for (let link of navLinksHeader) {
//   link.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     const href = this.getAttribute(`href`);
//     console.log(href);
//     document.querySelector(href).scrollIntoView({
//       behavior: `smooth`,
//     });
//   });
// }

// navLinksHeader.forEach((el) => {
//   el.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     const href = this.getAttribute(`href`);
//     document.querySelector(href).scrollIntoView({
//       behavior: `smooth`,
//     });
//   });
// });

// document.querySelector(`.nav__ul`).addEventListener(`click`, function (event) {
//   event.preventDefault();
//   if (event.target.classList.contains(`nav__link`)) {
//     document
//       .querySelector(event.target.getAttribute(`href`))
//       .scrollIntoView({ behavior: `smooth` });
//   }
// });

// document.getElementById(`top`).addEventListener(`click`, function (e) {
//   e.preventDefault();
//   document.querySelector(`.header`).scrollIntoView({ behavior: `smooth` });
// });
