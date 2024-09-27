/*



*/
"use strict";

const btnModalOpen = document.querySelector(`.btn`);
const modal = document.querySelector(`.modal`);
const modalClose = document.querySelectorAll(`.modal__close`);
const overlay = document.querySelector(`.overlay`);
const img = document.querySelector(`.img`);

function delTab() {
  const focus = document.querySelectorAll(
    `button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])`
  );

  focus.forEach((element) => {
    if (!modal.contains(element)) {
      element.setAttribute(`tabindex`, `-1`);
    }
  });
}

console.log(`=-=-=-=-=-=-=-=-=-=`);

const modalOpen = () => {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
  delTab();
};

function closeModal() {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
}

btnModalOpen.addEventListener(`click`, modalOpen);

modalClose.forEach((val) => {
  val.addEventListener(`click`, () => {
    closeModal();
  });
});

overlay.addEventListener(`click`, () => {
  closeModal();
});

document.addEventListener(`keydown`, function (event) {
  if (event.key === `Escape`) {
    closeModal();
  }
});

//random image
function randomNumber() {
  const num = Math.trunc(Math.random() * (700 - 600) + 1) + 600;
  console.log(num);
  img.setAttribute(`src`, `https://picsum.photos/${num}`);
}

document
  .querySelector(`.modal__btn-random`)
  .addEventListener(`click`, randomNumber);
