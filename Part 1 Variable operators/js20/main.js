let numb = -10;
let sumNumber =
  numb >= 0
    ? console.log(`The number is positive`)
    : console.log(`The number is negative`);

console.log(`=================`);

let age1 = 25;
let age2 = 29;

let oldAge = age1 > age2 ? age1 : age2;

console.log(`Old age ${oldAge}`);

console.log(`=================`);

let x = 10;

let types =
  typeof x === "number"
    ? `Variable x is a number`
    : `Variable x is not a number`;

console.log(types);
console.log(typeof x);

console.log(`=================`);

let numz = 15;

let results =
  numz % 2 === 0
    ? `The number is even`
    : numz > 0
    ? `Positive number`
    : `Negative and odd`;
console.log(results);
