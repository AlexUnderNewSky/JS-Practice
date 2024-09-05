// if (2 > 1) {
//   alert(`True`);
// } else {
//   console.log(`Lie`);
// }

let x = 10;

let result = x > 5 ? console.log(`True`) : console.log(`Lie`);

let message;
let result1 = x > 7 ? (message = `True`) : (message = `Lie`);

console.log(message);

// x > 9 ? console.log(`True`) : alert(`Lie`);

// console.log(2 > 1 ? alert(`True`) : console.log(`Lie`));

let nums = 6;
let sum =
  nums % 2 === 0
    ? console.log(`The number is even`)
    : console.log(`The number is odd`);
