const func7 = function () {
  let a = 20;
  let c1 = 50;
  console.log(c1 - a);
};

function fn8() {
  console.log(`Func fn8`);
  func7();
}

fn8();

console.log("==============");

function fn10() {
  let a = 10;
  if (a === 10) {
    console.log(`Hello World!`);
  }
}

fn10();
fn10();
fn10();
fn10();

function fn10() {
  console.log(`Salam!`);
}

console.log("==============");

let a7 = 100;

function fn11() {
  if (a7 <= 100) {
    console.log(`True`);
  }
}
fn11();

console.log("==============");

let d2 = 10;

const fn12 = function () {
//   let d2 = 10;
  d2++;
  console.log(d2);
};

fn12();
fn12();
fn12();
fn12();