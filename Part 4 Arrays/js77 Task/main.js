/*



*/
"use strict";

const users = [
  { id: 1, name: `Serhii`, age: 23, country: `Bulgaria` },
  { id: 6, name: `Ziko`, age: 32, country: `USA` },
  { id: 3, name: `Derek`, age: 2, country: `Canada` },
  { id: 4, name: `Mikolash`, age: 43, country: `Czech` },
  { id: 5, name: `Gregosh`, age: 56, country: `Poland` },
  { id: 2, name: `Ruby`, age: 31, country: `USA` },
];

const filteredUsers = users
  .filter((age) => age.age > 30)
  .filter((country) => country.country === `USA`)
  .sort((a, b) => a.id - b.id);

console.log(filteredUsers);
console.log(users);
