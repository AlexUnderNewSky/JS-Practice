/*



*/

function fn30(a, b) {
  const sum = a + b;
  return sum;
}

let a = fn30(20, 20);
console.log(a);

console.log(500 + fn30(2, 2));

const fn31 = function (b, c) {
  return b * c;
};
console.log(`==============`);
console.log(fn31(2, 5));
console.log(fn30(25, 30) + fn31(8, 7));

const result = fn30(2, 1) + fn31(2, 3);
console.log(`==============`);
console.log(result);

console.log(`==============`);

function myFN(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(myFN(3));

const g1 = myFN(50);
const g2 = myFN(49);

console.log(`${g1} | ${g2}`);

function test() {
  return `HI!`;
}

console.log(test());

function checkPositive(number) {
  if (number < 0) {
    return `Negative number`;
  }
  return `Positive number`;
}

console.log(checkPositive(-11));