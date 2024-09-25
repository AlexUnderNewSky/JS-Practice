/*



*/
"use strict";

const h1Title = document.querySelector(`.h1`);
const input = document.querySelector(`.input`);
// h1Title.addEventListener(`click`, function () {
//   if (input.classList.contains(`input`)) {
//     document.querySelector(`body`).style.backgroundColor = `red`;
//   } else {
//     document.querySelector(`body`).style.backgroundColor = `green`;
//   }
// });

// h1Title.addEventListener(`click`, function () {
//   h1Title.classList.add(`color-blue`);
//   // input.classList.remove(`red`);
//   input.remove();
// });

const arr = [`apple`, `house`, `vehicle`];
const btn = document.querySelector(`.btn`);
const addBtn = document.querySelector(`.add`);
function getRandomWord() {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomWord = arr[randomIndex];
  return randomWord;
}

console.log(getRandomWord());

btn.addEventListener(`click`, function () {
  h1Title.textContent = getRandomWord();
});

addBtn.addEventListener(`click`, function () {
  arr.push(input.value);
  input.value = ``;
  console.log(arr);
});
