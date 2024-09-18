/*



*/
"use strict";

let m1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(m1);
console.log(m1[1]);
console.log(m1[1][1]);
console.log(m1[2][2]);

const c1 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

console.log(c1);

console.log(c1[0][0][0]);

console.log(c1[1][1][1]);

// const c2 = c1.map((el) => el.map((val) => val.map((item) => item * 5)));

// console.log(c2);

for (let i = 0; i < c1.length; i++) {
  for (let j = 0; j < c1[i].length; j++) {
    console.log(c1[i][j]);
  }
}

console.log(`==============`);

m1.push([10, 11, 12]);
m1.pop();
m1.pop(m1);
console.log(m1);

console.log(`================`);

c1[1].push([9, 10]);

console.log(c1);
