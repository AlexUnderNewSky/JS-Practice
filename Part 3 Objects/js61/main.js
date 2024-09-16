/*



*/
"use strict";

// const user = {
//   name: `Serhii`,
//   address: {
//     city: `Plovdiv`,
//   },
// };

// let a1 = user.address?.city;
// console.log(a1);

const person = {
  name: `Serhii`,
  address: {
    city: `London`,
  },
};

if (person.address?.city) {
  console.log(`City is exist : ${person.address.city}`);
}else{
    console.log(`City is not defined`);
}
