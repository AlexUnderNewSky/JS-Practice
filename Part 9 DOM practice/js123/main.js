/*



*/
"use strict";

const dialog = document.querySelector(`.dialog`);
const openModal = document.querySelector(`.open`);
const closeModal = document.querySelector(`.close`);
openModal.addEventListener(`click`, function () {
  dialog.showModal();
});
closeModal.addEventListener(`click`, () => {
  dialog.close();
});
