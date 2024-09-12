/*



*/
"use strict";

const obj1 = {
  name1: `Serhii`,
  age1: 23,
};

const { name1, age1 } = obj1;

console.log(name1);
console.log(age1);

console.log(obj1);

console.log(`==============`);

const obj2 = { name2: `Jacobs`, age2: 22 };

const { name2: myName, age2: myAge } = obj2;

console.log(myName);
console.log(myAge);

console.log(`===============`);

const obj3 = { name3: `Costa`, age3: 22 };

const { name3, city = `London` } = obj3;

console.log(city);
console.log(name3);

console.log(`=============`);

const printHandler = ({ name, age, phone }) => {
  console.log(`Name: ${name}, Age: ${age}, Phone number: +${phone}`);
};

const person = {
  name: `Serhii`,
  age: 23,
  phone: 359879988411,
};

printHandler(person);

console.log(`===================`);

const obj4 = {
  name4: `Inokentiy`,
  open: 10,
  styles: {
    display: `flex`,
    color: `pink`,
    fz: `42px`,
  },
};

const {
  name4,
  styles: { color, fz },
} = obj4;

console.log(name4);
console.log(fz);
console.log(color);

console.log(`===================`);

const users = [
  { id: 1, name: `Bob` },
  { id: 2, name: `Alice` },
  { id: 3, name: `Charlie` },
  { id: 4, name: `Costa` },
];

for (const { id, name } of users) {
  console.log(`User ${id} - ${name}`);
}

console.log(`=================`);

const obj6 = { name: `John`, age: 30, country: `USA` };

const { name, ...items } = obj6;

console.log(name);
console.log(items);