/*



*/
"use strict";

// const person = {
//   name: `Alice`,
//   age: 12,
//   address: {
//     city: `London`,
//     id: undefined,
//   },
// };

// const idCode = person.address.id ?? `empty`;
// console.log(idCode);

const val1 = null;

const val2 = 200;

const result1 = val1 ?? console.log(`false`);

const result2 = val2 ?? `Default value`;

console.log(result2);
