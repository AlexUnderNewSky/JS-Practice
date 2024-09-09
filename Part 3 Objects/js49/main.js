/*



*/
"use strict";

// let user = {};
// // let user1 = new Object();

// console.log(user);
// // console.log(user1);

const person = {
  name: `Serhii`,
  age: 29,
  hobbies: `programming and playing games`,
};

console.log(person);
console.log(person["hobbies"]);

person.account = true;

console.log(person);

delete person.hobbies;

console.log(person.hobbies);

console.log(`===========`);
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

const user2 = {
  age: 55,
};

user2.age = 33;
console.log(user2.age);