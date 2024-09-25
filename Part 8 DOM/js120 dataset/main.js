/*



*/
"use strict";

// const userElement = document.querySelector(`.user`);
// console.log(userElement.dataset);
// console.log(userElement.dataset.name);

// const myAge = userElement.dataset.age;
// console.log(myAge);

const btn = document.querySelector(`.btn`);

const parent = btn.closest(`.d1`);

parent.addEventListener(`click`, () => {
  console.log(`Clicked on parent with class - d1`);
});
