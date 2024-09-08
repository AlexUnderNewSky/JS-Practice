/*



*/

function fnAdd(a, b) {
  return a + b;
}

const result1 = fnAdd(2, 135);
console.log(result1);

const addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(10, 30));

const s1 = (a) => a * a;

console.log(s1(20));

const s2 = () => {
  console.log(`Hello World!`);
};

s2();

const s3 = () => {
  const s4 = () => {
    console.log(`I'm function!`);
  };
  s4();
};
s3();

const s5 = (num) => (num % 2 === 0 ? `Even` : `Odd`);

console.log(s5(2));

function s6(num) {
  if (num % 2 === 0) {
    return console.log(`Even`);
  } else {
    return console.log(`Odd`);
  }
}

s6(22);

function s7(num) {
  return num % 2 === 0 ? `Even` : `Odd`;
}

console.log(s7(21));