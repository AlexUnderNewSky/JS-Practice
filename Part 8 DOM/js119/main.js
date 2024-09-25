/*



*/
"use strict";

const link = document.querySelector(`.link`);
link.setAttribute(`href`, `https://www.youtube.com`);

const h1 = document.querySelector(`.h1`);
h1.setAttribute(`class`, `title`);

h1.setAttribute(`data-`, `price`);

console.log(`=-=-=-=-=-=-=-=-=-=-=-=`);

const getAttribute = link.getAttribute(`href`);
console.log(getAttribute);

console.log(h1.getAttribute(`data-`));
