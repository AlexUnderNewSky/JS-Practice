/*



*/

function fn30(a, b) {
  return a + b;
}

console.log(fn30(20, 20));
fn30(20, 20);

const result = fn30(50, 50);
console.log(result);

console.log(`================`);

function typeHandler(value) {
  if (typeof value === "number") {
    return `Numbers`;
  } else if (typeof value === "string") {
    return `String`;
  } else {
    return `Error`;
  }
}

let a = 22;

console.log(typeHandler(a));

console.log(`=================`);

console.log(typeof true);

console.log(`=================`);

function fnTest() {
  let a = 'Hello World!'

  function innerFn() {
    return a
  }
  return innerFn();
}

let res1 = fnTest();

console.log(res1);
