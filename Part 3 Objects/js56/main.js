/*



*/
"use strict";

const a1 = {
  name: `Serhii`,
  age: 30,
  isStudent: {
    city: `London`,
    color: `blue`,
  },
};

// const a2 = JSON.stringify(a1);
// const a3 = JSON.parse(a2);

const a2 = JSON.parse(JSON.stringify(a1));

a2.isStudent.color = `red`;
delete a2.isStudent.city;

console.log(a1);

console.log(a2);
// console.log(a3);
