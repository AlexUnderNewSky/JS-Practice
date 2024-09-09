/*



*/
"use strict";

const user = {
  city: `London`,
  tel: +441235123515,
  "hello world!": false,
};

console.log(user);
console.log(user["hello world"]);

let myName = `Serhii`;
myName = `Samael`;
console.log(myName);

const name = `Sehii Sosnytskyi`;

user[name] = true;

user.city1 = `Zaporishya`;

console.log(user);

let car = {
  brand: `Toyota`,
  model: `Corolla`,
  specs: {
    engine: {
      type: `V6`,
      reliability: `bad :D`,
      fuelEating: `As much as possible`,
    },
    hors: `300 (s gorki)`,
  },
};

console.log(car);
console.log(car.specs.engine.fuelEating);

let shop = {
  items: [`bread`, `milk`, `cucumber`],
};

console.log(shop.items);

const user4 = {
  add: function (a1, b1) {
    return a1 + b1;
  },
};

console.log(user4.add(4, 4));
