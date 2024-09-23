/*



*/
"use strict";

function randomColor() {
  const letters = `0123456789ABCDEF`;
  let color = `#`;
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(`%cColor: ${color}`, `color: ${color};`);
  return color;
}

function color2() {
  const colorBody = document.querySelector(`body`);
  colorBody.style.backgroundColor = randomColor();
}

// setInterval(color2, 5);
