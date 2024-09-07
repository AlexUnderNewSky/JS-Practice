console.log(`============`);

const fn12 = function (a1, b1) {
  console.log(a1 + b1);
};

fn12(20, 20);
console.log(`============`);
fn12(`Hello`, ` JS`);

console.log(`============`);

const fn13 = function (a1, b1, c1) {
  console.log(a1 + b1 + c1);
};
fn13(20, 20, 45);
console.log(`============`);
fn13(50, 50);

console.log(`============`);

const fn14 = function (a1, a2, a3) {
  console.log(a1 + a2 + a3);
};

let num1 = 150,
  num2 = 250;

fn14(20, num1, num2);
console.log(`============`);

const fn15 = function (a1, a2, a3) {
  console.log(a1 + a2 + a3);
};

let num3 = 150,
  num4 = 250;

fn15(20, num3 * 3, num4 / 2);

console.log(`============`);

const h1 = document.querySelector("h1");

function fn16() {
  h1.textContent = `Hello World`;
}

function fn17() {
  h1.textContent = `JAVAScript`;
}

h1.addEventListener('mouseover', fn16)
h1.addEventListener('mouseout', fn17)