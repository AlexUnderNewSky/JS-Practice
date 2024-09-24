/*



*/
"use strict";

const h1Title = document.querySelector(`.d1`);
const input = document.querySelector(`.input`);
// console.log(h1Title);

// function myFn() {
//   this.textContent = `we are pressed button`;
// }

// h1Title.addEventListener(`click`, myFn);

function fn1() {
  h1Title.style.color = `#fff`;
}

function fn2() {
  h1Title.style.color = `yellow`;
}

h1Title.addEventListener(`mouseover`, fn1);
h1Title.addEventListener(`mouseout`, fn2);

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=`);

input.addEventListener(`input`, function (event) {
  h1Title.textContent = event.target.value;

  if (input.value === ``) {
    h1Title.textContent = `DOM`;
  }
});

console.log(`=-=-=-=-=-=-=-=-=-=-=-=-=`);

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

document.querySelector(`body`).addEventListener(`click`, randomColor);

// h1Title.classList.add(`EnterClassHere`) ЛУЧШЕ ТАК ПИСАТЬ!
