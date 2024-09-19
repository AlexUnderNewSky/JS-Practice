/*



*/
"use strict";

let map = new Map();
map.set("key1", "value1");
map.set(`key2`, `value2`).set(`key3`, true).set(123, false);
console.log(map);

console.log(`============`);

let map1 = new Map();
map1.set(false, `closed`).set(true, { open: 1200 });
console.log(map1);
console.log(map1.get(true));
console.log(map1.get(false));

console.log(`=================`);

let map2 = new Map();

map2.set(20, [1, 2, 3]).set(`city`, `London`);
console.log(map2);
console.log(map2.get(20));
console.log(map2.has("city"));

console.log(`=================`);

let map3 = new Map();
map3.set(`color1`, `red`).set(`backgroundColor`, `pink`).set(`isAdmin`, true);
// map3.delete(`backgroundColor`);
console.log(map3);
console.log(map3.size);

console.log(`===========`);

const map4 = new Map();
map4.set(`name`, `Serhii`).set(`age`, 23).set(`car`, `Mini`);
for (const key of map4.keys()) {
  console.log(key);
}

console.log(`=============`);

for (const [key, value] of map4.entries()) {
  console.log(`${key} - ${value}`);
}

console.log(`========`);

const map5 = new Map();
map5.set(`name`, `Serhii`).set(`age`, 23).set(`car`, `Mini`);
map5.clear();
console.log(map5);

console.log(`===========`);

const obj1 = { name: `John` };
const obj2 = { name: `Serhii`, age: 23 };

const objMap = new Map();

objMap.set(obj1, `value`).set(obj2, `value2`);

console.log(objMap.get(obj1));

console.log(`================`);

const map6 = new Map([
  [`red`, `RED`],
  [`blue`, `BLUE`],
]);

console.log(map6);
console.log(map6.has(`red`));
console.log(map6.get(`red`));
console.log(map6.delete(`red`));
console.log(map6);

console.log(`=====================`);

const myMap = new Map([
  [`key1`, `value1`],
  [`key2`, `value2`],
  [`key3`, `value3`],
]);

myMap.forEach((value, key) => {
  console.log(key, value);
});

console.log(`============`);

const arr10 = [1, 2, 3, 4, 5];
const myMap1 = new Map([
  [`key5`, true],
  [arr10, `value 20`],
]);

console.log(myMap1);
console.log(myMap1.get(arr10));

console.log(`===============`);

const map10 = new Map([
  [`key1`, `value1`],
  [`key2`, `value2`],
]);

const mapToArr = Array.from(map10);
console.log(mapToArr);

console.log(`=================`);

const str = `hello`;
const str1 = Array.from(str);
console.log(str1);

const str2 = [...str];
console.log(str2);

console.log(`==============`);

const map11 = new Map([
  [`key1`, `value1`],
  [`key2`, `value2`],
]);

const arr = [];

map11.forEach((item, index) => {
  arr.push([item, index]);
});
console.log(arr);

console.log(`=============`);

const map12 = new Map([
  [`key1`, `value1`],
  [`key2`, `value2`],
]);

const mapToObject = Object.fromEntries(map12);

console.log(mapToObject);

console.log(`==============`);

const arr2 = [
  [1, 2],
  [3, 4],
];
const arr3 = Object.fromEntries(arr2);
console.log(arr3);

const myMap20 = new Map([
  [`a`, 10],
  [`b`, false],
]);

const obj5 = Object.fromEntries(myMap20);
console.log(obj5);

console.log(`==============`);

const myMap30 = new Map([
  [`phone`, +1235421415],
  [`city`, `London`],
]);

function mapToMyObject(map) {
  let obj = {};
  for (const [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}

let obj22 = mapToMyObject(myMap30);
console.log(obj22);

console.log(`===========`);

const myMap31 = new Map([
  [`phone`, +1235421415],
  [`city`, `London`],
]);

myMap31.set(NaN, `hello world`);
console.log(myMap31.get(NaN));

console.log(NaN !== NaN);
console.log(NaN == NaN);

// console.log(23 / `afsaf`);
