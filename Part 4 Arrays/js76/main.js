/*



*/
"use strict";

const k2 = [1, 2, 3, 4, 5];

k2[1] = `hello`;

const k2Copy = k2.with(2, true)

console.log(k2);
console.log(k2Copy);
