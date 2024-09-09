/*



*/

function fn11() {
  let a = `I'm external variable`;
  function fn12() {
    console.log(a);
  }
  return fn12;
}
fn11();

const myFn = fn11();

myFn();

function g1(g) {
  return function (name) {
    console.log(g + ", " + name);
  };
}

const gHello = g1("Hello");

gHello("JavaScript");
