/*



*/
// 1

const sum = (number1, number2) => number1 + number2;

console.log(sum(15, 20));

//2

const evenNumber = function (number) {
  if (typeof number === "number" && number % 2 === 0) {
    return `The number is even`;
  } else {
    return `The number is odd or it is not a number`;
  }
};

console.log(evenNumber(22));

//3

function stringLength(string) {
  return string.length;
}

console.log(stringLength('hello12424214212'));