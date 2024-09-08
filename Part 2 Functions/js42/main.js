/*



*/

const myFn = function () {
  console.log(`Hello World!`);
};

myFn();

const numbers = [1, 2, 3];

numbers.forEach(function (num) {
  console.log(num + 20);
});
console.log(`=============`);
numbers.forEach((item) => console.log(item * 5));

console.log(`=============`);

const add1 = function (a, b) {
  return a + b;
};

console.log(add1(20, 20));

console.log(`=============`);

const add2 = (a, b) => a + b;

console.log(add2(2, 3));

// document.querySelector("h1").addEventListener("click", function () {
//   this.style.backgroundColor = "purple";
// });

document.querySelector("h1").addEventListener("click", () => {
  document.querySelector("h1").style.backgroundColor = "blue";
});

console.log(`=================`);

function calc(a, b, c) {
  return a(b, c);
}

const result = calc(
  function (x, y) {
    return x * y;
  },
  20,
  30
);

console.log(result);
