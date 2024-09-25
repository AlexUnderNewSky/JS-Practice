/*



*/
"use strict";

// let newElement = document.createElement(`div`);
// newElement.textContent = `New Element`;

// let parentElement = document.querySelector(`.wrapper`);

// parentElement.appendChild(newElement);
// parentElement.prepend(newElement)
// parentElement.removeChild(newElement)

// document.addEventListener('DOMContentLoaded', function() {
//   const h1 = document.querySelector('.h1');
//   let parentH1 = h1.parentNode;
//   console.log(parentH1);
// });

let text = document.querySelector(`.wrapper`);

text.insertAdjacentHTML(
  `beforebegin`,
  `
    <div>New element before element |> beforebegin <|</div>
  `
);

text.insertAdjacentHTML(
  `afterbegin`,
  `
    <div>New element to the beginning of the element |> afterbegin <|</div>
  `
);

text.insertAdjacentHTML(
  `beforeend`,
  `
    <div>New element to the end of the element |> beforeend <|</div>
  `
);

text.insertAdjacentHTML(
  `afterend`,
  `
    <div>New element after the element |> afterend <|</div>
  `
);
