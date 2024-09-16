/*



*/
"use strict";

const user = {
  name: `John`,
  address: null,
};

const city = user.address?.city ?? console.log(`City is not defined`);

const users = {
  people: 31232,
  department1: {
    department2: {
      people: 1200,
    },
    department3: {
      people: 400,
      city: `London`,
    },
  },
};

console.log(
  user.department1?.department2?.country?.city ?? `There is no such property`
);

console.log(
  users.department1?.department2?.people ?? `People in department2 is\'nt exist`
);
