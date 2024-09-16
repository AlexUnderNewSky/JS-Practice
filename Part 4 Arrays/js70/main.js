/*



*/
"use strict";

const numbers1 = [1, 2, 3, 4, 5];

const stringA = numbers1.map((number) => {
  return number.toString();
});

console.log(numbers1);
console.log(stringA);

console.log(`==================`);

// const a = 10;
// console.log(typeof a);
// const b = a.toString();
// console.log(b);
// console.log(typeof b);

const numbers2 = [1, 2, 3, 4, 5];
const double = numbers2.map((num) => num * 10);

console.log(double);

console.log(`===============`);

const users = [
  { id: 1, name: `Serhii` },
  { id: 2, name: `Jane` },
  { id: 3, name: `Alex` },
];

const userId = users.map((id) => id.id);

console.log(userId);

const userId1 = users.map((user) => {
  return `${user.id} - ${user.name}`;
});

console.log(userId1);
