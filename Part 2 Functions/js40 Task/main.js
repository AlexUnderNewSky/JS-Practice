/*



*/

function isEven(num) {
  if (num % 2 === 0) {
    return console.log(`Even`);
  } else if (num % 2 !== 0) {
    return console.log(`Odd`);
  } else {
    return console.log(`Error`);
  }
}
isEven();

const isEvenArrow = (num) => num % 2 === 0 ? console.log(`Even`) : console.log(`Odd`);
isEvenArrow(24);