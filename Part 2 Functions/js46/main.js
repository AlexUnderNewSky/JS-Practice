/*



*/

let message = `Hello JavaScript`;

const myMessage = () => console.log(message);

myMessage();

{
  const test = `Hello 1`;
  console.log(test);
  {
    const test = `Hello 2`;
    console.log(test);
    {
      const test = `Hello 3`;
      console.log(test);
      console.log(message);
    }
  }
}

console.log(`===============`);
function myMessage1() {
  const message = `Salam JS!`;
  console.log(message);

  for (let i = 0; i <= 5; i++) {
    const message = `Cycle # ${i}`;
    console.log(message);
  }
}

myMessage1();

console.log(`==============`);

const hello = `Hi!`;

function sayHello(message, count = 5) {
  const m = message;
  let c1 = 1;
  while (c1 <= count) {
    console.log(`${m} == ${c1}`);
    c1++;
  }
}

sayHello(hello, 7);

console.log(`==============`);

function r1(a, b) {
  return a * b;
}

console.log(r1(20, 3));

const sum = r1(50, 3);
console.log(sum);

console.log(`===========`);

const ageFn = (age) => {
  if (typeof age !== "number") {
    return `Age is incorrect`;
  }
  if (age < 1 || age > 140) {
    return `That age doesn't exist `;
  }

  if (age < 18) {
    return `Underage`;
  }

  return `You have been validated successfully`;
};

console.log(ageFn(1));
