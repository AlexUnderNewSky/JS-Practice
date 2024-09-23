/*



*/
"use strict";
function b1(el) {
  let bol = true;

  function t1() {
    bol = !bol;
    el.style.opacity = bol ? 1 : 0;
    setTimeout(t1, 500);
  }
  t1();
}
const cursorEl = document.querySelector(`h1`);

b1(cursorEl);
